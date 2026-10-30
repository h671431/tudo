"use client";

import { useRef, useState } from "react";
import EnquiryForm from "./EnquiryForm";

// Contact choices. No form shows until one is picked; each has its own heading
// and fields. Parents join the waiting list instead.
const choices = [
  {
    id: "sponsors",
    name: "Sponsors & NPOs",
    text: "Fund refreshed TUDO kits for ECD centres that can't afford them. We report back on every centre you support.",
    heading: "Sponsor ECD centres",
    source: "Sponsor / NPO",
  },
  {
    id: "brands",
    name: "Brands",
    text: "Get your educational products into TUDO kits and in front of the families who need them.",
    heading: "Put your products in TUDO kits",
    source: "Brand",
  },
  {
    id: "other",
    name: "Other questions",
    text: "A general question, or a request to see, change or delete the details you've sent us.",
    heading: "Send us a message",
    source: "Other / privacy",
  },
];

const consent = (
  <label className="checkbox">
    <input name="consent" type="checkbox" required /> I agree that my details may
    be stored to answer this message.
  </label>
);

function SponsorFields() {
  return (
    <>
      <label>
        Organisation <input name="organisation" type="text" required />
      </label>
      <label>
        Your name <input name="name" type="text" required />
      </label>
      <label>
        Email <input name="email" type="email" required />
      </label>
      <label>
        Region(s) you support <input name="regions" type="text" />
      </label>
      <label>
        How many ECD centres or children? <input name="reach" type="text" />
      </label>
      <label>
        Anything else? <textarea name="message" rows={3}></textarea>
      </label>
    </>
  );
}

function BrandFields() {
  return (
    <>
      <label>
        Company <input name="company" type="text" required />
      </label>
      <label>
        Your name <input name="name" type="text" required />
      </label>
      <label>
        Email <input name="email" type="email" required />
      </label>
      <label>
        Website <input name="website" type="url" />
      </label>
      <label>
        Your product and the age it&apos;s for
        <textarea name="product" rows={3} required></textarea>
      </label>
    </>
  );
}

function OtherFields() {
  return (
    <>
      <label>
        Your name <input name="name" type="text" required />
      </label>
      <label>
        Email <input name="email" type="email" required />
      </label>
      <label>
        Message <textarea name="message" rows={4} required></textarea>
      </label>
    </>
  );
}

const fields = { sponsors: SponsorFields, brands: BrandFields, other: OtherFields };

export default function ContactForms() {
  const [active, setActive] = useState(null);
  const formRef = useRef(null);
  const choice = choices.find((c) => c.id === active);
  const Fields = choice && fields[choice.id];

  function pick(id) {
    setActive(id);
    // Wait for the form to render, then bring it into view.
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }

  return (
    <>
      <section className="about-grid partner-grid">
        {choices.map((c) => (
          <button
            type="button"
            className={`about-card partner-card${active === c.id ? " active" : ""}`}
            aria-expanded={active === c.id}
            onClick={() => pick(c.id)}
            key={c.id}
          >
            <h3>{c.name}</h3>
            <p>{c.text}</p>
            <span className="partner-link">Get in touch →</span>
          </button>
        ))}
      </section>

      {choice && (
        <section className="contact-form" ref={formRef} key={choice.id}>
          <h2>{choice.heading}</h2>
          <EnquiryForm source={choice.source}>
            <Fields />
            {consent}
            <button className="btn" type="submit">
              Send
            </button>
          </EnquiryForm>
        </section>
      )}
    </>
  );
}
