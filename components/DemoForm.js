"use client";

import { useState } from "react";

// Demo form: nothing is sent anywhere yet. Replace onSubmit with a real
// submission (for example Formspree, Resend or a server action) before launch.
export default function DemoForm({ children }) {
  const [sent, setSent] = useState(false);

  return (
    <>
      <form
        hidden={sent}
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        {children}
      </form>
      <p className="note" hidden={!sent}>
        Thank you! This is a demo – nothing has been sent yet.
      </p>
    </>
  );
}
