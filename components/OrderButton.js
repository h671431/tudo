"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// "Order kit" button. Until Paystack is live it opens a small pop-up that points
// people to the waiting list instead. The pop-up is rendered straight into
// <body>, because the frosted-glass panels would otherwise trap it.
export default function OrderButton({ kit }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <>
      <button className="btn" type="button" onClick={() => setOpen(true)}>
        Order kit
      </button>
      <span className="pay-soon">Paystack integration coming soon</span>
      {open &&
        createPortal(
          <div className="modal-backdrop" onClick={() => setOpen(false)}>
            <div
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="order-title"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 id="order-title">{kit} is coming soon</h3>
              <p>
                Online payment with Paystack opens when we launch. Join the
                waiting list and you&apos;ll be the first to order.
              </p>
              <div className="modal-actions">
                <a className="btn" href="/#waitlist">
                  Join waiting list
                </a>
                <button className="modal-close" type="button" onClick={() => setOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
