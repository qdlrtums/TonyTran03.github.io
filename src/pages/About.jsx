import '@fontsource/bebas-neue';
import { VelocityScroll } from "../components/magicui/scroll-based-velocity";
import './About.css';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  gsap.registerPlugin(ScrollTrigger);
  const banner = useRef(null);

  useGSAP(() => {
    if (banner.current) {
      gsap.fromTo(banner.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 2, ease: "power1.inOut", 
          scrollTrigger: {
            trigger: banner.current, // Element that triggers the animation
            start: "top 80%", // When the top of the banner is 80% down the viewport
            end: "bottom 20%", // When the bottom of the banner is 20% down the viewport
            toggleActions: "play none none none", // Play the animation when entering the viewport
          }
        }
      );
    }
  }, []);


    return (
        
      <div className='flex flex-col bg-[var(--cookies)] h-[200vh]'>


            <div ref={banner} className="h-[50vh] flex flex-col sticky top-2 ">
   
                <VelocityScroll 
                        text="About"
                        default_velocity={4}
                        className="font-display text-center text-4xl tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
                    />


            </div>
    
              <div className='bg-slate-400 flex flex-grow mb-7'>
                hi
              </div>
            </div>

    );
}
