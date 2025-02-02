"use client";
import { useEffect, useState, useCallback } from "react";

import { cn } from "@/lib/utils";

export const Meteors = ({ number = 45 }) => {
  const [mounted, setMounted] = useState(false);
  const [meteorStyles, setMeteorStyles] = useState([]);

  const generateMeteors = useCallback(() => {
    return Array.from({ length: number }, () => ({
      top: -4,
      left:
        Math.floor(
          Math.random() *
            (typeof window !== "undefined" ? window.innerWidth : 0)
        ) + "px",
      animationDelay: Math.random() * 0.3 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
  }, [number]);

  useEffect(() => {
    setMounted(true);
    setMeteorStyles(generateMeteors());

    return () => {
      setMounted(false);
      setMeteorStyles([]);
    };
  }, [generateMeteors]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteorStyles.map((style, idx) => (
        <div key={`meteor-wrapper-${idx}`} className="relative">
          <span
            className={cn(
              "pointer-events-none absolute left-1/3 top-[1vh] size-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
            )}
            style={style}
          >
            <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Meteors;
