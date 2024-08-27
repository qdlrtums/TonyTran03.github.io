  "use client";
  import React, { useRef } from 'react';
  import { motion, useInView } from "framer-motion";
  import { cn } from "@/lib/utils";

  export default function WordPullUp({ 
    words,
  
    wrapperFramerProps = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      },
    },

    framerProps = {
      hidden: { y: 20, opacity: 0 },
      show: { y: 0, opacity: 1 },
    },

    className
  }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.h1
        ref={ref}
        variants={wrapperFramerProps}
        initial="hidden"
        animate={isInView ? "show" : "hidden"} // Control animation based on isInView
        className={cn(
          "font-display text-center font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
          className
        )}
      >
        {words.split(" ").map((word, i) => (
          <motion.span
            key={i}
            variants={framerProps}
            style={{ display: "inline-block", paddingRight: "8px" }}
          >
            {word === "" ? <span>&nbsp;</span> : word}
          </motion.span>
        ))}
      </motion.h1>
    );
  }
