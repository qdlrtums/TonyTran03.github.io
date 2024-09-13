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

import TypingAnimation from "../components/magicui/typing-animation.jsx";
import { useGSAP } from "@gsap/react";
import Data, { IconCloudDemo } from "./Data.jsx";
import { FadeText } from "../components/magicui/fade-text.jsx";
import { BorderBeam } from "../components/magicui/border-beam.jsx";
import "./intro.css";
import cat1 from "/cat1.svg";

const muiTheme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default function Intro() {
  {
    /* <div ref={aboutRef} className="w-full flex justify-center items-center">
          
          <VelocityScroll 
            text="About"
            default_velocity={4}
            className="font-display text-center text-4xl tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
          />
         
        </div> */
  }
  const refName = useRef();

  const refInfo = useRef();
  const containerRef = useRef();
  const aboutRef = useRef();
  const photoRef = useRef();

  const projectRef = useRef();

  useGSAP(() => {
    const isMobile = window.innerWidth <= 500; // Define mobile screen width (you can adjust)

    if (!isMobile) {
      // GSAP animations for desktop
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: refName.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true, // Pin for desktop only
          markers: false,
        },
      });

      tl.fromTo(
        refName.current,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -100, duration: 1, ease: "power1.inOut" }
      ).fromTo(
        photoRef.current,
        { opacity: 0, y: -100 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
        "<0.5"
      );

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top+=30% 70%",
          end: "bottom bottom",
          scrub: true,
          markers: false,
        },
      });

      tl2
        .fromTo(
          refInfo.current,
          { opacity: 0, x: -100 },
          { opacity: 1, x: -30, duration: 1, ease: "power1.inOut" }
        )
        .fromTo(
          photoRef.current,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 1, ease: "power1.inOut" },
          "<0.5"
        );

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top-=50% center",
          end: "bottom bottom",
          scrub: true,
          markers: false,
          pin: containerRef.current, // Pinning for desktop only
          pinSpacing: true,
        },
      });
      tl3.to(aboutRef.current, { opacity: 1 });
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

      {/* About Section */}
      <div className="h-screen flex justify-center bg-[var(--cookies)]  pb-8 z-0">
        <div
          ref={containerRef}
          className="flex flex-1 min-h-screen flex-col justify-start sm:justify-center relative bg-[var(--cookies)] p-7"
        >
          {/** Name Row */}

          <div ref={refInfo} className="relative ">
            {/*header*/}

            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontStyle: "italic",
                fontWeight: "600",
                fontSize: {
                  xs: "2rem",
                  lg: "2.5rem",
                },
                marginBottom: "1rem",
                color: "#333",
                textAlign: "left",
                paddingLeft: "1rem",

              }}
            >
              Introduction
            </Typography>

            {/** Role Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 ">
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#555",
                  minWidth: "80px",
                  textAlign: "left",
                  paddingLeft: "1rem",

                }}
                className="text-left sm:text-right"
              >
                Role
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "normal",
                  fontSize: "1.75rem",
                  color: "#111",
                  marginLeft: "8px",
                  textAlign: "left",
                  
                }}
              >
                <FadeText
                  text={"Student @UoG, Mathematical Science (B.math)"}
                  direction="left"
                />
              </Typography>
            </div>

            {/** Info Row */}
            <div className="flex sm:flex-row items-start  sm:items-center ">
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#555",
                  minWidth: "80px",
                  textAlign: "left",
                  paddingLeft: "1rem", 

                }}
                className="text-left sm:text-right"
              >
                Info
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "normal",
                  fontSize:{
                    sm: "0.1rem",
                    md:"1rem",
                   
                  },
                  color: "#333",
                  marginLeft: "8px",
                  maxWidth: "600px",
                  lineHeight: "1.5",
                  textAlign: "left",
              
                  height: "6rem",
                  maxWidth: {
                    xs: "80vw",
                    md: "30vw",
                    lg: "43vw",
                  },
                  wordWrap: "break-word",
                }}
              >
                <TypingAnimation
                  className=" font-bold text-black dark:text-white"
                  text="At the age of 14, I wrote my very first lines of code. 
      Over the years, I've explored various programming languages and developed a passion for problem-solving.
      "
                />
              </Typography>
            </div>
          </div>
          <div
            ref={photoRef}
            className="imageBox flex rounded-lg shadow-md m-3 relative justify-center items-center"
          >
            <img
              src="website_photo/selfie_1.jpg"
              alt="Your Image Description"
                className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/** Right side for photo or additional content */}
        <div className="flex w-2/5 bg-white  z-10  flex-col mr-7">
          <div className="flex flex-1  items-center justify-center">
            <div className="flex-1  flex">
              Born and raised in Canada, Ontario
            </div>
            <div className="imageBox rounded-lg -rotate-6 flex flex-1 shadow-md m-3 relative w-screen"></div>
          </div>
        </div>
      </div>

{/**About me page 2 */}  
<div ref={aboutRef} className="h-screen flex z-10">
  <div className="flex flex-1"></div>
  {/**right side collage */}
  <div className="flex flex-1 flex-col z-10">
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 p-1">
        <img
          src="website_photo/cat1.png"
          alt="Charlie - my Cat"
          className="object-cover rounded-lg transform rotate-[-7deg]"
        />
      </div>
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 p-1">
        <img
          src="website_photo/cat2.jpg"
          alt="Charlie - my Cat 2"
          className="object-cover shadow-md rounded-lg transform rotate-[5deg]"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 p-1">
        <img
          src="website_photo/cat3.jpg"
          alt="Charlie - my Cat 3"
          className="object-cover shadow-md rounded-lg transform rotate-[2deg]"
        />
      </div>
    </div>
  </div>
</div>

      {/**Project*/}
      <div ref={projectRef} className="h-screen flex z-10">
        <div className=""></div>
      </div>
    </MuiThemeProvider>
  );
}
