import { Typography } from "@mui/material";
import TextRevealByWord from "../components/magicui/text-reveal";
import '@fontsource/bebas-neue';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { TextRevealByWord2 } from "../components/magicui/text-reveal-hori";
import WordPullUp from "../components/magicui/word-pull-up";
import { VelocityScroll } from "../components/magicui/scroll-based-velocity";
import './About.css'
export default function About(){
    const muiTheme = createTheme({
        typography: {
            fontFamily: 'Poppins, sans-serif',
        },
    });
    
    return(
        <div className="h-[100vh] bg-[var(--cookies)] ">
   
 
    <div className="flex min-h-screen flex-col  ">

    <div className="cover w-full sticky h-[7rem] md:h-[7rem] z-10  "></div>
        <VelocityScroll
            text="About"
            default_velocity={1}
            className="font-display text-center text-4xl tracking-[-0.02em]  text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] bg-[var(--cookies)] "
        />
  
        {/**contect section */}
        <div className="m-16 h-auto flex-grow context bg-[var(--contentColor)] ">

            <div className="grid lg:grid-cols-4  sm:grid-cols-1 gap-12 m-4">
                
                <div className="flex">01</div>
                <div>02</div>

                <div>03</div>
                <div>04</div>
            </div>

        </div>


        </div>
    </div>
    )
}