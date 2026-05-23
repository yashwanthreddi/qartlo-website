"use client";

import { useState } from "react";
import { faqs } from "@/data/siteData";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="section section-soft" id="faq">
      <div className="container">
        <div className="faq-wrap">
          <div className="section-header">
            <div className="eyebrow">FAQ</div>

            <h2 className="section-title">Questions? We have answers.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div className="faq-item" key={faq.q}>
                  <button
                    type="button"
                    className="faq-btn"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span>{isOpen ? "−" : "+"}</span>
                  </button>

                  <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}