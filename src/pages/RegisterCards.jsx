import React from "react";
import SpotlightCard from "../components/SpotlightCard"; // make sure this exists
import { FaRegCalendarCheck } from "react-icons/fa";

const RegisterCards = () => {
  const events = [
    {
      name: "Capture the Flag",
      description: "Show your skills in cybersecurity and logic. Solve challenges. Get glory.",
    },
    {
      name: "Workshop",
      description: "Level up with our hands-on tech sessions and expert-led knowledge drops.",
    },
    {
      name: "Tech & Non-Tech Events",
      description: "Whether you're coding or meme-making — we got you covered.",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-black text-white font-funnel flex flex-col items-center justify-center px-6 py-16">
      <h2 className="text-xl md:text-2xl mb-12 text-center text-white/90">
        Register for Your Event
      </h2>

      <div className="grid gap-10 w-full max-w-4xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <SpotlightCard
            key={index}
            spotlightColor="rgba(0, 150, 255, 0.3)"
            className="custom-spotlight-card p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
    <FaRegCalendarCheck size={20} className="text-white/80" />
  </div>
  <h3 className="text-white text-xl font-semibold">{event.name}</h3>
</div>

              <p className="text-white/60 text-sm leading-6">
                {event.description}
              </p>
            </div>

            <button
              className="mt-6 self-end px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 text-sm"
              onClick={() => alert(`Registering for: ${event.name}`)}
            >
              Register
            </button>
          </SpotlightCard>

          
        ))}
      </div>
      <p className="text-md">Note : </p>
    </section>
  );
};

export default RegisterCards;
