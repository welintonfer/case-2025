"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "../app/AnimatedCursor.module.css";

export default function AnimatedCursor() {
  const bigBallRef = useRef<HTMLDivElement>(null);
  const smallBallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Certifica-se de que o código é executado apenas no lado do cliente
    if (typeof window === "undefined") return;

    console.log("AnimatedCursor is running"); // Log para verificar o funcionamento

    const bigBall = bigBallRef.current;
    const smallBall = smallBallRef.current;

    if (!bigBall || !smallBall) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(bigBall, { x: e.pageX - 15, y: e.pageY - 15, duration: 0.4 });
      gsap.to(smallBall, { x: e.pageX - 5, y: e.pageY - 7, duration: 0.1 });
    };

    const onMouseEnter = () => gsap.to(bigBall, { scale: 4, duration: 0.3 });
    const onMouseLeave = () => gsap.to(bigBall, { scale: 1, duration: 0.3 });

    document.addEventListener("mousemove", onMouseMove);
    document.querySelectorAll(".hoverable").forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.querySelectorAll(".hoverable").forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []); 

  return (
    <div className={styles.cursor}>
      <div ref={bigBallRef} className={`${styles.cursor__ball} ${styles.cursor__ballBig}`}>
        <div className={styles.circle}></div>
      </div>
      <div ref={smallBallRef} className={`${styles.cursor__ball} ${styles.cursor__ballSmall}`}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}
