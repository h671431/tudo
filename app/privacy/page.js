import Link from "next/link";

export const metadata = { title: "Privacy & Terms" };

export default function Privacy() {
  return (
    <main className="legal">
      <h1>Privacy &amp; Terms</h1>
      <p className="lead">
        We keep this simple: we only ask for what we need to answer you, and we
        never sell your details.
      </p>
      <p className="small">Last updated: 26 October 2026</p>

      <h2>Who we are</h2>
      <p>
        Tudo is a student start-up developed through the MakersForge programme
        at the University of Cape Town. You can reach us through our{" "}
        <Link href="/contact">contact form</Link>.
      </p>

      <h2>What we collect</h2>
      <p>
        We only collect the details you type into our forms, such as your name,
        organisation, email address and your message. We do not ask for
        payment details on this website.
      </p>

      <h2>How we use it</h2>
      <p>
        We use your details to answer your enquiry, send you a quote, or tell
        you about the waitlist you signed up for. We do not sell or share your
        details with anyone for marketing.
      </p>

      <h2>Services we use</h2>
      <p>
        Our forms are delivered to our email through FormSubmit, and the website
        is hosted by Vercel. These services process data on our behalf so the
        website and forms can work.
      </p>

      <h2>Cookies</h2>
      <p>
        We do not use tracking or advertising cookies. Your browser may store
        small settings, such as the display style you chose, on your own
        device.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep your details only as long as we need them to follow up on your
        enquiry, and delete them when they are no longer needed.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask to see, correct or delete the details we hold about you at
        any time, in line with South Africa&apos;s Protection of Personal
        Information Act (POPIA) and, where it applies, the GDPR. Just send us a
        message through the contact form.
      </p>

      <h2>Terms of use</h2>
      <p>
        The information on this website is general. Products, contents, prices
        and delivery times are confirmed in a written quote before you order.
        Nothing on this website is an offer to sell, and no payment is taken
        here.
      </p>
      <p>
        Text, images and the Tudo name and logo belong to Tudo and our partners.
        Please ask before using them.
      </p>
      <p>
        We may update this page from time to time. The date at the top shows
        when it last changed.
      </p>
    </main>
  );
}
