"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "../lib/site";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link className="logo" href="/">
        <img src="/logo.svg" alt="tudo" width={136} height={56} />
        <span className="logo-tag">EDUCATIONAL PLAYKITS</span>
      </Link>
      <nav>
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
        <Link className="btn header-cta" href="/ecd">
          Request a sample
        </Link>
      </nav>
    </header>
  );
}
