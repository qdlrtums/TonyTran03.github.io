"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const MeteorText = ({ number = 75, text = "Projects" }) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: Math.random() * 100 + "vh",
      left: Math.random() * 100 + "vw",
      animationDelay: Math.random() * 0.3 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <div className="relative flex items-center justify-center h-screen w-full text-black bg-white">
      <h1 className="relative text-[10vw] font-bold tracking-wider z-10 text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">
        {text}
        <div className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none">
          {meteorStyles.map((style, idx) => (
            // Meteor Head
            <span
              key={idx}
              className={cn(
                "absolute size-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
              )}
              style={style}
            >
              {/* Meteor Tail */}
              <div className="absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
            </span>
          ))}
        </div>
      </h1>
    </div>
  );
};

export default MeteorText;
