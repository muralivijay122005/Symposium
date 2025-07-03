import React from "react";
import TiltedCard from "../components/TiltedCard.jsx";
import SpotlightCard from "../components/SpotlightCard.jsx";

const Tech = () => {
  return (
    <div className="px-6 py-12 min-h-screen">
      <h2 className="text-3xl font-modern-bold text-center mb-10 text-white">
        Technical event
      </h2>

      <div className="flex flex-wrap justify-center gap-6 text-white">
        <div className="w-full sm:w-[48%] lg:w-[30%] flex justify-center">
          <SpotlightCard
            className="custom-spotlight-card w-full bg-white/20 min-h-[200px] flex flex-col justify-between"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <p className="">Event 1</p>
            <p className="text-sm">fbefejf</p>
          </SpotlightCard>
        </div>

        <div className="w-full sm:w-[48%] lg:w-[30%] flex justify-center">
          <SpotlightCard
            className="custom-spotlight-card w-full bg-white/20 min-h-[200px] flex flex-col justify-between"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <p>Event 2</p>
          </SpotlightCard>
        </div>

        <div className="w-full sm:w-[48%] lg:w-[30%] flex justify-center">
          <SpotlightCard
            className="custom-spotlight-card w-full bg-white/20 min-h-[200px] flex flex-col justify-between"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <p>Event 3</p>
          </SpotlightCard>
        </div>

        <div className="w-full sm:w-[48%] lg:w-[30%] flex justify-center">
          <SpotlightCard
            className="custom-spotlight-card w-full bg-white/20 min-h-[200px] flex flex-col justify-between"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <p>Event 4</p>
          </SpotlightCard>
        </div>

        <div className="w-full sm:w-[48%] lg:w-[30%] flex justify-center">
          <SpotlightCard
            className="custom-spotlight-card w-full bg-white/20 min-h-[200px] flex flex-col justify-between"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <p>Event 5</p>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default Tech;
