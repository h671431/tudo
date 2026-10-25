"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Lets sections with the class "reveal" slide in when they scroll into view.
export default function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Turn the home page writing animation off once it has played, so it doesn't
  // replay when navigating back to the home page.
  useEffect(() => {
    const t = setTimeout(() => document.documentElement.classList.remove("write-anim"), 6000);
    return () => clearTimeout(t);
  }, []);

  return null;
}
