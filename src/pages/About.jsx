import { Typography } from "@mui/material";
import TextRevealByWord from "../components/magicui/text-reveal";
import '@fontsource/bebas-neue';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { TextRevealByWord2 } from "../components/magicui/text-reveal-hori";
import WordPullUp from "../components/magicui/word-pull-up";
import { VelocityScroll } from "../components/magicui/scroll-based-velocity";
import './About.css'


export default function About(){
  
    
    return(
        <div className="h-[100vh] bg-[var(--cookies)] ">
   
 
    <div className="flex min-h-screen flex-col  ">

    <div className="cover w-full absolute h-[7rem] md:h-[7rem] z-10  "></div>
        <VelocityScroll
            text="About"
            default_velocity={1}
            className="font-display text-center text-4xl tracking-[-0.02em]  text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] bg-[var(--cookies)] "
        />
  
        {/**contect section */}
        <div className="m-16 h-auto flex-grow context bg-[var(--contentColor)] drop-shadow-md ">
        <VelocityScroll
            text="About"
            default_velocity={-1}
            className="font-display text-center text-4xl tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] bg-[var(--cookies)] "
        />
            <div className="flex flex-col lg:flex-row h-auto">

                <div className="flex-1 m-2">
                01.

                    
                </div>

                <div className="flex-1 m-2">
                    02.
                </div>

                <div className="flex-1 m-2">
                    03.Resume
                </div>

            </div>

        </div>


        </div>
    </div>
    )
}