"use client";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";

export default function TypingAnimation({ text, duration = 15, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    if (isInView) {
      const typingEffect = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          setI(i + 1);
        } else {
          clearInterval(typingEffect);
        }
      }, duration);

      return () => {
        clearInterval(typingEffect);
      };
    }
  }, [isInView, i, text, duration]);

  return (
    <div ref={ref}>
      <h1 className={cn(className)}>
        {displayedText ? displayedText : text}
      </h1>
    </div>
  );
}
