import React from "react";
import Particles from "./magicui/particles";
import Meteors from "./magicui/Meteors";

export const BackgroundEffects = ({ isDayMode }) => {
  return (
    <div className="absolute w-full h-screen">
      {isDayMode && (
        <Particles
          className="absolute w-full h-screen"
          quantity={155}
          ease={80}
          color={"#181818"}
          refresh
        />
      )}
      {!isDayMode && <Meteors number={45} />}
    </div>
  );
};
