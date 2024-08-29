import React, { useRef, useEffect } from "react";
import Typography from '@mui/material/Typography';
import '@fontsource/poppins';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import WordPullUp from '../components/magicui/word-pull-up';
import Particles from '../components/magicui/particles';
import { DockBar } from '../components/DockBar';
import Meteors from '../components/magicui/meteors';
import { useTheme } from '../components/ThemeContext.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import '@fontsource/bebas-neue';
import { VelocityScroll } from "../components/magicui/scroll-based-velocity";



const muiTheme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

export default function Intro() {
  const refName = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: refName.current,
        start: "top-=top top",
        end: "bottom top",
        scrub: true,
        pin: true, // Keeps the intro section pinned while the animation plays
        markers: true
      }
    });

    tl.fromTo(refName.current, 
      { opacity: 1, y: 0 },
      { opacity: 0, y: -100, duration: 1, ease: "power1.inOut" }
    )
    .fromTo(aboutRef.current, 
      { opacity: 0, y:500 }, 
      { opacity: 1, y: '500', duration: 1, ease: "power1.inOut" }, 
      "<0.5" 
    );

  }, []);

  const { isDayMode } = useTheme();

  return (
    <MuiThemeProvider theme={muiTheme}>
      <div className="flex min-h-screen shadow-sm">
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
            <div ref={refName} className='flex flex-col'>
              <Typography 
                sx={{ 
                  ml: 2,
                  fontFamily: 'CustomFont, sans-serif',
                  fontSize: {
                    xs: '3rem',
                    sm: '4rem',
                    md: '4rem',
                    lg: '9rem',
                  },
                }} 
                variant="h1"
              >
                <WordPullUp words={"Tony Tran"} />
              </Typography>
              <Typography 
                sx={{ 
                  ml: 4,
                  mt:3,
                  fontSize: '2rem',
                  fontFamily: 'CustomFont, sans-serif',
                  fontStyle: 'italic', 
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
 
        <div className='flex flex-col bg-[var(--cookies)] h-[100vh]'>


            <div  ref={aboutRef}  className=" flex flex-col sticky  ">

                <VelocityScroll 
                        text="About"
                        default_velocity={4}
                        className="font-display text-center items-center justify-center text-4xl tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
                    />


            </div>

    </div>
    </MuiThemeProvider>
  );
}
