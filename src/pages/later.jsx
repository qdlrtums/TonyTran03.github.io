import { Typography } from "@mui/material";
import TextRevealByWord from "../components/magicui/text-reveal";
import '@fontsource/bebas-neue';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { TextRevealByWord2 } from "../components/magicui/text-reveal-hori";
import WordPullUp from "../components/magicui/word-pull-up";
import { VelocityScroll } from "../components/magicui/scroll-based-velocity";
export default function About(){
    const muiTheme = createTheme({
        typography: {
            fontFamily: 'Poppins, sans-serif',
        },
    });
    
    return(
    <div>
        {/* "HOME" text area */}
   

    <div className="flex min-h-screen ">

        <div id="panel" className="flex flex-col w-3/5 sticky justify-center h-[100vh]  mt-16 ml-6  bg-[var(--cookies)] ">

            {/**since the size is 200bh, we can split the content if there's 5 things by 40vh */}
            <div className="flex absolute ml-7 mt-7 top-0 h-[40vh]">
            <MuiThemeProvider theme={muiTheme}>
                <Typography variant="h2" sx={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                <WordPullUp words={"Hello, my name is Tony Tran"}  />
                </Typography>
               </MuiThemeProvider>
            </div>

            

             <div className="flex relative  justify-center top-0  h-[10vh]">
                <Typography sx={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    hi
                </Typography>
            </div>

            <div className="flex relative  justify-center top-0 h-[10vh]">
                <Typography sx={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    hi
                </Typography>
            </div>

        </div>
        <div className="flex flex-1 justify-center relative ">
            <TextRevealByWord2 text="ABOUT" className="h-[-1vh] " />
        </div>



    </div>



        </div>

    )
}