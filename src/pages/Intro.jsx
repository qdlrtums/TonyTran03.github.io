import Typography from '@mui/material/Typography';
import '@fontsource/poppins';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WordPullUp from '../components/magicui/word-pull-up';
import Particles from '../components/magicui/particles';
import { useEffect, useState } from "react";
import { DockBar } from '../components/DockBar';
import TextRevealByWord from '../components/magicui/text-reveal';
import './Intro.css'
import CustomMenu from '../components/CustomMenu'; // Adjust the import path as needed


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

    <div className="">
        <TextRevealByWord text="HOME" className="text-7xl lg:inset-x-72 " />
    </div>


    
   
        {/* Left side*/}
        <div  id='name_panel' className="flex flex-1 justify-center h-screen sticky top-[1rem] bg-cookies">

            <div className="flex flex-1 justify-center items-center relative h-full ">
            <Particles
            className="absolute w-full"
                quantity={125}
                ease={80}
                color={color}
                refresh
            />

            <div className='flex flex-col '>
                <Typography sx={{ ml: 2, position: 'relative',fontSize: '4rem' }} variant="h1">
                    <WordPullUp words={"Tony Tran"} />
                </Typography>
                <Typography sx={{ ml: 3, position: 'relative',fontSize: '1rem' }}>Aspiring Data Scientist</Typography>
                <DockBar/>
                
            </div>

                
                
            </div>
            

        </div>
        
        {/* Right side*/}
        <div className="flex  w-1/3 justify-center sticky  top-0 ">
        
          
        </div>

    </div>
   



    <div className="flex min-h-screen ">

    <div id='panel' className="flex flex-1 justify-center h-screen sticky top-[1rem] bg-cookies">
    </div>
        <div className="flex flex-col w-2/5 justify-center sticky top-0 ">
            <TextRevealByWord text="ABOUT" className="text-7xl" />
        </div>
        
    </div>

</ThemeProvider>    
    )

}