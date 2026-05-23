"use client";

import { useEffect, useRef, useState } from "react";

const initialCounters = {
  stores: 0,
  orders: 0,
  merchants: 0,
  uptime: 0,
};

function formatNumber(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M+`;
  if (value >= 1000) return `${Math.round(value / 1000)}K+`;
  return `${Math.round(value)}+`;
}

export default function StatsSection() {
  const statsRef = useRef(null);
  const animatedRef = useRef(false);
  const [counters, setCounters] = useState(initialCounters);

  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;

    const animateCounter = (key, target, decimals = 0) => {
      let current = 0;
      const stepValue = target / 58;

      const step = () => {
        current += stepValue;

        if (current >= target) {
          current = target;
        }

        setCounters((prev) => ({
          ...prev,
          [key]: Number(current.toFixed(decimals)),
        }));

        if (current < target) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;

          animateCounter("stores", 1000);
          animateCounter("orders", 150000);
          animateCounter("merchants", 850);
          animateCounter("uptime", 99.9, 1);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section section-soft" ref={statsRef}>
      <div className="container stats-row">
        <div className="stat-card">
          <strong>{formatNumber(counters.stores)}</strong>
          <span>Stores supported</span>
        </div>

        <div className="stat-card">
          <strong>{formatNumber(counters.orders)}</strong>
          <span>Orders processed</span>
        </div>

        <div className="stat-card">
          <strong>{formatNumber(counters.merchants)}</strong>
          <span>Growing merchants</span>
        </div>

        <div className="stat-card">
          <strong>{counters.uptime.toFixed(1)}%</strong>
          <span>Platform uptime</span>
        </div>
      </div>
    </section>
  );
}