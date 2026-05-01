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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
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
      { threshold: 0.1 }
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

            const step = () => {
              current += target / 60;
              if (current >= target) current = target;

              setCounters((prev) => ({
                ...prev,
                [key]: parseFloat(current.toFixed(decimals)),
              }));

              if (current < target) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
          };

          animate("stores", 12000);
          animate("orders", 3500000);
          animate("merchants", 8500);
          animate("uptime", 99.9, 1);
        }
      },
      { threshold: 0.3 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const fmtNum = (n) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M+";
    if (n >= 1000) return Math.round(n / 1000) + "K+";
    return Math.round(n) + "+";
  };

  const features = [
    {
      icon: "🚀",
      title: "Easy Store Setup",
      desc: "Launch your online store in minutes with a simple and guided setup process.",
    },
    {
      icon: "📦",
      title: "Product Management",
      desc: "Add, edit, organize, and manage products, categories, pricing, and images from one place.",
    },
    {
      icon: "🛒",
      title: "Smart Checkout",
      desc: "Give your customers a fast and seamless checkout experience that improves conversions.",
    },
    {
      icon: "💳",
      title: "Secure Payments",
      desc: "Accept online payments securely with trusted payment integrations built for modern commerce.",
    },
    {
      icon: "📊",
      title: "Orders & Customers",
      desc: "Track orders, manage customers, and stay in control of your store with a clean dashboard.",
    },
    {
      icon: "📱",
      title: "Mobile Ready",
      desc: "Your store looks clean and works smoothly across desktop, tablet, and mobile devices.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Create your store",
      desc: "Set up your branded store in minutes with an easy onboarding flow.",
      icon: "🏪",
    },
    {
      num: "02",
      title: "Add your products",
      desc: "Upload products, pricing, descriptions, and categories with ease.",
      icon: "📦",
    },
    {
      num: "03",
      title: "Share your link",
      desc: "Get your store URL and start sharing it with customers instantly.",
      icon: "🔗",
    },
    {
      num: "04",
      title: "Start receiving orders",
      desc: "Receive orders, track payments, and manage everything from one dashboard.",
      icon: "🎉",
    },
  ];

  const whys = [
    { icon: "✦", text: "Simple and user-friendly interface" },
    { icon: "◈", text: "Designed for modern online businesses" },
    { icon: "▲", text: "Scalable for growing stores" },
    { icon: "🔒", text: "Secure and reliable platform" },
    { icon: "⚙️", text: "Complete control over your store" },
  ];

  const plans = [
   
    
    {
      name: "Enterprise",
      price: "Contact Us",
      period: "/mo",
      desc: "Advanced power for high-volume sellers.",
      perks: [
        "Unlimited Stores",
        "Unlimited Products",
        "Dedicated Support",
        "Real-time Reports",
        "White-label Option",
        "API Access",
      ],
      cta: "Contact Sales",
      hot: false,
    },
  ];

  const faqs = [
    {
      q: "How quickly can I launch my store?",
      a: "Most stores can go live within minutes. You can create your store, add products, and start sharing your link without any complex setup.",
    },
    {
      q: "Do I need technical knowledge?",
      a: "No. Qartlo is built for business owners and teams who want a simple and clean way to launch online stores.",
    },
    {
      q: "Can I accept online payments?",
      a: "Yes. You can integrate payment options so your customers can pay online securely during checkout.",
    },
    {
      q: "Can I manage multiple stores?",
      a: "Yes. Higher plans support multiple stores with independent data, products, and branding.",
    },
    {
      q: "Is Qartlo mobile-friendly?",
      a: "Yes. Both the admin experience and storefront are designed to work well across devices.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --bg: #f3f8f7;
          --bg-soft: #eef6f5;
          --surface: #ffffff;
          --surface-2: #f8fbfb;
          --border: #dbe7e5;
          --border-soft: #e9f1ef;

          --text: #0f172a;
          --muted: #5f6f6d;
          --muted-2: #7b8a88;

          --primary: #198f7d;
          --primary-dark: #157868;
          --primary-soft: #dff3ee;

          --shadow-sm: 0 8px 24px rgba(15, 23, 42, 0.04);
          --shadow-md: 0 18px 45px rgba(15, 23, 42, 0.08);
          --radius-lg: 22px;
          --radius-md: 16px;
          --radius-sm: 12px;
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

        .page-shell {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(25, 143, 125, 0.08), transparent 30%),
            radial-gradient(circle at top right, rgba(25, 143, 125, 0.05), transparent 28%),
            linear-gradient(180deg, #f4f8f8 0%, #f3f8f7 100%);
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
          background: rgba(243, 248, 247, 0.9);
          backdrop-filter: blur(18px);
          border-bottom-color: var(--border);
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
          font-weight: 800;
          letter-spacing: -0.02em;
          cursor: pointer;
        }

        .logo-mark {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          background: var(--primary-soft);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          box-shadow: inset 0 0 0 1px rgba(25, 143, 125, 0.08);
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
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .nav-links a:hover {
          color: var(--text);
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
          transition: all 0.2s ease;
          font-family: inherit;
          font-weight: 600;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
        }

        .btn-outline {
          background: #fff;
          color: var(--text);
          border: 1px solid var(--border);
          padding: 11px 18px;
        }

        .btn-outline:hover {
          background: var(--surface-2);
        }

        .btn-primary {
          background: var(--primary);
          color: white;
          padding: 11px 18px;
          box-shadow: 0 10px 24px rgba(25, 143, 125, 0.18);
        }

        .btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-1px);
        }

        .hero {
          padding: 56px 0 72px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--primary-soft);
          color: var(--primary);
          border: 1px solid rgba(25, 143, 125, 0.12);
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 0.84rem;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.6rem);
          line-height: 1.04;
          letter-spacing: -0.05em;
          font-weight: 800;
          max-width: 680px;
          margin-bottom: 20px;
        }

        .hero-title .accent {
          color: var(--primary);
        }

        .hero-sub {
          font-size: 1.08rem;
          line-height: 1.8;
          color: var(--muted);
          max-width: 640px;
          margin-bottom: 32px;
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 36px;
        }

        .btn-lg {
          padding: 15px 24px;
          font-size: 0.98rem;
          border-radius: 16px;
        }

        .hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
        }

        .hero-stat {
          min-width: 120px;
        }

        .hero-stat strong {
          display: block;
          font-size: 1.4rem;
          letter-spacing: -0.03em;
          margin-bottom: 4px;
        }

        .hero-stat span {
          color: var(--muted);
          font-size: 0.92rem;
        }

        .hero-card {
          background: var(--surface);
          border: 1px solid var(--border-soft);
          border-radius: 30px;
          padding: 24px;
          box-shadow: var(--shadow-md);
        }

        .hero-card-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .hero-card-icon {
          width: 54px;
          height: 54px;
          border-radius: 18px;
          background: var(--primary-soft);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
        }

        .hero-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .hero-card-sub {
          color: var(--muted);
          font-size: 0.96rem;
          line-height: 1.7;
        }

        .hero-mini-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 24px;
        }

        .hero-mini-card {
          background: var(--surface-2);
          border: 1px solid var(--border-soft);
          border-radius: 18px;
          padding: 18px;
        }

        .hero-mini-card strong {
          display: block;
          font-size: 1rem;
          margin-bottom: 6px;
        }

        .hero-mini-card span {
          color: var(--muted);
          font-size: 0.88rem;
          line-height: 1.5;
        }

        .section {
          padding: 84px 0;
        }

        .section-soft {
          background: rgba(255, 255, 255, 0.45);
          border-top: 1px solid rgba(219, 231, 229, 0.7);
          border-bottom: 1px solid rgba(219, 231, 229, 0.7);
        }

        .section-header {
          text-align: center;
          max-width: 740px;
          margin: 0 auto 46px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-soft);
          color: var(--primary);
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.12;
          letter-spacing: -0.04em;
          font-weight: 800;
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
          background: var(--surface);
          border: 1px solid var(--border-soft);
          border-radius: 22px;
          padding: 28px 22px;
          box-shadow: var(--shadow-sm);
          text-align: center;
        }

        .stat-card strong {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          margin-bottom: 8px;
          color: var(--primary);
        }

        .stat-card span {
          color: var(--muted);
          font-size: 0.94rem;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: stretch;
        }

        .card {
          background: var(--surface);
          border: 1px solid var(--border-soft);
          border-radius: 26px;
          box-shadow: var(--shadow-sm);
        }

        .about-card {
          padding: 34px;
        }

        .about-card h3 {
          font-size: 1.7rem;
          line-height: 1.2;
          letter-spacing: -0.03em;
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
          width: 74px;
          height: 74px;
          border-radius: 22px;
          background: var(--primary-soft);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .about-feature-card h4 {
          font-size: 1.45rem;
          margin-bottom: 18px;
          line-height: 1.25;
          letter-spacing: -0.03em;
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
          font-weight: 800;
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
          border-radius: 24px;
          background: var(--surface);
          border: 1px solid var(--border-soft);
          box-shadow: var(--shadow-sm);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .feature-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: var(--primary-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          margin-bottom: 18px;
        }

        .feature-card h3 {
          font-size: 1.05rem;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }

        .feature-card p {
          color: var(--muted);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .how-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 26px;
          align-items: start;
        }

        .steps-panel {
          background: var(--surface);
          border: 1px solid var(--border-soft);
          border-radius: 26px;
          padding: 18px;
          box-shadow: var(--shadow-sm);
        }

        .step-item {
          border-radius: 18px;
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
          border-color: rgba(25, 143, 125, 0.08);
        }

        .step-label {
          color: var(--primary);
          font-size: 0.78rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .step-title {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }

        .step-desc {
          color: var(--muted);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .mockup-card {
          background: var(--surface);
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
          gap: 8px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #d8e3e1;
        }

        .mockup-body {
          padding: 34px;
          text-align: center;
        }

        .mockup-icon {
          width: 86px;
          height: 86px;
          border-radius: 24px;
          margin: 0 auto 20px;
          background: var(--primary-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.4rem;
        }

        .mockup-step {
          font-size: 0.8rem;
          color: var(--primary);
          font-weight: 700;
          margin-bottom: 8px;
        }

        .mockup-title {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 12px;
        }

        .mockup-desc {
          color: var(--muted);
          font-size: 0.98rem;
          line-height: 1.8;
          max-width: 420px;
          margin: 0 auto;
        }

        .prog {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 22px;
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
          width: 26px;
          background: var(--primary);
          border-radius: 999px;
        }

        .why-band {
          background: linear-gradient(180deg, #e7f6f2 0%, #def2ed 100%);
          border-top: 1px solid rgba(25, 143, 125, 0.08);
          border-bottom: 1px solid rgba(25, 143, 125, 0.08);
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .why-card {
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(25, 143, 125, 0.08);
          border-radius: 20px;
          padding: 22px 18px;
          text-align: center;
        }

        .why-card .icon {
          font-size: 1.5rem;
          margin-bottom: 10px;
          display: block;
        }

        .why-card p {
          font-size: 0.93rem;
          line-height: 1.55;
          color: #24423d;
          font-weight: 600;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .plan-card {
          padding: 30px 26px;
          border-radius: 26px;
          background: var(--surface);
          border: 1px solid var(--border-soft);
          box-shadow: var(--shadow-sm);
          position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .plan-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .plan-card.hot {
          border: 1px solid rgba(25, 143, 125, 0.18);
          background: linear-gradient(180deg, #ffffff 0%, #f6fcfa 100%);
        }

        .hot-badge {
          position: absolute;
          top: -12px;
          left: 24px;
          background: var(--primary);
          color: white;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 999px;
        }

        .plan-card h3 {
          font-size: 1.12rem;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .plan-card .desc {
          color: var(--muted);
          line-height: 1.6;
          font-size: 0.92rem;
          margin-bottom: 22px;
        }

        .price-line {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 22px;
        }

        .price-line strong {
          font-size: 2.3rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--text);
        }

        .price-line span {
          color: var(--muted);
        }

        .perk-list {
          list-style: none;
          display: grid;
          gap: 12px;
          margin-bottom: 24px;
        }

        .perk-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .perk-list li::before {
          content: "✓";
          color: var(--primary);
          font-weight: 800;
          flex-shrink: 0;
        }

        .faq-wrap {
          max-width: 860px;
          margin: 0 auto;
        }

        .faq-list {
          display: grid;
          gap: 14px;
        }

        .faq-item {
          background: var(--surface);
          border: 1px solid var(--border-soft);
          border-radius: 20px;
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
          font-weight: 700;
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
        }

        .faq-btn span:last-child {
          color: var(--primary);
          font-size: 1.2rem;
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
          max-height: 180px;
          padding: 0 22px 22px;
        }

        .cta-box {
          background: linear-gradient(180deg, #ffffff 0%, #f6fbfb 100%);
          border: 1px solid var(--border-soft);
          border-radius: 32px;
          padding: 56px 34px;
          text-align: center;
          box-shadow: var(--shadow-md);
        }

        .cta-box h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.12;
          letter-spacing: -0.04em;
          margin-bottom: 14px;
        }

        .cta-box p {
          color: var(--muted);
          max-width: 640px;
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
          background: var(--surface);
          border: 1px solid var(--border-soft);
          border-radius: 28px;
          box-shadow: var(--shadow-sm);
          padding: 34px 28px;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 28px;
          margin-bottom: 24px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .footer-brand-p {
          color: var(--muted);
          line-height: 1.8;
          font-size: 0.95rem;
          max-width: 360px;
        }

        .footer-title {
          font-size: 0.82rem;
          color: var(--muted-2);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 14px;
          font-weight: 700;
        }

        .footer-links {
          list-style: none;
          display: grid;
          gap: 10px;
        }

        .footer-links a {
          text-decoration: none;
          color: var(--muted);
          font-size: 0.95rem;
        }

        .footer-links a:hover {
          color: var(--text);
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

          .feature-grid,
          .pricing-grid {
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

          .hero {
            padding: 32px 0 56px;
          }

          .stats-row,
          .feature-grid,
          .pricing-grid,
          .why-grid,
          .hero-mini-grid {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 68px 0;
          }

          .hero-title {
            font-size: 2.4rem;
          }

          .hero-sub,
          .section-sub,
          .about-card p,
          .mockup-desc,
          .cta-box p {
            font-size: 0.96rem;
          }

          .cta-box {
            padding: 42px 22px;
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

          .hero-ctas,
          .cta-actions {
            flex-direction: column;
          }

          .btn-lg,
          .cta-actions .btn,
          .hero-ctas .btn {
            width: 100%;
          }

          .stats-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page-shell">
        <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
          <div className="container nav-inner">
            <div className="nav-logo" onClick={() => router.push("/")}>
              <div className="logo-mark">Q</div>
              <span>Qartlo</span>
            </div>

            <ul className="nav-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#how">How It Works</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>

            <div className="nav-actions">
              <button className="btn btn-outline" onClick={() => router.push("/login")}>
                Sign In
              </button>
              <button className="btn btn-primary" onClick={() => router.push("/login")}>
                Start Free
              </button>
            </div>
          </div>
        </nav>

        <section className="hero">
          <div className="container hero-grid">
            <div className="reveal in">
              <div className="hero-badge">Modern eCommerce platform for growing businesses</div>
              <h1 className="hero-title">
                Build and manage your store with <span className="accent">Qartlo</span>
              </h1>
              <p className="hero-sub">
                Qartlo helps businesses create online stores, manage products, track orders,
                accept payments, and grow faster with a clean and modern platform.
              </p>

              <div className="hero-ctas">
                <button className="btn btn-primary btn-lg" onClick={() => router.push("/login")}>
                  Start Your Store Today
                </button>
                <button className="btn btn-outline btn-lg" onClick={() => router.push("/login")}>
                  Sign In to Dashboard
                </button>
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <strong>1K+</strong>
                  <span>Active stores</span>
                </div>
                
                <div className="hero-stat">
                  <strong>99.9%</strong>
                  <span>Platform uptime</span>
                </div>
              </div>
            </div>

            <div className="hero-card reveal in">
              <div className="hero-card-top">
                <div className="hero-card-icon">🛍️</div>
                <div>
                  <div className="hero-card-title">Welcome to Qartlo</div>
                  <div className="hero-card-sub">
                    Create your store, manage your business, and sell online with confidence.
                  </div>
                </div>
              </div>

              <div className="hero-mini-grid">
                <div className="hero-mini-card">
                  <strong>Products</strong>
                  <span>Manage inventory, pricing, categories, and product details.</span>
                </div>
                <div className="hero-mini-card">
                  <strong>Orders</strong>
                  <span>Track orders, payments, and customer activity in one place.</span>
                </div>
                <div className="hero-mini-card">
                  <strong>Reports</strong>
                  <span>Monitor store performance with clean analytics and insights.</span>
                </div>
                <div className="hero-mini-card">
                  <strong>Store Control</strong>
                  <span>Run your business with a faster and simpler admin experience.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        <section className="section">
          <div className="container">
            <div className="about-grid">
              <div className="card about-card reveal">
                <div className="eyebrow">About Qartlo</div>
                <h3>The smarter way to sell online</h3>
                <p>
                  Qartlo is a modern eCommerce platform designed to help businesses create
                  and manage their own online stores with ease. It brings together products,
                  orders, customers, payments, and store control in one clean system.
                </p>
                <p>
                  Whether you are just starting or already growing, Qartlo gives you a
                  faster and simpler way to run your online business with confidence.
                </p>
              </div>

              <div className="card about-feature-card reveal">
                <div className="big-mark">Q</div>
                <h4>Everything your store needs. Clean, modern, and built to scale.</h4>
                <ul className="check-list">
                  <li>Simple and user-friendly interface</li>
                  <li>Designed for modern online businesses</li>
                  <li>Scalable for growing stores</li>
                  <li>Secure and reliable platform</li>
                  <li>Complete control over your store</li>
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
              <p className="section-sub">
                From setup to selling, Qartlo gives you the tools to manage your store
                smoothly and grow your business online.
              </p>
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
              <p className="section-sub">
                No complicated process. Just create your store, add products, and start selling.
              </p>
            </div>

            <div className="how-grid">
              <div className="steps-panel reveal">
                {steps.map((step, index) => (
                  <div
                    key={step.num}
                    className={`step-item ${activeStep === index ? "active" : ""}`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="step-label">Step {step.num}</div>
                    <div className="step-title">{step.title}</div>
                    <div className="step-desc">{step.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mockup-card reveal">
                <div className="mockup-top">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>

                <div className="mockup-body">
                  <div className="mockup-icon">{steps[activeStep].icon}</div>
                  <div className="mockup-step">Step {steps[activeStep].num}</div>
                  <div className="mockup-title">{steps[activeStep].title}</div>
                  <div className="mockup-desc">{steps[activeStep].desc}</div>

                  <div className="prog">
                    {steps.map((_, index) => (
                      <button
                        key={index}
                        className={activeStep === index ? "active" : ""}
                        onClick={() => setActiveStep(index)}
                        aria-label={`Go to step ${index + 1}`}
                      />
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
                    <button
                      className="faq-btn"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <span>{faq.q}</span>
                      <span>{openFaq === index ? "−" : "+"}</span>
                    </button>
                    <div className={`faq-answer ${openFaq === index ? "open" : ""}`}>
                      {faq.a}
                    </div>
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
              <p>
                Build your store, manage your products, accept orders, and grow faster with
                a clean platform made for modern businesses.
              </p>
              <div className="cta-actions">
                <button className="btn btn-primary btn-lg" onClick={() => router.push("/login")}>
                  Create Your Store Now
                </button>
                <button className="btn btn-outline btn-lg" onClick={() => router.push("/login")}>
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer-card">
              <div className="footer-top">
                <div>
                  <div className="footer-brand">
                    <div className="logo-mark">Q</div>
                    <span>Qartlo</span>
                  </div>
                  <p className="footer-brand-p">
                    Qartlo is an all-in-one eCommerce platform that helps businesses create,
                    manage, and grow online stores with a clean and modern experience.
                  </p>
                </div>

                <div>
                  <div className="footer-title">Platform</div>
                  <ul className="footer-links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#how">How It Works</a></li>
                    <li><a href="#faq">FAQ</a></li>
                  </ul>
                </div>

                <div>
                  <div className="footer-title">Company</div>
                  <ul className="footer-links">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Careers</a></li>
                  </ul>
                </div>

                <div>
                  <div className="footer-title">Legal</div>
                  <ul className="footer-links">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Security</a></li>
                  </ul>
                </div>
              </div>

              <div className="footer-bottom">
                <div className="footer-copy">
                  © {new Date().getFullYear()} Qartlo. All rights reserved.
                </div>
                <div className="footer-seo">
                  Qartlo · online store builder · eCommerce platform · create online shop ·
                  sell products online · store management system · business commerce platform
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}