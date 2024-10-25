import "@/App.css";

import IconCloud from "@/components/magicui/icon-cloud";
import "@fontsource/poppins";

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
  "mongodb",
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
      <IconCloudDemo />
    </>
  );
}

export default Data;
