"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "../lib/site";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link className="logo" href="/" aria-label="tudo – home">
        <Logo />
        <span className="logo-tag">PLAY WITH PURPOSE</span>
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
        <Link className="btn header-cta" href="/#waitlist">
          Join waiting list
        </Link>
      </nav>
    </header>
  );
}
