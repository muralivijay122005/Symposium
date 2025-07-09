import React from 'react';

const Sponsor = () => {
  return (
    <div className="flex flex-col items-center px-14 md:px-20 lg:px-32 py-16 w-full">
      <div className="w-full font-funnel text-blue-50 text-2xl flex flex-col items-center overflow-hidden gap-10">
        <p className="text-center text-lg">SPONSORS</p>
        <hr className="border-0.5 border-white/20 w-full" />

        <img
          src="https://via.placeholder.com/600x150?text=Sponsor+Logo+Coming+Soon"
          alt="Sponsor Placeholder"
          className="h-40 w-full object-contain bg-white/10 rounded-xl"
        />
      </div>
    </div>
  );
};

export default Sponsor;
