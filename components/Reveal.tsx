"use client";

// Reveal — scroll-triggered reveal (abartısız, sade).
// reduced-motion'da otomatik devre dışı.

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: 0 | 100 | 200 | 300 | 400;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Reduced motion — direkt görünür yap
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const TagComponent = Tag as any;
  return (
    <TagComponent
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      data-delay={delay}
    >
      {children}
    </TagComponent>
  );
}