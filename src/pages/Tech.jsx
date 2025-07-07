import { useState } from "react";
import EventPopup from "../components/Eventpopup.jsx";
import SpotlightCard from "../components/SpotlightCard.jsx";

import { LuCpu, LuBug, LuMusic2, LuFileCode2 } from "react-icons/lu";
import { VscVr } from "react-icons/vsc";

const events = [
 {
  title: "Null Core",
  icon: <LuCpu className="text-blue-400 text-4xl stroke-1" />,
  description: "A Jeopardy-style cybersecurity showdown testing your hacking skills, creativity, and problem-solving grit.",
  date: "Aug 10, 2025",
  venue: "CSE Lab 1",
  schedule: "10:00 AM - 1:00 PM",
  overview:
    "Welcome to Null Core, a Jeopardy-style cybersecurity competition where participants solve a series of challenges designed to test their technical skills, creativity, and problem-solving abilities.",
  format:
    "Team Size: 2–3 members.\nNo late submissions will be accepted.",
  rules: [
    "No DDoS or DoS attacks.",
    "No brute-force attacks.",
    "No flag sharing.",
    "No inter-team collaboration.",
    "No tampering with infrastructure."
  ],
}

,
{
    title: "Glitch Ground",
    icon: <LuBug className="text-blue-400 text-4xl stroke-1" />,
    description:
      "Hack the glitches and master the challenges in this hacking event.",
    date: "Aug 11, 2025",
    venue: "Cyber Cell - Block B",
    schedule: "Round 1: 10:00 AM - 11:30 AM\nRound 2: 12:00 PM - 1:30 PM",
    overview:
      "A cybersecurity CTF-style event where teams hunt vulnerabilities, exploit logic, and solve puzzles.",
    format:
      "Teams of 2-3 participants.\nRound 1 (Find the Flag): Score-based CTF questions.\nRound 2 (Live Hack): Attack a simulated system under time pressure.",
    rules: [
      "Only in-event tools allowed (Burp Suite, nmap, etc.).",
      "No denial-of-service attacks.",
      "Strictly no use of outside help (Google, ChatGPT, forums).",
      "Clear documentation must be submitted with flags.",
      "Plagiarism leads to disqualification.",
    ],
  },
 {
  title: "Beat Overflow",
  icon: <LuMusic2 className="text-blue-400 text-4xl stroke-1" />,
  description: "Fast-paced coding challenge – build creative digital solutions under pressure.",
  date: "Aug 12, 2025",
  venue: "Audio Lab - Block C",
  schedule: "10:00 AM - 11:30 AM",
  overview:
    "Beat Overflow is a time-bound, creative coding event where teams develop innovative web or mobile applications based on a given problem statement. Participants are encouraged to blend logic, design, and AI tools to build impactful solutions.",
  format:
    "Teams of exactly 2 members from the same institution.\nProblem statement is revealed at the start.\nParticipants may build a web or mobile app using any tech stack.\nAI tools can be used as part of the development workflow.",
  rules: [
    "Each team must have exactly 2 members from the same institution.",
    "All code must be written during the event — no pre-written projects.",
    "Use of existing GitHub repositories is prohibited.",
    "AI tools are allowed, but copy-pasting full templates or complete apps is not.",
    "Sharing ideas between teams is not allowed.",
    "Submissions must be completed before the deadline.",
    "The judges’ decision is final.",
    "Any rule violation may result in disqualification."
  ],
},
  {
    title: "Beyond Screen",
    icon: <VscVr className="text-blue-400 text-4xl" />,
    description: "Augmented Reality, VR & immersive tech demos and contests.",
    date: "Aug 13, 2025",
    venue: "XR Studio - Block A",
    schedule: "Round 1: 10:00 AM - 11:30 AM\nRound 2: 1:00 PM - 2:30 PM",
    overview:
      "Push the limits of imagination and tech — create AR/VR concepts or solve challenges in an immersive environment.",
    format:
      "Teams of up to 3 members.\nRound 1: Conceptual presentation (design + tech pitch).\nRound 2: Rapid prototyping with Unity/WebXR tools.",
    rules: [
      "Unity, WebXR, and Blender supported.",
      "No pre-built scenes allowed (assets must be declared).",
      "Each team must present and demo their work.",
      "Internet can be used only for docs/reference (not copy-paste).",
    ],
  },
  {
    title: "Paper To Pixel",
    icon: <LuFileCode2 className="text-blue-400 text-4xl stroke-1" />,
    description: "Research meets reality – convert ideas into working tech.",
    date: "Aug 14, 2025",
    venue: "Seminar Hall 2",
    schedule: "Session: 11:00 AM - 1:00 PM",
    overview:
      "A platform for students to showcase their innovative ideas, research, and prototypes bridging academic concepts with real-world applications.",
    format:
      "Individual or team of 2.\nPresent a paper/project using slides and/or a live demo.\nJudged on clarity, innovation, and practicality.",
    rules: [
      "Plagiarism in content leads to disqualification.",
      "Only one project per team/individual.",
      "Presentations must not exceed 10 minutes.",
      "Code demos should be functional and owned by the presenter.",
      "Q&A session is mandatory after presentation.",
    ],
  },
];

const Tech = ({ refProp }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section ref={refProp} className="px-14 md:px-20 lg:px-32 text-white pb-20">
      <p className="text-lg font-funnel text-center py-10">TECHNICAL EVENTS</p>
      <hr className="border-0.5 border-white/20 w-full" />

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 sm:gap-y-10 mt-10">
        {events.map((event, index) => (
          <div key={index} className="w-[240px]">
            <SpotlightCard
              className="w-full cursor-pointer transition-transform hover:scale-[1.03]"
              spotlightColor="rgba(0, 150, 255, 0.3)"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="flex flex-col items-center gap-4 p-4">
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

export default Tech;
