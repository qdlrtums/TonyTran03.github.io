import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Intro from './Intro';

import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Software() {
  const introRef = useRef(null);
  const aboutRef = useRef(null);


  return (
    <>
      <div ref={introRef} >
        <Intro />
      </div>

    </>
  );
}

export default Software;
