import Typography from '@mui/material/Typography';
import '@fontsource/poppins';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import WordPullUp from '../components/magicui/word-pull-up';
import Particles from '../components/magicui/particles';
import { useEffect, useState } from "react";
import { DockBar } from '../components/DockBar';
import TextRevealByWord from '../components/magicui/text-reveal';
import './Intro.css';
import CustomMenu from '../components/CustomMenu';
import Meteors from '../components/magicui/meteors';
import { useTheme } from '../components/ThemeContext.jsx'; // Import the useTheme hook
import { VelocityScroll } from '../components/magicui/scroll-based-velocity.jsx';

const muiTheme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
});

export default function Intro(){
    const { isDayMode } = useTheme(); // Use the theme context

    return(
        <MuiThemeProvider theme={muiTheme}>
            <div className="flex min-h-screen shadow-sm">
                {/* Name panel area */}
                <div className="absolute w-full h-screen bg-[var(--cookies)]  z-10">

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
                        <div className='flex flex-col'>
                            <Typography 
                            sx={{ 
                                ml: 2,
                          
                                fontFamily: 'CustomFont, sans-serif',
                                fontSize: {
                                    xs: '3rem',  // Font size for extra-small screens
                                    sm: '4rem',  // Font size for small screens
                                    md: '4rem',  // Font size for medium screens
                                    lg: '9rem',  // Font size for large screens
                                  },
                                
                                }} variant="h1">
                                <WordPullUp words={"Tony Tran"} />
                            </Typography>
                            <Typography sx={{ 
                                
                                ml: 4,
                                mt:3,
                                 fontSize: '2rem',
                                 fontFamily: 'CustomFont, sans-serif',
                                 fontStyle: 'italic', 
                                 }}>
                                Aspiring Data Scientist
                            </Typography>
                            <DockBar />
                        </div>
                        
                    </div>
                   
                </div>

                {/**replace with an arrow */}
                <div className="absolute loader justify-center"></div>
            </div>
           
        </MuiThemeProvider>
    );
}
