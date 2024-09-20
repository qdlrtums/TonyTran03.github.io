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
import MeteorText from "../components/magicui/MeteorText.jsx";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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


  const panelRef = useRef(); // Ref for the panel that will come up
  const meteorRef = useRef();
  

//top headers
const introHeaderRef = useRef();
  //for the left side

  const infoBarRef = useRef();
  const roleRef = useRef();
  const infoWordRef = useRef(); 
  
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

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: aboutMeTextContainerRef.current,
          start: "top+=50% 70%",
         end: "bottom bottom",
          pin: introHeaderRef.current,
          scrub: true,
          markers: true,
        },
      });

      tl2
        .fromTo(
          aboutMeTextRef.current,
          { opacity: 0, x: -100 },
          { opacity: 1, x: -30, duration: 1, ease: "power1.inOut" }
        )
        .fromTo(
          photoRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "power1.in" },
          
        ).fromTo(infoHeaderRef.current,

          {opacity:0, y : "25px"},
          {opacity:1, y : "0px", duration:10,  ease: "power1.inOut"}
        ),"<0.5"

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: catSectionRef.current,
          start: "top-=50% center",
          end: "bottom bottom",
          scrub: true,
          markers: false,
          pin: false,
          pinSpacing: true,
        },
      });
      tl3.to(catSectionRef.current, { opacity: 1 });



      

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
      <div className="h-screen flex flex-col justify-center bg-[var(--cookies)] z-0">

            
        <div
          ref={aboutMeTextContainerRef}
          className="flex  h-screen flex-col justify-start sm:justify-center relative bg-[var(--cookies)] p-7"
        >
          {/** The word-popup*/}
          
          <div ref={infoHeaderRef} className="flex flex-1 top-0 left-0 bg-white">
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
                textAlign: "top",
                paddingLeft: "1rem",
              }}
            >
              Introduction
            </Typography>

          </div>

          <div ref={aboutMeTextRef}>
      



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
                  fontSize: {
                    sm: "0.1rem",
                    md: "1rem",
                  },
                  color: "#333",
                  marginLeft: "8px",

                  lineHeight: "1.5",
                  textAlign: "left",

                  height: "6rem",
                  maxWidth: {
                    xs: "80vw",
                    md: "30vw",
                    lg: "20vw",
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
              className="flex w-full h-auto object-cover imageBox rounded-lg"
            />
          </div>
        </div>


      </div>

      <div className="h-screen">
hi
        </div>
    </MuiThemeProvider>
  );
}
