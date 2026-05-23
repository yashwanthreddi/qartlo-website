"use client";

import { useEffect, useState } from "react";
import { steps } from "@/data/siteData";

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const currentStep = steps[activeStep];

  return (
    <section className="section" id="how">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">How It Works</div>

          <h2 className="section-title">Go live in four simple steps</h2>

          <p className="section-sub">
            No complicated process. Create your account, build your store, share
            your link, and start receiving orders.
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
                <span className="step-label">Step {step.num}</span>
                <span className="step-title">{step.title}</span>
                <span className="step-desc">{step.desc}</span>
              </button>
            ))}
          </div>

          <div className="mockup-card">
            <div className="mockup-top">
              <div className="dash-dots">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>

              <div className="mockup-url">app.qartlo.com</div>
            </div>

            <div className="mockup-body">
              <div className="mockup-icon">{currentStep.icon}</div>
              <div className="mockup-step">Step {currentStep.num}</div>
              <div className="mockup-title">{currentStep.title}</div>
              <div className="mockup-desc">{currentStep.desc}</div>

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
        </div>
      </div>
    </section>
  );
}