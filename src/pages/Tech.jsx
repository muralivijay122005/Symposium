import React from "react";
//import TiltedCard from "../components/TiltedCard.jsx";
import SpotlightCard from "../components/SpotlightCard.jsx";

const Tech = ({refProp}) => {
  return (
    <section ref={refProp} className="min-h-screen p-10 text-white">
    <h2 className="text-3xl font-bold">Tech Events</h2>
    <p>Details about technical events...</p>
  </section>
  )
}

    //   <div className="flex flex-wrap justify-center gap-6 text-white">
    //     <div className="w-full sm:w-[48%] lg:w-[30%] flex justify-center">
    //       <SpotlightCard
    //         className="custom-spotlight-card w-full bg-white/20 min-h-[200px] flex flex-col justify-between"
    //         spotlightColor="rgba(0, 229, 255, 0.2)"
    //       >
    //         <p className="">Event 1</p>
    //         <p className="text-sm">fbefejf</p>
    //       </SpotlightCard>
    //     </div>

    //     <div className="w-full sm:w-[48%] lg:w-[30%] flex justify-center">
    //       <SpotlightCard
    //         className="custom-spotlight-card w-full bg-white/20 min-h-[200px] flex flex-col justify-between"
    //         spotlightColor="rgba(0, 229, 255, 0.2)"
    //       >
    //         <p>Event 2</p>
    //       </SpotlightCard>
    //     </div>

    //     <div className="w-full sm:w-[48%] lg:w-[30%] flex justify-center">
    //       <SpotlightCard
    //         className="custom-spotlight-card w-full bg-white/20 min-h-[200px] flex flex-col justify-between"
    //         spotlightColor="rgba(0, 229, 255, 0.2)"
    //       >
    //         <p>Event 3</p>
    //       </SpotlightCard>
    //     </div>

    //     <div className="w-full sm:w-[48%] lg:w-[30%] flex justify-center">
    //       <SpotlightCard
    //         className="custom-spotlight-card w-full bg-white/20 min-h-[200px] flex flex-col justify-between"
    //         spotlightColor="rgba(0, 229, 255, 0.2)"
    //       >
    //         <p>Event 4</p>
    //       </SpotlightCard>
    //     </div>

    //     <div className="w-full sm:w-[48%] lg:w-[30%] flex justify-center">
    //       <SpotlightCard
    //         className="custom-spotlight-card w-full bg-white/20 min-h-[200px] flex flex-col justify-between"
    //         spotlightColor="rgba(0, 229, 255, 0.2)"
    //       >
    //         <p>Event 5</p>
    //       </SpotlightCard>
    //     </div>
    //   </div>
    // </div>
//   );
// };

export default Tech;
