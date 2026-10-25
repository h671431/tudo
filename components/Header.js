"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "../lib/site";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link className="logo" href="/">
        Tudo
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
      </nav>
    </header>
  );
}
