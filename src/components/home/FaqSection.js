"use client";

import { useState } from "react";
import { faqs } from "@/data/siteData";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-bg faq-bg-one" />
      <div className="faq-bg faq-bg-two" />

      <div className="faq-container">
        <div className="faq-header">
          <h2>
            Questions? <span>We have answers.</span>
          </h2>

          <p>
            Everything you need to know before launching your Qartlo online
            store and accepting customer orders through WhatsApp.
          </p>
        </div>

        <div className="faq-layout">
          <div className="faq-info-card">
            <div className="faq-info-icon">?</div>

            <h3>Still need help?</h3>

            <p>
              If your question is not listed here, you can contact our support
              team and we will help you set up your store.
            </p>

            <a href="/contact">Contact Support →</a>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div className={`faq-item ${isOpen ? "open" : ""}`} key={faq.q}>
                  <button
                    type="button"
                    className="faq-btn"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question">{faq.q}</span>

                    <span className="faq-toggle" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div className="faq-answer-wrap">
                    <div className="faq-answer">{faq.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .faq-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 18%, rgba(18, 140, 126, 0.11), transparent 34%),
            radial-gradient(circle at 88% 72%, rgba(59, 130, 246, 0.1), transparent 32%),
            linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #eef7f5 100%);
          padding: 92px 0;
        }

        .faq-bg {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.32;
          pointer-events: none;
        }

        .faq-bg-one {
          width: 340px;
          height: 340px;
          left: -140px;
          top: 90px;
          background: #14b8a6;
        }

        .faq-bg-two {
          width: 360px;
          height: 360px;
          right: -70px;
          bottom: 80px;
          background: #60a5fa;
        }

        .faq-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .faq-header {
          max-width: 760px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .faq-header h2 {
          margin: 0;
          font-size: clamp(38px, 5vw, 62px);
          font-weight: 950;
          line-height: 1;
          letter-spacing: -0.065em;
          color: #07111f;
        }

        .faq-header h2 span {
          background: linear-gradient(135deg, #128c7e, #0ea5e9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .faq-header p {
          max-width: 680px;
          margin: 22px auto 0;
          font-size: 18px;
          line-height: 1.75;
          color: #475569;
        }

        .faq-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.38fr) minmax(0, 0.62fr);
          gap: 24px;
          align-items: start;
        }

        .faq-info-card {
          position: sticky;
          top: 24px;
          overflow: hidden;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 30px;
          background:
            radial-gradient(circle at top right, rgba(18, 140, 126, 0.16), transparent 40%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(248, 250, 252, 0.92));
          padding: 30px;
          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(18px);
        }

        .faq-info-icon {
          display: flex;
          width: 58px;
          height: 58px;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          background: linear-gradient(135deg, #128c7e, #0f766e);
          color: #ffffff;
          font-size: 30px;
          font-weight: 950;
          box-shadow: 0 18px 36px rgba(18, 140, 126, 0.22);
        }

        .faq-info-card h3 {
          margin: 26px 0 0;
          font-size: 30px;
          font-weight: 950;
          line-height: 1.08;
          letter-spacing: -0.055em;
          color: #0f172a;
        }

        .faq-info-card p {
          margin: 14px 0 0;
          font-size: 15.5px;
          line-height: 1.75;
          color: #475569;
        }

        .faq-info-card a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 24px;
          min-height: 46px;
          border-radius: 999px;
          background: #128c7e;
          padding: 12px 18px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 900;
          text-decoration: none;
          box-shadow: 0 16px 34px rgba(18, 140, 126, 0.22);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .faq-info-card a:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 42px rgba(18, 140, 126, 0.3);
        }

        .faq-list {
          display: grid;
          gap: 14px;
        }

        .faq-item {
          overflow: hidden;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.86);
          box-shadow: 0 16px 44px rgba(15, 23, 42, 0.06);
          backdrop-filter: blur(16px);
          transition:
            border-color 0.22s ease,
            box-shadow 0.22s ease,
            background 0.22s ease;
        }

        .faq-item.open {
          border-color: rgba(18, 140, 126, 0.28);
          background:
            radial-gradient(circle at top right, rgba(18, 140, 126, 0.12), transparent 36%),
            rgba(255, 255, 255, 0.94);
          box-shadow: 0 24px 64px rgba(18, 140, 126, 0.12);
        }

        .faq-btn {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: center;
          gap: 18px;
          width: 100%;
          border: 0;
          background: transparent;
          padding: 22px 24px;
          text-align: left;
          cursor: pointer;
        }

        .faq-question {
          font-size: 17px;
          font-weight: 900;
          line-height: 1.4;
          letter-spacing: -0.025em;
          color: #0f172a;
        }

        .faq-toggle {
          display: flex;
          width: 34px;
          height: 34px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(18, 140, 126, 0.1);
          color: #0f766e;
          font-size: 22px;
          font-weight: 800;
          line-height: 1;
          transition:
            background 0.22s ease,
            color 0.22s ease,
            transform 0.22s ease;
        }

        .faq-item.open .faq-toggle {
          background: #128c7e;
          color: #ffffff;
          transform: rotate(180deg);
        }

        .faq-answer-wrap {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .faq-item.open .faq-answer-wrap {
          max-height: 700px;
        }

        .faq-answer {
          padding: 0 24px 24px;
          font-size: 15.5px;
          line-height: 1.8;
          color: #475569;
        }

        @media (max-width: 900px) {
          .faq-section {
            padding: 72px 0;
          }

          .faq-layout {
            grid-template-columns: 1fr;
          }

          .faq-info-card {
            position: relative;
            top: auto;
          }
        }

        @media (max-width: 560px) {
          .faq-section {
            padding: 56px 0;
          }

          .faq-header {
            margin-bottom: 34px;
          }

          .faq-header h2 {
            font-size: 38px;
          }

          .faq-header p {
            font-size: 16px;
          }

          .faq-info-card {
            border-radius: 24px;
            padding: 24px;
          }

          .faq-info-card h3 {
            font-size: 26px;
          }

          .faq-item {
            border-radius: 20px;
          }

          .faq-btn {
            padding: 20px;
          }

          .faq-question {
            font-size: 16px;
          }

          .faq-answer {
            padding: 0 20px 20px;
            font-size: 15px;
          }
            
        }
      `}</style>
    </section>
  );
}