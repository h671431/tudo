"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "../lib/site";
import Logo from "./Logo";

// On phones the links fold away behind a menu button; "Join waiting list"
// stays visible next to it (see .menu-toggle in globals.css).
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the menu after moving to another page.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header${open ? " menu-open" : ""}`}>
      <Link className="logo" href="/" aria-label="tudo – home">
        <Logo />
        <span className="logo-tag">PLAY WITH PURPOSE</span>
      </Link>
      <nav id="site-nav">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="btn header-cta" href="/#waitlist">
        Join waiting list
      </Link>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        <span className="sr-only">Menu</span>
        <span className="menu-icon" aria-hidden="true"></span>
      </button>
    </header>
  );
}
