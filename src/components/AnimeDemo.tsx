"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export default function AnimeDemo() {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!boxRef.current) return;

    animate(boxRef.current, {
      from: { translateX: 0, rotate: 0, scale: 1 },
      to: { translateX: 180, rotate: 360, scale: 1.2 },
      ease: "easeInOutSine",
      direction: "alternate",
      duration: 1200,
      loop: true,
    });

    if (dotsRef.current.length) {
      animate(dotsRef.current, {
        from: { opacity: 0, translateY: 8 },
        to: { opacity: 1, translateY: 0 },
        delay: stagger(80),
        duration: 400,
        ease: "easeOutQuad",
      });
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div
        ref={boxRef}
        style={{
          width: 72,
          height: 72,
          borderRadius: 12,
          background: "linear-gradient(135deg, #6366f1, #22d3ee)",
        }}
      />

      <div style={{ display: "flex", gap: 8 }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) {
                dotsRef.current[i] = el;
              }
            }}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#94a3b8",
              opacity: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}


