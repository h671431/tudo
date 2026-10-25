import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>Play that opens possibilities.</p>
      <p>
        A working venture concept. Details subject to confirmation. ·{" "}
        <Link href="/privacy">Privacy &amp; Terms</Link>
      </p>
    </footer>
  );
}
