
import '@/App.css'

import TextReveal from "../components/magicui/text-reveal";
import Meteors from '../components/magicui/meteors'
import IconCloud from "@/components/magicui/icon-cloud";
import WordPullUp from '../components/magicui/word-pull-up';

import Typography from '@mui/material/Typography';
import '@fontsource/poppins';
import Intro from './Intro';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import About from './About';

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "flutter",
  "nodedotjs",
  "express",
  "firebase",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "next.js",
  "mongodb"
];
export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}


function Software() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
<>

 <Intro/>
 <About/>
  {/* <div className="z-10 flex flex-col justify-center rounded-lg bg-white dark:bg-black pt-7">
      
      <div className='flex-1 flex justify-center'>
        
      < WordPullUp words={"Welcome to the Software Side"} />


      </div>
  
      <div className='flex-1 flex items-center justify-center'>
      <IconCloudDemo/>
      </div>

      







  </div> */}


</>
  )
}

export default Software
