"use client";

import { useState } from "react";
import { site } from "../lib/site";

// Sends the form to FormSubmit, which emails it to site.formEmail.
// The very first submission makes FormSubmit send an activation email to that
// address; nothing is delivered until the link in it has been clicked.
const endpoint = `https://formsubmit.co/ajax/${site.formEmail}`;

// `source` tells the team which page the enquiry came from.
export default function EnquiryForm({ source, children }) {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const data = Object.fromEntries(new FormData(e.currentTarget));
    data._subject = `New ${source} enquiry – Tudo`;
    data._template = "table";
    data.source = source;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => ({}));
      setStatus(res.ok && String(result.success) === "true" ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="form-message" role="status">
        Thank you! We have received your message and will get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
      {status === "sending" && <p className="note">Sending…</p>}
      {status === "error" && (
        <p className="form-error" role="alert">
          Something went wrong and your message was not sent. Please try again.
        </p>
      )}
    </form>
  );
}
