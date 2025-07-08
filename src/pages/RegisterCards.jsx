import React from "react";
import SpotlightCard from "../components/SpotlightCard";
import { FaRegCalendarCheck } from "react-icons/fa";
import Aurora from "../components/Aurora";

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
    <div className="relative min-h-screen w-full bg-black text-white font-funnel overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={["#3A29FF", "#00FFFF"]}
          blend={20}
          amplitude={2}
          speed={0.7}
        />
      </div>

      {/* Optional Gradient Fade */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />

      {/* Foreground Content */}
      <section className="relative z-20 flex flex-col items-center justify-center px-6 py-16 min-h-screen">
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
                  <h3 className="text-white text-xl font-semibold">
                    {event.name}
                  </h3>
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

        {/* Note Section */}
        <div className="text-white/80 text-sm mt-12 max-w-2xl space-y-4 leading-relaxed">
          <p className="text-white text-base font-semibold text-left mb-2">Note:</p>
          <ul className="list-decimal list-inside space-y-2 pl-2">
            <li>
              Participants can register for only <strong>one</strong> of the three core technical events if they choose to participate in the <strong>Capture the Flag (CTF)</strong>.
            </li>
            <li>
              If not attending the CTF, participants may register for <strong>any two</strong> of the remaining technical events (subject to schedule availability).
            </li>
            <li>
              Registration must be done individually. For events that allow team participation, teams can be formed <strong>at the venue</strong> on the day of the event.
            </li>
            <li>
              Participants who register for the <strong>Workshop</strong> will not be eligible to participate in any other event, due to scheduling conflicts.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RegisterCards;
