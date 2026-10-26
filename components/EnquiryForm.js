"use client";

import { useState } from "react";

// Sends the form to Formspree, which emails it to the team.
// Set NEXT_PUBLIC_FORMSPREE_ID (the id in https://formspree.io/f/<id>) in
// .env.local and in Vercel. Without it, the form only shows a demo message.
const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

// `source` tells the team which page the enquiry came from.
export default function EnquiryForm({ source, children }) {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formId) {
      setStatus("demo");
      return;
    }

    setStatus("sending");
    const data = new FormData(e.currentTarget);
    data.append("_subject", `New ${source} enquiry – Tudo`);
    data.append("source", source);

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent" || status === "demo") {
    return (
      <p className="form-message" role="status">
        {status === "sent"
          ? "Thank you! We have received your message and will get back to you soon."
          : "Thank you! This is a demo – nothing has been sent yet."}
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
