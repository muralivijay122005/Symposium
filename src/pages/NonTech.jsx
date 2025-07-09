import { useState } from "react";
import EventPopup from "../components/Eventpopup.jsx";
import SpotlightCard from "../components/SpotlightCard.jsx";
import { RxCrosshair2 } from "react-icons/rx";
import { LuMusic2, LuLock } from "react-icons/lu";

const events = [
  {
    title: "Tune Tracker",
    icon: <LuMusic2 className="text-emerald-400 text-4xl stroke-1" />,
    description: "Guess the Beats",
    date: "Aug 21, 2025",
    venue: "AV Room",
    schedule: "10:00 AM - 11:30 AM",
    overview:
      "A thrilling music-based non-tech event with 3 engaging rounds: reversed BGMs, audio puzzles, and visual cues.",
    format: `Team Size: 2–4 members\n3 rounds: Reverse BGM, Audio Puzzle, Visual Clues.`,
    rules: [
      "Mobile phone use is strictly prohibited.",
      "Report 10 minutes early.",
      "Judges’ decisions are final."
    ]
  },
  {
    title: "Escape Room",
    icon: <LuLock className="text-emerald-400 text-4xl stroke-1" />,
    description: "Crack the Code",
    date: "Aug 21, 2025",
    venue: "CSE Lab 2",
    schedule: "11:30 AM - 01:00 PM",
    overview:
      "Escape Room is a thrilling event where teams solve puzzles and crack codes to break out of a themed setup within a limited time. It blends storytelling, logic, and teamwork across 4 engaging rounds.",
    format: `Team Size: 2–4 members\n4 rounds including puzzles, codes, and logic-based challenges.`,
    rules: [
      "Use of mobile phones is strictly prohibited during the event.",
      "Listen to coordinators and follow instructions carefully.",
      "Avoid giving away clues to other teams — keep the suspense alive!"
    ]
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
    description: "Booyah Awaits",
    date: "Aug 22, 2025",
    venue: "GameZone",
    schedule: "10:00 AM - 11:30 AM",
    overview:
      "This Free Fire tournament encourages fair play, teamwork, and a strong competitive spirit. All players must follow the rules and uphold the spirit of the game.",
    format: `Team Size: 4 members\nRound 1: BR Mode – Top 2 teams move to Finals\nFinals follow same rules.`,
    rules: [
      "Each player can represent only one team — violation leads to disqualification.",
      "Teaming with other squads is strictly prohibited.",
      "Teams must join the custom lobby 10 minutes before the match.",
      "Only mobile players allowed — no PC or emulator players.",
      "Player level must be 40+ in-game.",
      "All required maps must be downloaded in advance.",
      "No emotes allowed during matches.",
      "Gun attributes will be off to ensure fairness.",
      "Abusive/spam chat leads to disqualification.",
      "Matches won't be paused for individual issues.",
      "No use of hacks or panels — results in instant disqualification.",
      "Rematch only if all teams face network issues."
    ]
  },
  {
    title: "BGMI",
    icon: <RxCrosshair2 className="text-emerald-400 text-4xl" />,
    description: "Erangel Echoes",
    date: "Aug 22, 2025",
    venue: "GameZone",
    schedule: "11:45 AM - 01:15 PM",
    overview:
      "A fast-paced squad tournament promoting fair play, teamwork, and competitive spirit. Play fair, fight hard, and become the Tournament Champion!",
    format: `Team Size: 4 players (1 optional substitute allowed)\nMode: Classic TPP - Squad\nMap: Erangel` ,
    rules: [
      "Only mobile devices allowed — no emulators.",
      "Use of hacks, cheats, or third-party tools = disqualification.",
      "Join the room 10 minutes before the match starts.",
      "Only the top 4 teams advance (if single room).",
      "If multiple rooms, top 2 from each room advance.",
      "Top 4 teams play knockout-style TDM rounds.",
      "Final 2 teams face off in one last TDM to determine the champion."
    ]
  }
];

const NonTech = ({ refProp }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section ref={refProp} className="px-14 md:px-20 lg:px-32 text-white pb-20">
      <p className="text-md font-funnel text-center pt-20 pb-10">NON-TECHNICAL EVENTS</p>
      <hr className="border-0.5 border-white/20 w-full" />

      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-y-10 mt-10">
        {events.map((event, index) => (
          <div key={index} className="w-[200px] h-[180px] font-funnel">
            <SpotlightCard
              className="w-full h-full cursor-pointer transition-transform hover:scale-[1.03]"
              spotlightColor="rgba(80, 200, 130, 0.4)"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="flex flex-col items-center justify-center text-center gap-1 h-full px-1.5 py-2">
                <div>{event.icon}</div>
                <h3 className="text-md">{event.title}</h3>
                <p className="text-sm text-white/70">{event.description}</p>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>

      <EventPopup event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  );
};

export default NonTech;
