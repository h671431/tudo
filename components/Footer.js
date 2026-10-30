import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>Growing Into More.</p>
      <p>
        An early-stage startup. Details subject to confirmation. ·{" "}
        <Link href="/privacy">Privacy &amp; Terms</Link>
      </p>
    </footer>
  );
}
