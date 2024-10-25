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
import Meteors from "../components/magicui/Meteors";
import { useTheme } from "../components/ThemeContext.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@fontsource/bebas-neue";
import { useGSAP } from "@gsap/react";
import IntroductionTransition from "./IntroductionTransition.jsx";

import "./Intro.css";
import Project from "./Project.jsx";

const muiTheme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const refName = useRef();
  const introSectionRef = useRef();

  useGSAP(() => {
    const isMobile = window.innerWidth <= 500;
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introSectionRef.current,
          start: "top top",
          end: "bottom+=30% center+=10%",
          scrub: true,
          pin: refName.current,
          markers: false,
        },
      });

      tl.fromTo(
        refName.current,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -200, duration: 1, ease: "power1.inOut" }
      );
    }
  }, []);

  useEffect(() => {
    // Trigger ScrollTrigger refresh to recalculate after all content is rendered
    ScrollTrigger.refresh();
  }, []);

  const { isDayMode } = useTheme();

  return (
    <MuiThemeProvider theme={muiTheme}>
      <div
        ref={introSectionRef}
        className="flex flex-col lg:flex-row min-h-screen shadow-sm"
      >
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
      {/* Ensure IntroductionTransition fills the space */}
      <IntroductionTransition />
      <Project />
    </MuiThemeProvider>
  );
}
