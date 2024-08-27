
import '@fontsource/bebas-neue';

import { VelocityScroll } from "../components/magicui/scroll-based-velocity";
import './About.css'
import { useState, memo } from 'react';
export default function About() {


    const [select, setSelect] = useState(null);

    const handleSelect = (index) => {
        setSelect(index);
    };

    return (
      <div className="h-[100vh] bg-[var(--cookies)]">
        <div className="flex min-h-screen flex-col relative drop-in">
          

          {/**content section */}
          <div className="m-16 h-auto flex-grow context drop-shadow-md relative z-10">
            <div className="flex flex-col lg:flex-row h-auto">

            {/**button 1  */}
            <div
              className={`flex-1 m-2 flex items-center justify-center 
                ${
                    select === 1 ? ' bg-[var(--contentColor)] ' : 'bg-[var(--cookies)]'
                }`
                }onClick={() => handleSelect(1)}
            >
                01.
              </div>

               {/**button 2  */}
               <div
              className={`flex-1 m-2 flex items-center justify-center 
                ${
                    select === 2 ? ' bg-[var(--contentColor)] ' : 'bg-[var(--cookies)]'
                }`
                }onClick={() => handleSelect(2)}
            >
                02.
              </div>

               {/**button 3 */}
               <div
              className={`flex-1 m-2 flex items-center justify-center 
                ${
                    select === 3 ? ' bg-[var(--contentColor)] ' : 'bg-[var(--cookies)]'
                }`
                }onClick={() => handleSelect(3)}
            >
                03.
              </div>
            {/**end of button section */}


            </div>
          </div>
  
        {/* Background */}
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            className="text-[var(--contentColor)]"
          >
            <text
              x="45%"
              y="60%"
        
              dominantBaseline="middle"
              textAnchor="middle"
                className="16px lg:text-[36px]"
              fontFamily="Shanders"
              fill="var(--contentColor)"  // This line sets the text color
              opacity={0.1}
            >
              A B O U T
            </text>
          </svg>
        </div>
        </div>
      </div>
    );
  }
  