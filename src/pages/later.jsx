import { Typography } from "@mui/material";
import { color } from "framer-motion";



export default function Later(){


    
    // const tl = gsap.timeline()

    return(
    <div className="h-screen flex">

       {/**left side info */}
        <div className="flex flex-1 bg-var(--cookies)">
            <div className="flex flex-col flex-1 justify-center items-center">
                
                {/**Name */}
                <Typography variant="h1" sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '3rem',
                    color: 'black',
                }}>
                        hi
                </Typography>

                {/**Role */}
                <Typography variant="h1" sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '3rem',
                    color: 'black'
                }}>
                        Software Developer
                </Typography>
                {/**info */}


            </div>
        </div>

         {/**photo */}
        <div className="flex flex-1 bg-black">

        </div>
    </div>

    )
}