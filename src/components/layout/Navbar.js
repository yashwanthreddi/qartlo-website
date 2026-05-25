"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { routes } from "@/lib/routes";

const navItems = [
  {
    label: "App",
    href: "/app",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (href) => {
    setMenuOpen(false);
    router.push(href);
  };

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-inner">
          <button
            type="button"
            className="nav-logo"
            onClick={() => handleNavigate("/")}
            aria-label="Go to Qartlo home"
          >
            <span className="logo-image-wrap">
              <img
                src="/images/maskable-icon-512.png"
                alt="Qartlo logo"
                className="logo-image"
              />
            </span>

            <span className="logo-text">Qartlo</span>
          </button>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              type="button"
              className="nav-btn nav-btn-outline"
              onClick={() => handleNavigate(routes.login)}
            >
              Sign In
            </button>

            <button
              type="button"
              className="nav-btn nav-btn-primary"
              onClick={() => handleNavigate(routes.signup)}
            >
              Start Free Trial
            </button>
          </div>

          <button
            type="button"
            className={`mobile-menu-btn ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <div className="mobile-menu-card">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.href}
                onClick={() => handleNavigate(item.href)}
              >
                {item.label}
              </button>
            ))}

            <div className="mobile-actions">
              <button
                type="button"
                className="nav-btn nav-btn-outline"
                onClick={() => handleNavigate(routes.login)}
              >
                Sign In
              </button>

              <button
                type="button"
                className="nav-btn nav-btn-primary"
                onClick={() => handleNavigate(routes.signup)}
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
          background: rgba(248, 252, 250, 0.78);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transition:
            background 0.22s ease,
            border-color 0.22s ease,
            box-shadow 0.22s ease;
        }

        .nav.scrolled {
          border-bottom-color: rgba(15, 23, 42, 0.08);
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 14px 40px rgba(15, 23, 42, 0.08);
        }

        .nav-container {
          width: 100%;
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .nav-inner {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 30px;
          min-height: 76px;
        }

        .nav-logo {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          border: 0;
          background: transparent;
          padding: 0;
          cursor: pointer;
        }

        .logo-image-wrap {
          display: inline-flex;
          width: 44px;
          height: 44px;
          flex: 0 0 44px;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 14px;
          background: #ffffff;
          box-shadow: 0 14px 28px rgba(18, 140, 126, 0.16);
        }

        .logo-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .logo-text {
          font-size: 24px;
          font-weight: 950;
          letter-spacing: -0.055em;
          color: #0f172a;
        }

        .nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .nav-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          border-radius: 999px;
          padding: 10px 15px;
          color: #475569;
          font-size: 15px;
          font-weight: 850;
          letter-spacing: 0.01em;
          text-decoration: none;
          transition:
            background 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .nav-links a:hover {
          background: rgba(18, 140, 126, 0.08);
          color: #0f766e;
          transform: translateY(-1px);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
        }

        .nav-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          border-radius: 999px;
          padding: 12px 20px;
          font-size: 14px;
          font-weight: 900;
          border: 0;
          cursor: pointer;
          white-space: nowrap;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .nav-btn:hover {
          transform: translateY(-2px);
        }

        .nav-btn-outline {
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: rgba(255, 255, 255, 0.82);
          color: #0f172a;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
        }

        .nav-btn-outline:hover {
          background: #ffffff;
          box-shadow: 0 16px 34px rgba(15, 23, 42, 0.1);
        }

        .nav-btn-primary {
          background: linear-gradient(135deg, #128c7e, #0f766e);
          color: #ffffff;
          box-shadow: 0 16px 34px rgba(18, 140, 126, 0.24);
        }

        .nav-btn-primary:hover {
          box-shadow: 0 20px 42px rgba(18, 140, 126, 0.32);
        }

        .mobile-menu-btn {
          display: none;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 5px;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.86);
          cursor: pointer;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06);
        }

        .mobile-menu-btn span {
          width: 18px;
          height: 2px;
          border-radius: 999px;
          background: #0f172a;
          transition:
            transform 0.2s ease,
            opacity 0.2s ease;
        }

        .mobile-menu-btn.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .mobile-menu-btn.open span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-btn.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .mobile-menu {
          display: none;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.28s ease;
        }

        .mobile-menu.open {
          max-height: 520px;
        }

        .mobile-menu-card {
          display: grid;
          gap: 8px;
          margin-bottom: 16px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.94);
          padding: 12px;
          box-shadow: 0 18px 46px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(18px);
        }

        .mobile-menu-card > button {
          width: 100%;
          border: 0;
          border-radius: 16px;
          background: transparent;
          padding: 14px 14px;
          color: #0f172a;
          font-size: 15px;
          font-weight: 850;
          text-align: left;
          cursor: pointer;
        }

        .mobile-menu-card > button:hover {
          background: rgba(18, 140, 126, 0.08);
          color: #0f766e;
        }

        .mobile-actions {
          display: grid;
          gap: 10px;
          padding-top: 8px;
        }

        .mobile-actions .nav-btn {
          width: 100%;
        }

        @media (max-width: 900px) {
          .nav-inner {
            grid-template-columns: auto 1fr auto;
            min-height: 72px;
          }

          .nav-links,
          .nav-actions {
            display: none;
          }

          .mobile-menu-btn {
            display: inline-flex;
            justify-self: end;
          }

          .mobile-menu {
            display: block;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 0 12px;
          }

          .logo-image-wrap {
            width: 38px;
            height: 38px;
            flex-basis: 38px;
            border-radius: 13px;
          }

          .logo-text {
            font-size: 22px;
          }

          .nav-inner {
            min-height: 68px;
          }
        }
      `}</style>
    </nav>
  );
}