"use client";
import { useEffect, useRef, useState } from "react";

// Counts a value like "~300" or "200+" up from zero when it scrolls into view.
export default function CountUp({ value }) {
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  const ref = useRef(null);
  const [n, setN] = useState(match ? 0 : null);

  useEffect(() => {
    if (!match) return;
    const target = Number(match[2]);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setN(target);
      return;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / 1400, 1);
        setN(Math.round(target * (1 - Math.pow(1 - t, 3))));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(ref.current);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!match) return <span>{value}</span>;
  return (
    <span ref={ref}>
      {match[1]}
      {n}
      {match[3]}
    </span>
  );
}
