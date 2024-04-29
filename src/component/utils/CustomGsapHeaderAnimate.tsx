"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { ReactNode, useEffect, useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  className?: string;
};

const CustomGsapHeaderAnimate = ({ children, className }: Props) => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const hasBeenVisible = useRef(false);

  useEffect(() => {
    if (textRef.current) {
      // Initialize ScrollTrigger only if textRef.current is not null
      if (!hasBeenVisible.current) {
        const animate = new SplitType(textRef.current!, {
          types: "words,chars",
        });
        gsap.from(animate.chars, {
          opacity: 0,
          x: 100,
          duration: 0.7,
          stagger: { amount: 0.7 },
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 100%",
          },
        });
        hasBeenVisible.current = true;
      }
    }
  }, []);

  return (
    <div
      className={`animated-text-gsap ${className ? className : ""}`}
      ref={textRef}
    >
      {children}
    </div>
  );
};

export default CustomGsapHeaderAnimate;
