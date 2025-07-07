import { useState } from "react";
import EventPopup from "../components/Eventpopup.jsx";
import SpotlightCard from "../components/SpotlightCard.jsx";
import {
  LuSmile,
  LuGamepad2,
  LuUsers,
  LuTheater,
  LuTrophy,
} from "react-icons/lu";

const events = [
  {
    title: "LOLathon",
    icon: <LuSmile className="text-emerald-400 text-4xl stroke-1" />,
    description: "Stand-up, mimicry, roast and chaos — all for laughs!",
    date: "Aug 16, 2025",
    venue: "Auditorium",
    schedule: "5:00 PM - 6:30 PM",
    overview:
      "Show off your humor in this live stand-up comedy face-off. Make the crowd roar.",
    format: `Solo performance.\n5 minutes per participant.\nJudged on originality, delivery, crowd response.`,
    rules: [
      "No vulgarity or offensive jokes.",
      "Only original content allowed.",
      "Going overtime deducts points.",
    ],
  },
  {
    title: "Button Bashers",
    icon: <LuGamepad2 className="text-emerald-400 text-4xl stroke-1" />,
    description: "FIFA, Tekken, NFS and pure button-mashing glory.",
    date: "Aug 17, 2025",
    venue: "Games Lounge",
    schedule: "10:00 AM - 1:00 PM",
    overview:
      "Enter the gaming arena. Classic console fights with knockout rounds.",
    format: `1v1 battles.\nKnockout format.\nWinners progress to final.`,
    rules: [
      "Use provided controllers only.",
      "No pausing mid-game.",
      "Abuse leads to disqualification.",
    ],
  },
  {
    title: "Clash of Crews",
    icon: <LuUsers className="text-emerald-400 text-4xl stroke-1" />,
    description: "Group games that need coordination, not code.",
    date: "Aug 18, 2025",
    venue: "Main Grounds",
    schedule: "3:00 PM - 6:00 PM",
    overview: "Team relay games, obstacle races, and lots of outdoor fun.",
    format: `Teams of 4–6.\nMultiple rounds.\nPoints per challenge.`,
    rules: [
      "Respect other teams.",
      "Cheating = elimination.",
      "Follow event volunteers' instructions.",
    ],
  },
  {
    title: "Drama Dhamaka",
    icon: <LuTheater className="text-emerald-400 text-4xl stroke-1" />,
    description: "Stage plays, monologues, and over-the-top acting.",
    date: "Aug 19, 2025",
    venue: "Open Air Theatre",
    schedule: "6:00 PM - 8:00 PM",
    overview:
      "Bring your dramatic flair to life on stage. Costumes allowed, overacting encouraged.",
    format: `Solo or groups.\n5–10 minute acts.\nJudged by jury.`,
    rules: [
      "No political or sensitive content.",
      "Teams must handle their own props.",
      "Stage time must be respected.",
    ],
  },
  {
    title: "Quiz Quest",
    icon: <LuTrophy className="text-emerald-400 text-4xl stroke-1" />,
    description: "Trivia marathon for the quick and curious minds.",
    date: "Aug 20, 2025",
    venue: "Seminar Hall 1",
    schedule: "2:00 PM - 4:00 PM",
    overview:
      "A general knowledge quiz — with buzzer rounds, rapid fire, and brainy banter.",
    format: `Teams of 2.\n3 rounds: MCQs, Picture Round, Rapid Fire.`,
    rules: [
      "No mobile phones.",
      "Only one answer per team.",
      "Quizmaster's decision is final.",
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
                  <p className="text-sm text-white/60">{event.date}</p>
                  <p className="text-sm text-white/60">{event.venue}</p>
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
