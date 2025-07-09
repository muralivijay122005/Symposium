import { useState } from "react";
import EventPopup from "../components/Eventpopup.jsx";
import SpotlightCard from "../components/SpotlightCard.jsx";
import { RxCrosshair2 } from "react-icons/rx";
import {
  LuMusic2,
  LuLock,
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
    format: `Team Size : 2-4 members.\n3 rounds: Reverse BGM, Audio Puzzle, Visual Clues.`,
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
    format: `Team Size:  2-4 members.\n4 Rounds.\nPuzzles, codes, logic-based challenges.`,
    rules: [
      "Use of mobile phones is strictly prohibited during the event.",
      "Listen to coordinators and follow instructions carefully.",
      "Avoid giving away clues to other teams — keep the suspense alive!",
    ],
  },
  {
    title: "Free Fire",
    icon: (
      <img
        src="/Knife_Icon.svg"
        alt="Knife Icon"
        className="w-10 h-10 object-contain"
      />
    ),
    description: "Survive, shoot, and dominate! Join the Free Fire brawl.",
    date: "Aug 22, 2025",
    venue: "GameZone",
    schedule: "10:00 AM - 11:30 AM",
    overview:
      "Drop into Bermuda and face the chaos. Tactical shooting, survival instincts, and perfect coordination will decide your fate.",
    format: `Teams of 4.\nMobile devices only.\nClassic Squad Battle.`,
    rules: [
      "Emulators strictly prohibited.",
      "Headphones recommended.",
      "Match rules and lobby details will be shared on spot."
    ],
  },
  {
    title: "BGMI",
    icon: (
      <RxCrosshair2 className="text-emerald-400 text-4xl"/>
    ),
    description: "Pan fights or snipes? Show your skill in this BGMI face-off.",
    date: "Aug 22, 2025",
    venue: "GameZone",
    schedule: "11:45 AM - 01:15 PM",
    overview:
      "Bring your squad and jump into Erangel! A battle for the Chicken Dinner with strategy, precision, and plenty of pans.",
    format: `Teams of 4.\nTPP mode.\nMultiple rounds, cumulative scoring.`,
    rules: [
      "Only mobile devices allowed.",
      "Use of hacks or scripts will lead to disqualification.",
      "All decisions by moderators are final."
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
              spotlightColor="rgba(80, 200, 130, 0.4)"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="flex flex-col items-center gap-4">
                <div>{event.icon}</div>
                <div className="text-center font-funnel">
                  <h3 className="text-md">{event.title}</h3>
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
