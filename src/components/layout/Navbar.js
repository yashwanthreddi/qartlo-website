"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { routes } from "@/lib/routes";

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <button
          type="button"
          className="nav-logo"
          onClick={() => router.push("/")}
          aria-label="Go to Qartlo home"
        >
          <span className="logo-mark">Q</span>
          <span>Qartlo</span>
        </button>

        <ul className="nav-links">
          <li>
            <a href="/features">Features</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <div className="nav-actions">
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => router.push(routes.login)}
          >
            Sign In
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => router.push(routes.signup)}
          >
            Create Account
          </button>
        </div>
      </div>
    </nav>
  );
}