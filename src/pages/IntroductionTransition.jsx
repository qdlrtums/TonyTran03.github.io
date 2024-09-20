import gsap from "gsap";
import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import Meteors from "../components/magicui/meteors";
import Particles from "../components/magicui/particles";
import { Typography } from "@mui/material";

export default function IntroductionTransition() {
  const introHeaderRef = useRef();
  const lettersRef = useRef([]);
  const aboutRef = useRef();

  useGSAP(() => {
    // Pinning the intro text
    gsap
      .timeline({
        scrollTrigger: {
          trigger: introHeaderRef.current,
          start: "top top", // When the top of the trigger hits the top of the viewport
          end: "bottom+=40% center", // Pin until this point
          pin: true, // This pins the intro text
          scrub: true,
          markers: true,
        },
      })
      .fromTo(
        lettersRef.current,
        { opacity: 0, y: "100px" },
        {
          opacity: 1,
          y: "0",
          ease: "power1.inOut",
          stagger: 0.1,
        }
      );

    // Animating the about section
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top-=20% top",
        end: "center center",
      },
    });

    t2.fromTo(aboutRef.current, { y: "100vh" }, { y: "0px" });
  }, []);

  const text = "INTRODUCTION";

  return (
    <>
      <div
        ref={introHeaderRef}
        className="flex bg-[var(--cookies)] h-screen justify-center items-center"
      >
        <Particles
          className="absolute w-full h-[50vh]"
          quantity={25}
          ease={80}
          color={"#181818"}
          refresh
        />
        <div>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Poppins",
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
        </div>
      </div>

      <div className="flex h-screen"></div>
    </>
  );
}
