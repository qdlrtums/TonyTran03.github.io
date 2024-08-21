import Typography from '@mui/material/Typography';
import '@fontsource/poppins';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WordPullUp from '../components/magicui/word-pull-up';
import Particles from '../components/magicui/particles';
import { useEffect, useState } from "react";
import { DockBar } from '../components/DockBar';


const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
});




export default function Intro(){
    const [color, setColor] = useState("#181818"); //TODO night mode
    return(

<ThemeProvider theme={theme}>



    <div className="flex min-h-screen ">

        {/* Left side*/}
        <div className="flex flex-1 justify-center h-screen bg-cookies">

            <div className="flex flex-1 justify-center items-center relative h-full ">
            <Particles
            className="absolute inset-0 w-full h-full"
                quantity={100}
                ease={80}
                color={color}
                refresh
            />

            <div className='flex flex-col'>
                <Typography sx={{ ml: 2, position: 'relative' }} variant="h2">
                    <WordPullUp words={"Tony Tran"} />
                </Typography>
                <DockBar/>
            </div>

                
                
            </div>

        </div>

        {/* Right side*/}
        <div className="flex flex-1 justify-center items-center ">
            <p1>hi</p1>
        </div>
    </div>


</ThemeProvider>    
    )

}