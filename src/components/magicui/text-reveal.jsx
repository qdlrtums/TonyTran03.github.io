"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typography } from "@mui/material";
import { cn } from "@/lib/utils";

export const TextRevealByWord = ({ text, className }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"], // Adjusted offset for smoother start
  });

  const words = text.split("");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex justify-center items-center h-[100vh] max-w-4xl bg-transparent px-[1rem] py-[5rem]"
        }
      >
<Typography
  variant="h2"
  className={className} // Apply the passed className
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Bebas Neue, sans-serif', // Apply the font
    color: 'red', // Fill color
    '-webkit-text-stroke': '2px #000', // Stroke width and color
    '-webkit-text-fill-color': 'transparent', // Set the fill to transparent initially for the hollow effect
    fontSize: '3rem', // Override font size directly here
  }}
>
  {words.map((char, i) => {
    const start = i / words.length;
    const end = start + 1 / words.length;
    const adjustedEnd = i === words.length - 1 ? end : end;
    return (
      <Word key={i} progress={scrollYProgress} range={[start, adjustedEnd]}>
        {char}
      </Word>
    );
  })}
</Typography>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const translateY = useTransform(progress, range, [50, 0]);

  return (
    <motion.span
      style={{
        opacity: opacity,
        transform: `translateY(${translateY}px)`,
      }}
      className={"text-black dark:text-white"}
    >
      {children}
    </motion.span>
  );
};

export default TextRevealByWord;
