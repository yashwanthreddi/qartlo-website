"use client";

import { useEffect, useState } from "react";
import { steps } from "@/data/siteData";

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!Array.isArray(steps) || steps.length === 0) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  if (!Array.isArray(steps) || steps.length === 0) {
    return null;
  }

  const currentStep = steps[activeStep];

  return (
    <section className="how-section" id="how">
      <div className="how-bg how-bg-one" />
      <div className="how-bg how-bg-two" />

      <div className="how-container">
        <div className="how-header">
          
          <h2>
            Go live in <span>four simple steps</span>
          </h2>

          <p>
            No complicated process. Create your account, build your store, share
            your link, and start receiving orders directly from customers.
          </p>
        </div>

        <div className="how-grid">
          <div className="steps-panel">
            {steps.map((step, index) => (
              <button
                type="button"
                key={step.num}
                className={`step-item ${activeStep === index ? "active" : ""}`}
                onClick={() => setActiveStep(index)}
              >
                <span className="step-count">Step {step.num}</span>

                <span className="step-content">
                  <span className="step-title">{step.title}</span>
                  <span className="step-desc">{step.desc}</span>
                </span>

                <span className="step-dot">
                  <span />
                </span>
              </button>
            ))}
          </div>

          <div className="mockup-wrap">
            <div className="mockup-card">
              <div className="mockup-top">
                <div className="dash-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>

                <div className="mockup-url">app.qartlo.com</div>
              </div>

              <div className="mockup-body">
                <div className="mockup-icon-wrap">
                  <div className="mockup-icon">{currentStep.icon}</div>
                </div>

                <div className="mockup-step">Step {currentStep.num}</div>

                <div className="mockup-title">{currentStep.title}</div>

                <div className="mockup-desc">{currentStep.desc}</div>

                <div className="mockup-preview-box">
                  <div className="preview-row">
                    <span />
                    <strong />
                  </div>

                  <div className="preview-row short">
                    <span />
                    <strong />
                  </div>

                  <div className="preview-button" />
                </div>

                <div className="prog">
                  {steps.map((_, index) => (
                    <button
                      type="button"
                      key={index}
                      className={activeStep === index ? "active" : ""}
                      onClick={() => setActiveStep(index)}
                      aria-label={`Go to step ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="floating-note floating-note-one">
              <span>Setup</span>
              <strong>5 minutes</strong>
            </div>

           
          </div>
        </div>
      </div>

      <style>{`
        .how-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 18%, rgba(18, 140, 126, 0.11), transparent 34%),
            radial-gradient(circle at 90% 76%, rgba(59, 130, 246, 0.1), transparent 32%),
            linear-gradient(180deg, #ffffff 0%, #f8fafc 48%, #eef7f5 100%);
          padding: 92px 0;
        }

        .how-bg {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.32;
          pointer-events: none;
        }

        .how-bg-one {
          width: 340px;
          height: 340px;
          left: -140px;
          top: 90px;
          background: #14b8a6;
        }

        .how-bg-two {
          width: 360px;
          height: 360px;
          right: -70px;
          bottom: 70px;
          background: #60a5fa;
        }

        .how-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .how-header {
          max-width: 760px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .how-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(18, 140, 126, 0.18);
          border-radius: 999px;
          background: rgba(18, 140, 126, 0.08);
          padding: 9px 14px;
          font-size: 14px;
          font-weight: 850;
          color: #0f766e;
          box-shadow: 0 12px 28px rgba(15, 118, 110, 0.08);
        }

        .how-eyebrow span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.14);
        }

        .how-header h2 {
          margin: 22px 0 0;
          font-size: clamp(38px, 5vw, 62px);
          font-weight: 950;
          line-height: 1;
          letter-spacing: -0.065em;
          color: #07111f;
        }

        .how-header h2 span {
          background: linear-gradient(135deg, #128c7e, #0ea5e9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .how-header p {
          max-width: 680px;
          margin: 22px auto 0;
          font-size: 18px;
          line-height: 1.75;
          color: #475569;
        }

        .how-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          align-items: center;
          gap: 30px;
        }

        .steps-panel {
          display: grid;
          gap: 14px;
        }

        .step-item {
          position: relative;
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          align-items: center;
          gap: 18px;
          width: 100%;
          overflow: hidden;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.82);
          padding: 20px;
          text-align: left;
          cursor: pointer;
          box-shadow: 0 16px 44px rgba(15, 23, 42, 0.06);
          backdrop-filter: blur(16px);
          transition:
            transform 0.22s ease,
            border-color 0.22s ease,
            box-shadow 0.22s ease,
            background 0.22s ease;
        }

        .step-item::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(18, 140, 126, 0.14), transparent 40%);
          opacity: 0;
          transition: opacity 0.22s ease;
          pointer-events: none;
        }

        .step-item:hover {
          transform: translateY(-3px);
          border-color: rgba(18, 140, 126, 0.18);
          box-shadow: 0 22px 58px rgba(15, 23, 42, 0.09);
        }

        .step-item.active {
          border-color: rgba(18, 140, 126, 0.3);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(240, 253, 250, 0.92)),
            #ffffff;
          box-shadow: 0 28px 70px rgba(18, 140, 126, 0.13);
        }

        .step-item.active::before {
          opacity: 1;
        }

        .step-count {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 78px;
          border-radius: 999px;
          background: rgba(18, 140, 126, 0.1);
          padding: 9px 12px;
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0f766e;
        }

        .step-content {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 7px;
        }

        .step-title {
          font-size: 18px;
          font-weight: 950;
          line-height: 1.2;
          letter-spacing: -0.035em;
          color: #0f172a;
        }

        .step-desc {
          font-size: 14px;
          line-height: 1.6;
          color: #64748b;
        }

        .step-dot {
          position: relative;
          z-index: 1;
          display: flex;
          width: 24px;
          height: 24px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 1px solid rgba(18, 140, 126, 0.22);
        }

        .step-dot span {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(18, 140, 126, 0.25);
        }

        .step-item.active .step-dot {
          background: #128c7e;
          border-color: #128c7e;
          box-shadow: 0 0 0 6px rgba(18, 140, 126, 0.12);
        }

        .step-item.active .step-dot span {
          background: #ffffff;
        }

        .mockup-wrap {
          position: relative;
          min-width: 0;
        }

        .mockup-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 34px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95)),
            #ffffff;
          box-shadow:
            0 34px 90px rgba(15, 23, 42, 0.14),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .mockup-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(18, 140, 126, 0.16), transparent 36%),
            radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.12), transparent 34%);
          pointer-events: none;
        }

        .mockup-top {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
          background: rgba(248, 250, 252, 0.78);
          padding: 18px 20px;
        }

        .dash-dots {
          display: flex;
          gap: 7px;
        }

        .dot {
          width: 11px;
          height: 11px;
          border-radius: 999px;
        }

        .dot-red {
          background: #fb7185;
        }

        .dot-yellow {
          background: #facc15;
        }

        .dot-green {
          background: #34d399;
        }

        .mockup-url {
          overflow: hidden;
          border-radius: 999px;
          background: rgba(18, 140, 126, 0.1);
          padding: 7px 12px;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-overflow: ellipsis;
          text-transform: uppercase;
          white-space: nowrap;
          color: #0f766e;
        }

        .mockup-body {
          position: relative;
          z-index: 1;
          min-height: 440px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 42px;
          text-align: center;
        }

        .mockup-icon-wrap {
          display: flex;
          width: 92px;
          height: 92px;
          align-items: center;
          justify-content: center;
          border-radius: 30px;
          background:
            radial-gradient(circle at top right, rgba(255, 255, 255, 0.45), transparent 42%),
            linear-gradient(135deg, #128c7e, #0f766e);
          box-shadow: 0 24px 50px rgba(18, 140, 126, 0.26);
        }

        .mockup-icon {
          font-size: 42px;
          line-height: 1;
        }

        .mockup-step {
          margin-top: 24px;
          border-radius: 999px;
          background: rgba(18, 140, 126, 0.1);
          padding: 8px 12px;
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0f766e;
        }

        .mockup-title {
          margin-top: 18px;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 950;
          line-height: 1.05;
          letter-spacing: -0.06em;
          color: #0f172a;
        }

        .mockup-desc {
          max-width: 460px;
          margin-top: 14px;
          font-size: 16px;
          line-height: 1.75;
          color: #475569;
        }

        .mockup-preview-box {
          width: min(100%, 390px);
          margin-top: 28px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.7);
          padding: 18px;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.85);
        }

        .preview-row {
          display: grid;
          grid-template-columns: 52px 1fr;
          gap: 12px;
          align-items: center;
          margin-bottom: 12px;
        }

        .preview-row span {
          height: 42px;
          border-radius: 14px;
          background: rgba(18, 140, 126, 0.14);
        }

        .preview-row strong {
          height: 12px;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.12);
        }

        .preview-row.short strong {
          width: 70%;
        }

        .preview-button {
          height: 38px;
          border-radius: 999px;
          background: linear-gradient(135deg, #128c7e, #0f766e);
        }

        .prog {
          display: flex;
          gap: 8px;
          margin-top: 28px;
        }

        .prog button {
          width: 10px;
          height: 10px;
          border: 0;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.16);
          cursor: pointer;
          padding: 0;
          transition:
            width 0.22s ease,
            background 0.22s ease;
        }

        .prog button.active {
          width: 34px;
          background: #128c7e;
        }

        .floating-note {
          position: absolute;
          z-index: 2;
          border: 1px solid rgba(255, 255, 255, 0.65);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.9);
          padding: 14px 16px;
          box-shadow: 0 20px 46px rgba(15, 23, 42, 0.12);
          backdrop-filter: blur(16px);
        }

        .floating-note span {
          display: block;
          font-size: 12px;
          font-weight: 850;
          color: #64748b;
        }

        .floating-note strong {
          display: block;
          margin-top: 5px;
          font-size: 18px;
          font-weight: 950;
          color: #0f172a;
        }

        .floating-note-one {
          left: -22px;
          bottom: 78px;
        }

        .floating-note-two {
          right: -18px;
          top: 94px;
        }

        @media (max-width: 980px) {
          .how-section {
            padding: 72px 0;
          }

          .how-grid {
            grid-template-columns: 1fr;
          }

          .mockup-wrap {
            max-width: 720px;
            margin: 0 auto;
          }
        }

        @media (max-width: 640px) {
          .how-section {
            padding: 56px 0;
          }

          .how-header {
            margin-bottom: 34px;
          }

          .how-header h2 {
            font-size: 38px;
          }

          .how-header p {
            font-size: 16px;
          }

          .step-item {
            grid-template-columns: 1fr auto;
            gap: 14px;
            padding: 18px;
            border-radius: 22px;
          }

          .step-count {
            grid-column: 1 / -1;
            width: fit-content;
          }

          .mockup-card {
            border-radius: 26px;
          }

          .mockup-body {
            min-height: 390px;
            padding: 30px 22px;
          }

          .mockup-icon-wrap {
            width: 78px;
            height: 78px;
            border-radius: 24px;
          }

          .mockup-icon {
            font-size: 34px;
          }

          .mockup-title {
            font-size: 30px;
          }

          .mockup-desc {
            font-size: 15px;
          }

          .floating-note {
            display: none;
          }
            
        }
      `}</style>
    </section>
  );
}