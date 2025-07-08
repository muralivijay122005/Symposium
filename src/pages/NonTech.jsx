import { useState } from "react";
import EventPopup from "../components/Eventpopup.jsx";
import SpotlightCard from "../components/SpotlightCard.jsx";
import {
  LuSmile,
  LuGamepad2,
  LuUsers,
  LuTheater,
  LuTrophy,
  LuMusic2,
  LuFileCode2,
  LuLock
} from "react-icons/lu";

const events = [
  {
  title: "Tune Tracker",
  icon: <LuMusic2 className="text-emerald-400 text-4xl stroke-1" />,
  description: "A music-themed challenge testing memory, coordination, and speed.",
  date: "Aug 21, 2025",
  venue: "AV Room",
  schedule: "10:00 AM - 11:30 AM",
  overview:
    "A thrilling music-based non-tech event with 3 engaging rounds: reversed BGMs, audio puzzles, and visual cues.",
  format: `Team of 4 members.\n3 rounds: Reverse BGM, Audio Puzzle, Visual Clues.`,
  rules: [
    "Mobile phone use is strictly prohibited.",
    "Report 10 minutes early.",
    "Judges’ decisions are final."
  ],
},
{
  title: "Escape Room",
  icon: <LuLock className="text-emerald-400 text-4xl stroke-1" />,
  description: "Crack codes and escape the room in this high-stakes, puzzle-solving thriller.",
  date: "Aug 21, 2025",
  venue: "CSE Lab 2",
  schedule: "11:30 AM - 01:00 PM",
  overview:
    "Escape Room is a thrilling event where teams solve puzzles and crack codes to break out of a themed setup within a limited time. It blends storytelling, logic, and teamwork across 4 engaging rounds.",
  format: `Team of 4 members.\n4 Rounds.\nPuzzles, codes, logic-based challenges.`,
  rules: [
    "Use of mobile phones is strictly prohibited during the event.",
    "Listen to coordinators and follow instructions carefully.",
    "Avoid giving away clues to other teams — keep the suspense alive!",
  ],
}
,
{
  title: "E-Sports",
  icon: <LuGamepad2 className="text-emerald-400 text-4xl stroke-1" />,
  description: "Competitive gaming showdown — Stay tuned!",
  date: "Aug 22, 2025",
  venue: "GameZone",
  schedule: "11:30 AM - 01:00 PM",
  overview: "Get ready for the ultimate gaming battle! Event details will be revealed soon.",
  format: `Details coming soon.`,
  rules: [
    "Bring your A-game!",
    "Follow official game rules.",
    "More info will be shared closer to the event."
  ],
},
];

const NonTech = ({ refProp }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section ref={refProp} className="px-14 md:px-20 lg:px-32 text-white pb-20">
      <p className="text-md font-funnel text-center pt-20 pb-10">
        NON-TECHNICAL EVENTS
      </p>
      <hr className="border-0.5 border-white/20 w-full" />

      <div className="flex flex-wrap justify-center gap-y-8 sm:gap-y-10 mt-10">
        {events.map((event, index) => (
          <div key={index} className="w-[240px]">
            <SpotlightCard
              className="w-50 cursor-pointer transition-transform hover:scale-[1.03]"
              spotlightColor="rgba(80, 200, 130, 0.3)"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="flex flex-col items-center gap-4">
                <div>{event.icon}</div>
                <div className="text-center font-funnel">
                  <h3 className="text-md">{event.title}</h3>
                  {/* <p className="text-sm text-white/60">{event.date}</p> */}
                  {/* <p className="text-sm text-white/60">{event.venue}</p> */}
                </div>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>

      <EventPopup
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
};

export default NonTech;
