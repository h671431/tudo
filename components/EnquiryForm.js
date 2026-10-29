"use client";

import { useState } from "react";
import { site } from "../lib/site";

// Sends the form by email to site.formEmail.
// With site.web3formsKey set, it goes through Web3Forms (get a free key at
// web3forms.com with that email address). Without a key it falls back to
// FormSubmit, which needs a one-time activation from the inbox.
const useWeb3Forms = Boolean(site.web3formsKey);
const endpoint = useWeb3Forms
  ? "https://api.web3forms.com/submit"
  : `https://formsubmit.co/ajax/${site.formEmail}`;

// Give up after this long, so the form never hangs on "Sending…".
const timeoutMs = 15000;

// `source` tells the team which page the enquiry came from; `sentText` replaces
// the default thank-you message.
export default function EnquiryForm({ source, className, sentText, children }) {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const data = Object.fromEntries(new FormData(e.currentTarget));
    data.source = source;
    if (useWeb3Forms) {
      data.access_key = site.web3formsKey;
      data.subject = `New ${source} enquiry – Tudo`;
      data.from_name = "Tudo website";
    } else {
      data._subject = `New ${source} enquiry – Tudo`;
      data._template = "table";
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
        signal: controller.signal,
      });
      const result = await res.json().catch(() => ({}));
      setStatus(res.ok && String(result.success) === "true" ? "sent" : "error");
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timer);
    }
  }

  if (status === "sent") {
    return (
      <p className={`form-message ${className ? className + "-done" : ""}`} role="status">
        {sentText || "Thank you! We have received your message and will get back to you soon."}
      </p>
    );
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
      {status === "sending" && <p className="note">Sending…</p>}
      {status === "error" && (
        <p className="form-error" role="alert">
          Something went wrong and your message was not sent. Please try again
          in a little while.
        </p>
      )}
    </form>
  );
}
