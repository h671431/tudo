"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// "Order kit" button. Until Paystack is live it opens a small pop-up that points
// people to the waiting list instead. The pop-up is rendered straight into
// <body>, because the frosted-glass panels would otherwise trap it.
// While open, focus moves into the pop-up and stays there, and the page behind
// doesn't scroll; on close, focus goes back to the button.
export default function OrderButton({ kit }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    const opener = buttonRef.current;
    dialog.querySelector("a, button").focus();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
      if (e.key !== "Tab") return;
      const items = dialog.querySelectorAll("a, button");
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      opener?.focus();
    };
  }, [open]);

  return (
    <>
      <button ref={buttonRef} className="btn" type="button" onClick={() => setOpen(true)}>
        Order kit
      </button>
      <span className="pay-soon">Paystack integration coming soon</span>
      {open &&
        createPortal(
          <div className="modal-backdrop" onClick={() => setOpen(false)}>
            <div
              ref={dialogRef}
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
