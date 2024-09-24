import gsap from "gsap";
import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import Particles from "../components/magicui/particles";
import { Typography } from "@mui/material";
import About from "./About"; // Adjust the import path as necessary

export default function IntroductionTransition() {
  const introHeaderRef = useRef();
  const lettersRef = useRef([]);
  const diamondRef = useRef();
  const textContainerRef = useRef();
  const aboutRef = useRef(); // Ref for About component
  const [textWidth, setTextWidth] = useState(0);

  const arrowRef = useRef();
  useEffect(() => {
    if (textContainerRef.current) {
      setTextWidth(textContainerRef.current.getBoundingClientRect().width);
    }
    const handleResize = () => {
      if (textContainerRef.current) {
        setTextWidth(textContainerRef.current.getBoundingClientRect().width);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: introHeaderRef.current,
        start: "top top",
        end: "+=100%", // Adjusted end position
        pin: true,
        scrub: true,
        markers: true, // Enable markers for debugging
      },
    });

    timeline
      .fromTo(
        lettersRef.current,
        { opacity: 0, y: "100px" },
        {
          opacity: 1,
          y: "0",
          ease: "power1.inOut",
          stagger: 0.03,
        }
      )
      .fromTo(
        diamondRef.current,
        { strokeDasharray: 400, strokeDashoffset: 400 },
        {
          strokeDashoffset: 0,
          ease: "power1.inOut",
          duration: 1.25,
        },
        0
      )
      .fromTo(
        aboutRef.current,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 50,
          opacity: 1,
          ease: "power1.inOut",
          duration: 1,
        }
      )
      .fromTo(
        arrowRef.current,
        {
          y: -10,
          opacity: 0,
        },
        { y: 10, repeat: 1, opacity: 1, ease: "power1.inOut" }
      ),
      ">0.05";
  }, []);

  const text = "INTRODUCTION";

  return (
    <>
      <div
        ref={introHeaderRef}
        className="flex bg-[var(--cookies)] h-screen justify-center items-center relative"
      >
        <Particles
          className="absolute w-full h-100vh]"
          quantity={25}
          ease={80}
          color={"#181818"}
          refresh
        />
        <div ref={textContainerRef} className="relative text-center">
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Poppins",
              fontSize: "5vw",
              marginTop: "3rem",
            }}
          >
            {text.split("").map((letter, index) => (
              <span
                key={index}
                ref={(el) => (lettersRef.current[index] = el)}
                style={{ display: "inline-block" }}
              >
                {letter}
              </span>
            ))}
          </Typography>

          {/* SVG Diamond */}
          <svg
            ref={diamondRef}
            className="diamond-svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 100 100"
            style={{
              width: `${textWidth * 1.25}px`,
              height: `${textWidth * 1.25}px`,
            }}
          >
            <path
              d="M50 0 L100 50 L50 100 L0 50 Z"
              stroke="black"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>

          {/*my arrow*/}
          <div
            ref={arrowRef}
            className=" flex justify-center items-center bottom-0"
          >
            <img alt="hi" src="/website_photo/Group 2.svg" />
          </div>
        </div>

        {/* About Component */}
        <div ref={aboutRef} className="about-container">
          <About />
        </div>
      </div>

      {/* CSS for responsiveness and positioning */}
      <style jsx>{`
        .diamond-svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .about-container {
          position: absolute;
          bottom: -100%;
          width: 100%;
        }
      `}</style>
    </>
  );
}
