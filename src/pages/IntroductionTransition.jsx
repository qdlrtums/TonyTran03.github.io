import gsap from "gsap";
import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import Particles from "../components/magicui/particles";
import { Typography } from "@mui/material";

export default function IntroductionTransition() {
  const introHeaderRef = useRef();
  const lettersRef = useRef([]);
  const diamondRef = useRef();
  const textContainerRef = useRef();
  const boxRef = useRef(); // Ref for the new box element
  const [textWidth, setTextWidth] = useState(0);

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
        boxRef.current,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          ease: "power1.inOut",
          duration: 1,
        },
        "-=0.5" // Adjust timing to synchronize with other animations
      );
  }, []);

  const text = "INTRODUCTION";

  return (
    <>
      <div
        ref={introHeaderRef}
        className="flex bg-[var(--cookies)] h-screen justify-center items-center relative"
      >
        <Particles
          className="absolute w-full h-[100vh]"
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
            className="diamond-svg flex"
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
        </div>

        <div
          ref={boxRef}
          className="containerr absolute  flex-col items-center justify-center  rounded-sm shadow-lg bg-white"
        >
          {/* Introduction or Summary */}
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="text-sm mt-2">
              Hi, I'm Tony Tran, a passionate software developer with expertise
              in web and mobile development, machine learning, and data science.
            </p>
          </div>

          {/* Skills */}
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold">Skills</h3>
            <ul className="list-disc list-inside text-sm mt-2">
              <li>JavaScript (React, Node.js)</li>
              <li>Python (Pandas, NumPy, Scikit-learn)</li>
              <li>Mobile Development (Flutter, React Native)</li>
              <li>Data Science & Machine Learning</li>
            </ul>
          </div>

          {/* Experience */}
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold">Experience</h3>
            <p className="text-sm mt-2">
              Software Developer at XYZ Corp <br />
              Mobile Developer at Oriole AI <br />
              Data Science Intern at SunLife
            </p>
          </div>

          {/* Education */}
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold">Education</h3>
            <p className="text-sm mt-2">
              B.Sc. in Mathematical Sciences (Statistics) <br />
              University of Guelph
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-sm mt-2">
              Email: tony.tran03@hotmail.com <br />
              LinkedIn: https://www.linkedin.com/in/tony-tran-a08b8a230/
            </p>
          </div>
        </div>
      </div>

      {/* CSS for responsiveness and positioning */}
      <style jsx>{`
        .diamond-svg {
          position: absolute;
          top: 50%;
          left: -12%;
          transform: translate(0%, -50%);
        }
      `}</style>
    </>
  );
}
