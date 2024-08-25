import { Typography } from "@mui/material";
import TextRevealByWord from "../components/magicui/text-reveal";
import '@fontsource/bebas-neue';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
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

        <div id='panel' className="flex flex-col w-3/5 flex-1 sticky justify-center h-[200vh]  mt-5  bg-[var(--cookies)] ">

            {/**since the size is 200bh, we can split the content if there's 5 things by 40vh */}
            <div className="flex absolute ml-7 mt-7 top-0 h-[40vh]">
            <MuiThemeProvider theme={muiTheme}>
                <Typography variant="h2" sx={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    Hello, my name is Tony Tran
                </Typography>
               </MuiThemeProvider>
            </div>

             {/**80vh*/}
            <div className="flex relative  justify-center top-0  h-[40vh]">
                <Typography sx={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    hi
                </Typography>
            </div>
            
             {/**120vh*/}
             <div className="flex relative  justify-center top-0  h-[40vh]">
                <Typography sx={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    hi
                </Typography>
            </div>
            
            
             {/**160vh*/}
             <div className="flex relative  justify-center top-0  h-[40vh]">
                <Typography sx={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    hi
                </Typography>
            </div>

        </div>

        <div className="flex flex-col w-2/5 justify-center sticky top-0 ">
            <TextRevealByWord text="ABOUT" className="text-7xl" />
        </div>
        
    </div>


        </div>

    )
}