import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "./about.css";
export default function About() {
  const boxRef = useState();
  const aboutHeaderRef = useState();

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: aboutHeaderRef.current,
        start: "top top",
        end: "bottom+=50% center -=10%",
        pin: true,
        scrub: true,
        markers: {
          visible: false,
          label: "huh",
          position: "left",
          colour: "red",
        },
      },
    });
  });
  return (
    <>
      <div
        ref={aboutHeaderRef}
        className="flex w-full h-screen justify-center items-center"
      >
        <div
          ref={boxRef}
          className="containerr flex rounded-sm justify-center items-center shadow-lg"
        >
          hi
        </div>
      </div>
    </>
  );
}
