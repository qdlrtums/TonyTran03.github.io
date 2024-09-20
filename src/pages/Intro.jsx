import React, { useRef, useEffect } from "react";
import Typography from "@mui/material/Typography";
import "@fontsource/poppins";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import WordPullUp from "../components/magicui/word-pull-up";
import Particles from "../components/magicui/particles";
import { DockBar } from "../components/DockBar";
import Meteors from "../components/magicui/meteors";
import { useTheme } from "../components/ThemeContext.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@fontsource/bebas-neue";

import { useGSAP } from "@gsap/react";

import "./intro.css";
import IntroductionTransition from "./IntroductionTransition.jsx";
import About from "./About.jsx";

const muiTheme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default function Intro() {
  const refName = useRef();

  const aboutMeTextRef = useRef();
  const aboutMeTextContainerRef = useRef();
  const catSectionRef = useRef();
  const photoRef = useRef();
  const infoHeaderRef = useRef();

  //top headers
  const introHeaderRef = useRef();
  //for the left side

  useGSAP(() => {
    const isMobile = window.innerWidth <= 500; // Define mobile screen width (you can adjust)
    if (!isMobile) {
      // GSAP animations for desktop
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: refName.current,
          start: "top top+=50%",
          end: "bottom top",
          scrub: true,
          pin: true, // Pin for desktop only
          markers: false,
        },
      });

      tl.fromTo(
        refName.current,
        { opacity: 1, y: -100 },
        { opacity: 0, y: -200, duration: 1, ease: "power1.inOut" }
      );
    }
  }, []);

  const { isDayMode } = useTheme();

  return (
    <MuiThemeProvider theme={muiTheme}>
      <div className="flex flex-col lg:flex-row min-h-screen shadow-sm">
        <div className="absolute w-full h-screen bg-[var(--cookies)] z-10">
          {isDayMode ? (
            <Particles
              className="absolute w-full h-screen"
              quantity={155}
              ease={80}
              color={"#181818"}
              refresh
            />
          ) : (
            <Meteors number={45} />
          )}

          <div className="flex flex-1 justify-center items-center h-full">
            <div ref={refName} className="flex flex-col">
              <Typography
                sx={{
                  ml: 2,
                  fontFamily: "CustomFont, sans-serif",
                  fontSize: {
                    xs: "3rem",
                    sm: "4rem",
                    md: "4rem",
                    lg: "9rem",
                  },
                }}
                variant="h1"
              >
                <WordPullUp words={"Tony Tran"} />
              </Typography>

              <Typography
                sx={{
                  ml: 4,
                  mt: 3,
                  fontSize: "2rem",
                  fontFamily: "CustomFont, sans-serif",
                  fontStyle: "italic",
                }}
              >
                Aspiring Data Scientist
              </Typography>
              <DockBar />
            </div>
          </div>
        </div>
      </div>
      <IntroductionTransition />
    </MuiThemeProvider>
  );
}
