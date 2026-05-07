"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function QartloHome() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [counters, setCounters] = useState({
    stores: 0,
    orders: 0,
    merchants: 0,
    uptime: 0,
  });

  const statsRef = useRef(null);
  const statsAnimated = useRef(false);

  const goLogin = () => router.push("https://app.qartlo.com/login");
  const goSignup = () => router.push("https://app.qartlo.com/signup");

  const features = [
    {
      icon: "🚀",
      title: "Fast Store Setup",
      desc: "Create your branded online store quickly with a simple guided setup experience.",
    },
    {
      icon: "📦",
      title: "Product Management",
      desc: "Add products, categories, prices, stock, images, and descriptions from one dashboard.",
    },
    {
      icon: "🛒",
      title: "Smooth Checkout",
      desc: "Give customers a simple buying experience with cart, checkout, and order confirmation.",
    },
    {
      icon: "💳",
      title: "Online Payments",
      desc: "Connect secure payment options and receive paid orders directly through your store.",
    },
    {
      icon: "📊",
      title: "Orders & Reports",
      desc: "Track orders, customers, revenue, and store performance with clean business insights.",
    },
    {
      icon: "🌐",
      title: "Custom Domain Ready",
      desc: "Use your own domain or subdomain and give every store a professional branded link.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Create your account",
      desc: "Sign up and open your Qartlo admin dashboard.",
      icon: "👤",
    },
    {
      num: "02",
      title: "Build your store",
      desc: "Add store details, branding, categories, and products.",
      icon: "🏪",
    },
    {
      num: "03",
      title: "Share your store link",
      desc: "Start selling with your Qartlo link or connect a custom domain.",
      icon: "🔗",
    },
    {
      num: "04",
      title: "Manage orders",
      desc: "Receive orders, check payments, and manage customers from one place.",
      icon: "🎉",
    },
  ];

  const whys = [
    { icon: "⚡", text: "Quick setup for non-technical users" },
    { icon: "🧩", text: "Everything managed from one dashboard" },
    { icon: "📱", text: "Mobile-friendly storefront experience" },
    { icon: "🔐", text: "Secure admin and payment-ready flow" },
    { icon: "🌱", text: "Built to grow with your business" },
  ];

  const faqs = [
    {
      q: "How quickly can I launch my store?",
      a: "You can create your account, add store details, upload products, and start sharing your store link quickly. The process is designed to be simple for business owners.",
    },
    {
      q: "Do I need technical knowledge?",
      a: "No. Qartlo is designed for business owners and teams who want to manage products, orders, customers, and store settings without complex technical work.",
    },
    {
      q: "Can I use a custom domain?",
      a: "Yes. You can connect a custom domain or subdomain to your store so customers can visit your business using a branded website link.",
    },
    {
      q: "Can I accept online payments?",
      a: "Yes. Qartlo can be connected with secure payment options so customers can complete purchases online.",
    },
    {
      q: "Is Qartlo mobile-friendly?",
      a: "Yes. The storefront and admin experience are designed to work smoothly on desktop, tablet, and mobile devices.",
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated.current) {
          statsAnimated.current = true;

          const animate = (key, target, decimals = 0) => {
            let current = 0;
            const stepValue = target / 58;

            const step = () => {
              current += stepValue;
              if (current >= target) current = target;

              setCounters((prev) => ({
                ...prev,
                [key]: Number(current.toFixed(decimals)),
              }));

              if (current < target) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
          };

          animate("stores", 1000);
          animate("orders", 150000);
          animate("merchants", 850);
          animate("uptime", 99.9, 1);
        }
      },
      { threshold: 0.35 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [steps.length]);

  const fmtNum = (n) => {
    if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M+`;
    if (n >= 1000) return `${Math.round(n / 1000)}K+`;
    return `${Math.round(n)}+`;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --bg: #f5faf9;
          --surface: #ffffff;
          --surface-soft: #f8fcfb;
          --border: #dbe9e6;
          --border-soft: #eaf2f0;
          --text: #0f172a;
          --muted: #61716f;
          --muted-2: #81908e;
          --primary: #198f7d;
          --primary-dark: #107161;
          --primary-soft: #dff5ef;
          --shadow-sm: 0 10px 28px rgba(15, 23, 42, 0.05);
          --shadow-md: 0 24px 70px rgba(15, 23, 42, 0.1);
          --shadow-primary: 0 16px 34px rgba(25, 143, 125, 0.22);
          --radius-xl: 34px;
          --radius-lg: 26px;
          --container: 1180px;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: var(--bg);
          color: var(--text);
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        button {
          font-family: inherit;
        }

        .page-shell {
          min-height: 100vh;
          background:
            radial-gradient(circle at 12% 8%, rgba(25, 143, 125, 0.14), transparent 28%),
            radial-gradient(circle at 88% 4%, rgba(15, 118, 110, 0.1), transparent 26%),
            radial-gradient(circle at 50% 52%, rgba(25, 143, 125, 0.055), transparent 36%),
            linear-gradient(180deg, #f7fbfb 0%, #f4faf8 52%, #f7fbfb 100%);
        }

        .container {
          width: 100%;
          max-width: var(--container);
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          transition: all 0.25s ease;
          border-bottom: 1px solid transparent;
        }

        .nav.scrolled {
          background: rgba(245, 250, 249, 0.88);
          backdrop-filter: blur(18px);
          border-bottom-color: rgba(219, 233, 230, 0.75);
        }

        .nav-inner {
          height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.35rem;
          font-weight: 900;
          letter-spacing: -0.035em;
          cursor: pointer;
          color: var(--text);
          user-select: none;
        }

        .logo-mark {
          width: 42px;
          height: 42px;
          border-radius: 15px;
          background: linear-gradient(145deg, var(--primary), #21b69f);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          box-shadow: 0 12px 28px rgba(25, 143, 125, 0.22);
        }

        .nav-links {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--muted);
          font-size: 0.94rem;
          font-weight: 650;
          transition: color 0.2s ease;
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn {
          border: none;
          outline: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
          font-weight: 800;
          border-radius: 15px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          text-decoration: none;
          white-space: nowrap;
        }

        .btn-outline {
          background: rgba(255, 255, 255, 0.84);
          color: var(--text);
          border: 1px solid var(--border);
          padding: 11px 18px;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.035);
        }

        .btn-outline:hover {
          background: #ffffff;
          border-color: rgba(25, 143, 125, 0.22);
          transform: translateY(-1px);
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary), #12a58f);
          color: white;
          padding: 11px 18px;
          box-shadow: var(--shadow-primary);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, var(--primary-dark), var(--primary));
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(25, 143, 125, 0.28);
        }

        .btn-lg {
          padding: 16px 24px;
          font-size: 0.98rem;
          border-radius: 17px;
        }

        .hero {
          padding: 66px 0 84px;
          position: relative;
        }

        .hero-grid {
          position: relative;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 52px;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(223, 245, 239, 0.82);
          color: var(--primary-dark);
          border: 1px solid rgba(25, 143, 125, 0.12);
          border-radius: 999px;
          padding: 9px 15px;
          font-size: 0.84rem;
          font-weight: 850;
          margin-bottom: 24px;
          box-shadow: 0 8px 22px rgba(25, 143, 125, 0.08);
        }

        .hero-title {
          font-size: clamp(2.65rem, 5.3vw, 5rem);
          line-height: 0.99;
          letter-spacing: -0.07em;
          font-weight: 900;
          max-width: 720px;
          margin-bottom: 22px;
          color: var(--text);
        }

        .hero-title .accent {
          color: var(--primary);
        }

        .hero-sub {
          font-size: 1.08rem;
          line-height: 1.85;
          color: var(--muted);
          max-width: 650px;
          margin-bottom: 32px;
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 34px;
        }

        .hero-trust {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          color: var(--muted);
          font-size: 0.92rem;
          font-weight: 650;
        }

        .trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid var(--border-soft);
        }

        .hero-card {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(234, 242, 240, 0.95);
          border-radius: var(--radius-xl);
          padding: 20px;
          box-shadow: var(--shadow-md);
          backdrop-filter: blur(18px);
        }

        .dashboard-card {
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid var(--border-soft);
          background: #ffffff;
        }

        .dashboard-top {
          padding: 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-soft);
          background: linear-gradient(180deg, #ffffff, #f8fcfb);
        }

        .dash-dots {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #d7e5e2;
        }

        .dash-label {
          font-size: 0.82rem;
          font-weight: 850;
          color: var(--primary-dark);
          background: var(--primary-soft);
          padding: 7px 11px;
          border-radius: 999px;
        }

        .dashboard-body {
          padding: 22px;
        }

        .dash-welcome {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }

        .dash-welcome h3 {
          font-size: 1.3rem;
          letter-spacing: -0.035em;
          margin-bottom: 6px;
        }

        .dash-welcome p {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.55;
        }

        .dash-icon {
          width: 50px;
          height: 50px;
          border-radius: 17px;
          background: var(--primary-soft);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.35rem;
          flex-shrink: 0;
        }

        .metric-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 14px;
        }

        .metric-card {
          background: var(--surface-soft);
          border: 1px solid var(--border-soft);
          border-radius: 18px;
          padding: 15px;
        }

        .metric-card span {
          color: var(--muted-2);
          font-size: 0.76rem;
          font-weight: 750;
          display: block;
          margin-bottom: 7px;
        }

        .metric-card strong {
          font-size: 1.05rem;
          letter-spacing: -0.035em;
        }

        .chart-box {
          background: linear-gradient(180deg, #f9fcfb, #ffffff);
          border: 1px solid var(--border-soft);
          border-radius: 22px;
          padding: 18px;
          margin-top: 14px;
        }

        .chart-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .chart-head strong {
          font-size: 0.95rem;
        }

        .chart-head span {
          color: var(--primary);
          font-weight: 850;
          font-size: 0.85rem;
        }

        .fake-chart {
          height: 112px;
          border-radius: 16px;
          background:
            linear-gradient(to right, rgba(219, 233, 230, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(219, 233, 230, 0.5) 1px, transparent 1px),
            linear-gradient(180deg, rgba(25, 143, 125, 0.08), rgba(25, 143, 125, 0.02));
          background-size: 44px 100%, 100% 28px, 100% 100%;
          position: relative;
          overflow: hidden;
        }

        .fake-chart svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .section {
          padding: 86px 0;
        }

        .section-soft {
          background: rgba(255, 255, 255, 0.5);
          border-top: 1px solid rgba(219, 233, 230, 0.72);
          border-bottom: 1px solid rgba(219, 233, 230, 0.72);
        }

        .section-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 48px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-soft);
          color: var(--primary-dark);
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 900;
          margin-bottom: 16px;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3.08rem);
          line-height: 1.1;
          letter-spacing: -0.055em;
          font-weight: 900;
          margin-bottom: 14px;
        }

        .section-sub {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--muted);
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid var(--border-soft);
          border-radius: 24px;
          padding: 28px 22px;
          box-shadow: var(--shadow-sm);
          text-align: center;
        }

        .stat-card strong {
          display: block;
          font-size: 2rem;
          font-weight: 900;
          letter-spacing: -0.045em;
          margin-bottom: 8px;
          color: var(--primary);
        }

        .stat-card span {
          color: var(--muted);
          font-size: 0.94rem;
          font-weight: 650;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: stretch;
        }

        .card {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid var(--border-soft);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
        }

        .about-card {
          padding: 34px;
        }

        .about-card h3 {
          font-size: 1.72rem;
          line-height: 1.16;
          letter-spacing: -0.045em;
          margin-bottom: 16px;
        }

        .about-card p {
          color: var(--muted);
          line-height: 1.85;
          font-size: 0.98rem;
        }

        .about-card p + p {
          margin-top: 12px;
        }

        .about-feature-card {
          padding: 34px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fcfb 100%);
        }

        .big-mark {
          width: 76px;
          height: 76px;
          border-radius: 24px;
          background: linear-gradient(145deg, var(--primary), #21b69f);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 900;
          margin-bottom: 20px;
          box-shadow: var(--shadow-primary);
        }

        .about-feature-card h4 {
          font-size: 1.45rem;
          margin-bottom: 18px;
          line-height: 1.25;
          letter-spacing: -0.04em;
        }

        .check-list {
          list-style: none;
          display: grid;
          gap: 14px;
        }

        .check-list li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          color: var(--muted);
          line-height: 1.65;
          font-size: 0.96rem;
        }

        .check-list li::before {
          content: "✓";
          width: 24px;
          height: 24px;
          border-radius: 999px;
          background: var(--primary-soft);
          color: var(--primary);
          font-weight: 900;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .feature-card {
          padding: 26px;
          border-radius: 26px;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid var(--border-soft);
          box-shadow: var(--shadow-sm);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: rgba(25, 143, 125, 0.18);
        }

        .feature-icon {
          width: 54px;
          height: 54px;
          border-radius: 18px;
          background: var(--primary-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.45rem;
          margin-bottom: 18px;
        }

        .feature-card h3 {
          font-size: 1.07rem;
          margin-bottom: 10px;
          letter-spacing: -0.025em;
        }

        .feature-card p {
          color: var(--muted);
          line-height: 1.72;
          font-size: 0.95rem;
        }

        .how-grid {
          display: grid;
          grid-template-columns: 0.94fr 1.06fr;
          gap: 26px;
          align-items: start;
        }

        .steps-panel {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid var(--border-soft);
          border-radius: var(--radius-lg);
          padding: 18px;
          box-shadow: var(--shadow-sm);
        }

        .step-item {
          border-radius: 20px;
          padding: 18px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }

        .step-item + .step-item {
          margin-top: 10px;
        }

        .step-item.active {
          background: var(--primary-soft);
          border-color: rgba(25, 143, 125, 0.12);
        }

        .step-label {
          color: var(--primary);
          font-size: 0.78rem;
          font-weight: 900;
          margin-bottom: 7px;
        }

        .step-title {
          font-size: 1.05rem;
          font-weight: 850;
          margin-bottom: 6px;
          letter-spacing: -0.025em;
        }

        .step-desc {
          color: var(--muted);
          font-size: 0.95rem;
          line-height: 1.72;
        }

        .mockup-card {
          background: rgba(255, 255, 255, 0.94);
          border: 1px solid var(--border-soft);
          border-radius: 30px;
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }

        .mockup-top {
          padding: 16px 18px;
          border-bottom: 1px solid var(--border-soft);
          background: #fbfdfd;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .mockup-url {
          color: var(--muted-2);
          font-size: 0.84rem;
          font-weight: 700;
          background: var(--surface-soft);
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid var(--border-soft);
        }

        .mockup-body {
          padding: 38px 34px;
          text-align: center;
        }

        .mockup-icon {
          width: 90px;
          height: 90px;
          border-radius: 27px;
          margin: 0 auto 20px;
          background: var(--primary-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
        }

        .mockup-step {
          font-size: 0.8rem;
          color: var(--primary);
          font-weight: 900;
          margin-bottom: 8px;
        }

        .mockup-title {
          font-size: 1.55rem;
          font-weight: 900;
          letter-spacing: -0.045em;
          margin-bottom: 12px;
        }

        .mockup-desc {
          color: var(--muted);
          font-size: 0.98rem;
          line-height: 1.8;
          max-width: 430px;
          margin: 0 auto;
        }

        .prog {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 24px;
        }

        .prog button {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          background: #d9e5e3;
          transition: all 0.2s ease;
        }

        .prog button.active {
          width: 30px;
          background: var(--primary);
        }

        .why-band {
          background:
            radial-gradient(circle at 18% 20%, rgba(255, 255, 255, 0.75), transparent 28%),
            linear-gradient(180deg, #e6f6f2 0%, #dcf1ec 100%);
          border-top: 1px solid rgba(25, 143, 125, 0.09);
          border-bottom: 1px solid rgba(25, 143, 125, 0.09);
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .why-card {
          background: rgba(255, 255, 255, 0.76);
          border: 1px solid rgba(25, 143, 125, 0.1);
          border-radius: 22px;
          padding: 23px 18px;
          text-align: center;
          box-shadow: 0 10px 28px rgba(25, 143, 125, 0.06);
        }

        .why-card .icon {
          font-size: 1.5rem;
          margin-bottom: 11px;
          display: block;
        }

        .why-card p {
          font-size: 0.93rem;
          line-height: 1.55;
          color: #24423d;
          font-weight: 750;
        }

        .faq-wrap {
          max-width: 880px;
          margin: 0 auto;
        }

        .faq-list {
          display: grid;
          gap: 14px;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.94);
          border: 1px solid var(--border-soft);
          border-radius: 22px;
          box-shadow: var(--shadow-sm);
          overflow: hidden;
        }

        .faq-btn {
          width: 100%;
          background: transparent;
          border: none;
          text-align: left;
          padding: 22px 22px;
          font-size: 1rem;
          font-weight: 850;
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
        }

        .faq-btn span:last-child {
          color: var(--primary);
          font-size: 1.35rem;
          flex-shrink: 0;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.25s ease;
          color: var(--muted);
          line-height: 1.8;
          font-size: 0.96rem;
          padding: 0 22px;
        }

        .faq-answer.open {
          max-height: 220px;
          padding: 0 22px 22px;
        }

        .cta-box {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 18% 20%, rgba(25, 143, 125, 0.12), transparent 28%),
            linear-gradient(180deg, #ffffff 0%, #f6fbfb 100%);
          border: 1px solid var(--border-soft);
          border-radius: 34px;
          padding: 58px 34px;
          text-align: center;
          box-shadow: var(--shadow-md);
        }

        .cta-box h2 {
          font-size: clamp(2rem, 4vw, 3.06rem);
          line-height: 1.1;
          letter-spacing: -0.055em;
          margin-bottom: 14px;
          font-weight: 900;
        }

        .cta-box p {
          color: var(--muted);
          max-width: 650px;
          margin: 0 auto 28px;
          line-height: 1.8;
          font-size: 1rem;
        }

        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
        }

        .footer {
          padding: 30px 0 42px;
        }

        .footer-card {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid var(--border-soft);
          border-radius: 30px;
          box-shadow: var(--shadow-sm);
          padding: 34px 28px;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.7fr 1fr 1fr 1fr;
          gap: 28px;
          margin-bottom: 24px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.25rem;
          font-weight: 900;
          margin-bottom: 16px;
          letter-spacing: -0.035em;
        }

        .footer-brand-p {
          color: var(--muted);
          line-height: 1.8;
          font-size: 0.95rem;
          max-width: 370px;
        }

        .footer-title {
          font-size: 0.82rem;
          color: var(--muted-2);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 14px;
          font-weight: 850;
        }

        .footer-links {
          list-style: none;
          display: grid;
          gap: 10px;
        }

        .footer-links a,
        .footer-link-btn {
          text-decoration: none;
          color: var(--muted);
          font-size: 0.95rem;
          background: transparent;
          border: 0;
          cursor: pointer;
          text-align: left;
          padding: 0;
        }

        .footer-links a:hover,
        .footer-link-btn:hover {
          color: var(--primary);
        }

        .footer-bottom {
          border-top: 1px solid var(--border-soft);
          padding-top: 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footer-copy,
        .footer-seo {
          color: var(--muted-2);
          font-size: 0.88rem;
          line-height: 1.7;
        }

        .footer-seo {
          max-width: 620px;
          text-align: right;
        }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .reveal.in {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1080px) {
          .hero-grid,
          .about-grid,
          .how-grid,
          .footer-top {
            grid-template-columns: 1fr;
          }

          .stats-row {
            grid-template-columns: repeat(2, 1fr);
          }

          .feature-grid {
            grid-template-columns: 1fr 1fr;
          }

          .why-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .footer-seo {
            text-align: left;
          }
        }

        @media (max-width: 760px) {
          .nav-links {
            display: none;
          }

          .nav-inner {
            height: 74px;
          }

          .nav-logo span {
            font-size: 1.18rem;
          }

          .hero {
            padding: 42px 0 60px;
          }

          .hero-title {
            font-size: 2.55rem;
          }

          .hero-sub,
          .section-sub,
          .about-card p,
          .mockup-desc,
          .cta-box p {
            font-size: 0.96rem;
          }

          .metric-grid,
          .stats-row,
          .feature-grid,
          .why-grid {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 68px 0;
          }

          .cta-box {
            padding: 44px 22px;
          }

          .footer-card {
            padding: 28px 20px;
          }
        }

        @media (max-width: 560px) {
          .container {
            padding-left: 18px;
            padding-right: 18px;
          }

          .nav-actions .btn-outline {
            display: none;
          }

          .nav-actions .btn-primary {
            padding: 10px 14px;
          }

          .hero-ctas,
          .cta-actions {
            flex-direction: column;
          }

          .btn-lg,
          .cta-actions .btn,
          .hero-ctas .btn {
            width: 100%;
          }

          .hero-card,
          .dashboard-body,
          .about-card,
          .about-feature-card,
          .mockup-body {
            padding: 22px;
          }

          .hero-card {
            border-radius: 26px;
          }
        }
      `}</style>

      <div className="page-shell">
        <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
          <div className="container nav-inner">
            <div className="nav-logo" onClick={() => router.push("/")} role="button" tabIndex={0}>
              <div className="logo-mark">Q</div>
              <span>Qartlo</span>
            </div>

            <ul className="nav-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#how">How It Works</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>

            <div className="nav-actions">
              <button className="btn btn-outline" onClick={goLogin}>Sign In</button>
              <button className="btn btn-primary" onClick={goSignup}>Create Account</button>
            </div>
          </div>
        </nav>

        <section className="hero">
          <div className="container hero-grid">
            <div className="reveal in">
              <div className="hero-badge">✨ Modern eCommerce platform for growing businesses</div>
              <h1 className="hero-title">
                Build your online store with <span className="accent">Qartlo</span>
              </h1>
              <p className="hero-sub">
                Create your store, manage products, receive orders, connect payments, and grow your business from one clean and simple dashboard.
              </p>

              <div className="hero-ctas">
                <button className="btn btn-primary btn-lg" onClick={goSignup}>Start Your Store Today →</button>
                <button className="btn btn-outline btn-lg" onClick={goLogin}>Sign In to Dashboard</button>
              </div>

              <div className="hero-trust">
                <span className="trust-pill">⚡ Quick setup</span>
                <span className="trust-pill">🌐 Custom domain ready</span>
                <span className="trust-pill">📱 Mobile friendly</span>
              </div>
            </div>

            <div className="hero-card reveal in">
              <div className="dashboard-card">
                <div className="dashboard-top">
                  <div className="dash-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                  <div className="dash-label">Admin Dashboard</div>
                </div>

                <div className="dashboard-body">
                  <div className="dash-welcome">
                    <div>
                      <h3>Welcome to Qartlo</h3>
                      <p>Manage products, orders, customers, and store settings in one place.</p>
                    </div>
                    <div className="dash-icon">🛍️</div>
                  </div>

                  <div className="metric-grid">
                    <div className="metric-card">
                      <span>Total Sales</span>
                      <strong>₹2.4L</strong>
                    </div>
                    <div className="metric-card">
                      <span>Orders</span>
                      <strong>1,245</strong>
                    </div>
                    <div className="metric-card">
                      <span>Customers</span>
                      <strong>892</strong>
                    </div>
                  </div>

                  <div className="chart-box">
                    <div className="chart-head">
                      <strong>Store Growth</strong>
                      <span>+18.4%</span>
                    </div>
                    <div className="fake-chart" aria-hidden="true">
                      <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                        <path d="M0,105 C60,90 75,48 135,68 C190,86 210,124 270,72 C325,24 350,56 390,44 C430,32 455,24 500,18" fill="none" stroke="#198f7d" strokeWidth="6" strokeLinecap="round" />
                        <path d="M0,105 C60,90 75,48 135,68 C190,86 210,124 270,72 C325,24 350,56 390,44 C430,32 455,24 500,18 L500,150 L0,150 Z" fill="rgba(25, 143, 125, 0.11)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft" ref={statsRef}>
          <div className="container stats-row">
            <div className="stat-card reveal"><strong>{fmtNum(counters.stores)}</strong><span>Stores supported</span></div>
            <div className="stat-card reveal"><strong>{fmtNum(counters.orders)}</strong><span>Orders processed</span></div>
            <div className="stat-card reveal"><strong>{fmtNum(counters.merchants)}</strong><span>Growing merchants</span></div>
            <div className="stat-card reveal"><strong>{counters.uptime.toFixed(1)}%</strong><span>Platform uptime</span></div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="about-grid">
              <div className="card about-card reveal">
                <div className="eyebrow">About Qartlo</div>
                <h3>The smarter way to sell online</h3>
                <p>Qartlo is a modern eCommerce platform that helps businesses create and manage online stores with ease. It brings products, orders, customers, payments, and store settings into one clean system.</p>
                <p>Whether you are starting your first store or managing a growing business, Qartlo gives you a faster and simpler way to sell online with confidence.</p>
              </div>

              <div className="card about-feature-card reveal">
                <div className="big-mark">Q</div>
                <h4>Everything your store needs. Clean, modern, and built to scale.</h4>
                <ul className="check-list">
                  <li>Simple and user-friendly admin interface</li>
                  <li>Product, category, customer, and order management</li>
                  <li>Custom domain support for branded store links</li>
                  <li>Mobile-ready storefront and checkout experience</li>
                  <li>Secure and scalable platform for growing businesses</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="features">
          <div className="container">
            <div className="section-header reveal">
              <div className="eyebrow">Platform Features</div>
              <h2 className="section-title">Everything a modern store needs</h2>
              <p className="section-sub">From setup to selling, Qartlo gives you the tools to manage your store smoothly and grow your business online.</p>
            </div>

            <div className="feature-grid">
              {features.map((feature) => (
                <div className="feature-card reveal" key={feature.title}>
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="how">
          <div className="container">
            <div className="section-header reveal">
              <div className="eyebrow">How It Works</div>
              <h2 className="section-title">Go live in four simple steps</h2>
              <p className="section-sub">No complicated process. Create your account, build your store, share your link, and start receiving orders.</p>
            </div>

            <div className="how-grid">
              <div className="steps-panel reveal">
                {steps.map((step, index) => (
                  <div key={step.num} className={`step-item ${activeStep === index ? "active" : ""}`} onClick={() => setActiveStep(index)}>
                    <div className="step-label">Step {step.num}</div>
                    <div className="step-title">{step.title}</div>
                    <div className="step-desc">{step.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mockup-card reveal">
                <div className="mockup-top">
                  <div className="dash-dots"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
                  <div className="mockup-url">app.qartlo.com</div>
                </div>

                <div className="mockup-body">
                  <div className="mockup-icon">{steps[activeStep].icon}</div>
                  <div className="mockup-step">Step {steps[activeStep].num}</div>
                  <div className="mockup-title">{steps[activeStep].title}</div>
                  <div className="mockup-desc">{steps[activeStep].desc}</div>

                  <div className="prog">
                    {steps.map((_, index) => (
                      <button key={index} className={activeStep === index ? "active" : ""} onClick={() => setActiveStep(index)} aria-label={`Go to step ${index + 1}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section why-band">
          <div className="container">
            <div className="section-header reveal">
              <div className="eyebrow">Why Choose Qartlo</div>
              <h2 className="section-title">Built for businesses that want to grow faster</h2>
            </div>

            <div className="why-grid">
              {whys.map((item) => (
                <div className="why-card reveal" key={item.text}>
                  <span className="icon">{item.icon}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="faq">
          <div className="container">
            <div className="faq-wrap">
              <div className="section-header reveal">
                <div className="eyebrow">FAQ</div>
                <h2 className="section-title">Questions? We have answers.</h2>
              </div>

              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div className="faq-item reveal" key={faq.q}>
                    <button className="faq-btn" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}>
                      <span>{faq.q}</span>
                      <span>{openFaq === index ? "−" : "+"}</span>
                    </button>
                    <div className={`faq-answer ${openFaq === index ? "open" : ""}`}>{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-box reveal">
              <h2>Start your online business with Qartlo today</h2>
              <p>Build your store, manage products, receive orders, and grow faster with a platform made for modern businesses.</p>
              <div className="cta-actions">
                <button className="btn btn-primary btn-lg" onClick={goSignup}>Create Your Account →</button>
                <button className="btn btn-outline btn-lg" onClick={goLogin}>Already have an account? Sign In</button>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer-card">
              <div className="footer-top">
                <div>
                  <div className="footer-brand"><div className="logo-mark">Q</div><span>Qartlo</span></div>
                  <p className="footer-brand-p">Qartlo is an all-in-one eCommerce platform that helps businesses create, manage, and grow online stores with a clean and modern experience.</p>
                </div>

                <div>
                  <div className="footer-title">Platform</div>
                  <ul className="footer-links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#how">How It Works</a></li>
                    <li><a href="#faq">FAQ</a></li>
                  </ul>
                </div>

                <div>
                  <div className="footer-title">Account</div>
                  <ul className="footer-links">
                    <li><button className="footer-link-btn" onClick={goLogin}>Sign In</button></li>
                    <li><button className="footer-link-btn" onClick={goSignup}>Create Account</button></li>
                    <li><a href="#features">Explore Features</a></li>
                  </ul>
                </div>

                <div>
                  <div className="footer-title">Support</div>
                  <ul className="footer-links">
                    <li><a href="#faq">Help Center</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#how">Setup Guide</a></li>
                  </ul>
                </div>
              </div>

              <div className="footer-bottom">
                <div className="footer-copy">© {new Date().getFullYear()} Qartlo. All rights reserved.</div>
                <div className="footer-seo">Qartlo · online store builder · eCommerce platform · create online shop · sell products online</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
