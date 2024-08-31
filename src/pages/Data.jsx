
import '@/App.css'

import TextReveal from "../components/magicui/text-reveal";
import Meteors from '../components/magicui/meteors'
import IconCloud from "@/components/magicui/icon-cloud";
import WordPullUp from '../components/magicui/word-pull-up';

import Typography from '@mui/material/Typography';
import '@fontsource/poppins';

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


function Data() {
  

  return (
<>

 

        <IconCloudDemo/>  


</>
  )
}

export default Data
