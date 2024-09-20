import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Intro from "./Intro";

import { useGSAP } from "@gsap/react";
import IntroductionTransition from "./IntroductionTransition";
import About from "./About";

gsap.registerPlugin(ScrollTrigger);

function Software() {
  return (
    <>
      <div>
        <Intro />
      </div>
    </>
  );
}

export default Software;
