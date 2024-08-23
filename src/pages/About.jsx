import TextRevealByWord from "../components/magicui/text-reveal";

export default function About(){

    return(
        <div>
        {/* "HOME" text area */}
   
    <div className="flex min-h-screen ">

        <div id='panel' className="flex flex-1 sticky justify-center h-[200vh]  mt-5  bg-[var(--cookies)] ">

            <div className="flex relative flex-col w-2/5 justify-center  top-0 ">
            hi
            </div>

            
        </div>

        <div className="flex flex-col w-2/5 justify-center sticky top-0 ">
            <TextRevealByWord text="ABOUT" className="text-7xl" />
        </div>
        
    </div>
    <div>
        {/* "HOME" text area */}
   
    <div className="flex min-h-screen ">

        <div id='panel' className="flex flex-1 sticky justify-center h-[200vh]  mt-5  bg-[var(--cookies)] ">

            <div className="flex relative flex-col w-2/5 justify-center  top-0 ">
            hi
            </div>

            
        </div>

        <div className="flex flex-col w-2/5 justify-center sticky top-0 ">
            <TextRevealByWord text="ABOUT" className="text-7xl" />
        </div>
        
    </div>


        </div>

        </div>
        
    )
}