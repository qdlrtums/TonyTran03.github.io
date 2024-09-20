import gsap from "gsap";
import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import Meteors from "../components/magicui/meteors";
import Particles from "../components/magicui/particles";
import { Typography } from "@mui/material";

export default function IntroductionTransition() {
  const introHeaderRef = useRef();
  const lettersRef = useRef([]);
  useGSAP(() => {
    // Pinning the intro text
    gsap
      .timeline({
        scrollTrigger: {
          trigger: introHeaderRef.current,
          start: "top top",
          end: "bottom+=40% center-=10%",
          pin: true,
          scrub: true,
          markers: false,
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
      )
      .to(lettersRef.current, { left: 0 });
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
    </>
  );
}
