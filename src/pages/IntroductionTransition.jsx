import gsap from "gsap";
import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import Particles from "../components/magicui/particles";
import { Typography } from "@mui/material";
import "./about.css";
import { useTheme } from "../components/ThemeContext.jsx";

export default function IntroductionTransition() {
  const { isDayMode } = useTheme();
  const introHeaderRef = useRef();
  const lettersRef = useRef([]);
  const diamondRef = useRef();
  const textContainerRef = useRef();
  const boxRef = useRef(); // Ref for the new box element
  const [textWidth, setTextWidth] = useState(0);

  const isMobile = () => window.innerWidth <= 768;
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
      );

    let screenSize = { lg: 1, md: 0.7, sm: 0.4 };

    // Function to detect screen size based on width
    const getScreenScale = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        // Small screens, like mobile
        return screenSize.sm;
      } else if (width <= 1280) {
        // Medium screens, like 13-inch laptops
        return screenSize.md;
      } else {
        // Large screens
        return screenSize.lg;
      }
    };

    const screenScale = getScreenScale();
    if (!isMobile()) {
      // Apply scaling animation only for desktop
      timeline.fromTo(
        boxRef.current,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: screenScale,
          ease: "power1.inOut",
          duration: 1,
        },
        "-=0.5" // Adjust timing to synchronize with other animations
      );
    } else {
      // For mobile, only apply opacity change, no scaling
      timeline.fromTo(
        boxRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          ease: "power1.inOut",
          duration: 1,
        },
        "-=0.5" // Adjust timing to synchronize with other animations
      );
    }
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
            className="diamond-svg flex"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 100 100"
            style={{
              width: `${textWidth * 0.8}px`, // Adjust the size to make it smaller
              height: `${textWidth * 0.8}px`,
            }}
          >
            <path
              d="M50 0 L100 50 L50 100 L0 50 Z"
              stroke="black"
              strokeWidth="0.5"
              fill="none"
              opacity="0.1" // Reduce opacity to make it less prominent
            />
          </svg>
        </div>

        <div
          ref={boxRef}
          className="containerr absolute flex-col items-center justify-center rounded-sm shadow-lg bg-white p-6"
        >
          {/* Photo of yourself */}
          <div className="mb-4">
            <img
              src="/website_photo/selfie_1.jpg" // Adjust the path for the photo
              alt="Tony"
              className="rounded-full w-48 h-48 object-cover mx-auto zoom-photo"
            />
          </div>
          <style jsx>{`
            .zoom-photo {
              transition: transform 0.3s ease-in-out; /* Smooth transition */
            }

            .zoom-photo:hover {
              transform: scale(1.1); /* Zoom in on hover */
            }
          `}</style>
          {/* Introduction or Summary */}
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="text-lg mt-2">
              Hi, I'm Tony Tran, a passionate software developer with expertise
              in web and mobile development, machine learning, and data science.
            </p>
          </div>

          {/* Skills */}
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold">Skills</h3>
            <ul className="list-disc list-inside text-lg mt-2">
              <li>JavaScript (React, Node.js)</li>
              <li>Python (Pandas, NumPy, Scikit-learn)</li>
              <li>Mobile Development (Flutter, React Native)</li>
              <li>Data Science & Machine Learning</li>
            </ul>
          </div>

          {/* Experience */}
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold">Experience</h3>
            <p className="text-lg mt-2">
              Software Developer at XYZ Corp <br />
            </p>
          </div>

          {/* Education */}
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold">Education</h3>
            <p className="text-lg mt-2">
              B.Math. in Mathematical Sciences (Statistics) <br />
              University of Guelph
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-lg mt-2">
              Email: tony.tran03@hotmail.com <br />
              LinkedIn: https://www.linkedin.com/in/tony-tran-a08b8a230/
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
