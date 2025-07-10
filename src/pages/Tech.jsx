import { useState } from "react";
import EventPopup from "../components/Eventpopup.jsx";
import SpotlightCard from "../components/SpotlightCard.jsx";
import { HiOutlineFlag } from "react-icons/hi2";
import { LuBug, LuFileCode2 } from "react-icons/lu";
import { PiPalette } from "react-icons/pi";
import { VscCode } from "react-icons/vsc";

const events = [
  {
    title: "Null Core",
    icon: <HiOutlineFlag className="text-blue-400 text-4xl" />,
    description: "Capture the Flag",
    date: "Aug 10, 2025",
    venue: "CSE Lab 1",
    schedule: "10:00 AM - 1:00 PM",
    overview:
      "Null Core, a Jeopardy-style Capture The Flag (CTF) competition where participants solve a series of challenges designed to test their technical skills, creativity, and problem-solving abilities.",
    format: "Team Size: 1–3 members",
    rules: [
      "All captured flags must follow the format: NOCT{Y0ur_Fl@g_!s_herE}",
      "The flag is case sensitive."
    ],
    prohibited: [
      "No DDoS / DoS Attacks",
      "No Brute Force",
      "No Flag Sharing",
      "No Inter-Team Collaboration",
      "No Infrastructure Tampering"
    ]
  },
  {
    title: "GlitchGround",
    icon: <LuBug className="text-blue-400 text-4xl stroke-1" />,
    description: "Bug Bounty",
    date: "Aug 11, 2025",
    venue: "Cyber Cell - Block B",
    schedule: "10:00 AM - 11:30 AM",
    overview:
      "GlitchGround is a bug bounty event that simulates a real-world vulnerability disclosure program. The objective is to identify and responsibly report security vulnerabilities with clear, structured, and well-documented submissions.",
    format: "Team Size: Solo",
    reporting: [
      "Each vulnerability must be submitted with a clear title and description.",
      "Include screenshots or proof and steps to reproduce.",
      "Use the official bug report form/template.",
      "Only the first valid report of a bug will be accepted (no duplicates)."
    ],
    rules: [
      "Teaming or sharing findings between participants is not allowed.",
      "Reports go through triage for validation.",
      "Submit your bug as soon as you confirm it."
    ],
    prohibited: [
      "No Automated Scanning",
      "No DDoS / Brute Force"
    ]
  },
  {
    title: "Beat Overflow",
    icon: <VscCode className="text-blue-400 text-4xl" />,
    description: "Vibe Coding",
    date: "Aug 12, 2025",
    venue: "Audio Lab - Block C",
    schedule: "10:00 AM - 11:30 AM",
    overview:
      "Beat Overflow is an AI coding event where teams rapidly build innovative app-based solutions using any tech stack or AI tools. Participants tackle a given problem with creativity, logic, and real-world impact.",
    format:
      "Team Size: 2 members \nOn-Spot Topic revealed at event start",
    submissionGuidelines: [
      " Each team must submit a folder named `/teamname/` with:",
      " Code.ext (html, js, py, etc.)",
      " Prompt_log.txt or screenshot",
      " Readme.md (prompt used + how the app works)"
    ],
    rules: [
      "Participants must build a mobile app using any tech stack.",
      "Projects must be created during the event only.",
      "Submission must be done before the end time.",
      "No use of existing GitHub repositories.",
      "No idea sharing.",
      "No pre-written projects.",
      "The judges’ decision is final and binding.",
    ]
  },
  {
    title: "Beyond Screen",
    icon: <PiPalette className="text-blue-400 text-4xl" />,
    description: "UI/UX",
    date: "Aug 13, 2025",
    venue: "XR Studio - Block A",
    schedule: "11:30 AM - 1:00 PM",
    overview:
      "Beyond Screen is a UI/UX design event where participants craft original, user-friendly digital interfaces under time constraints, focusing on creativity and usability.",
    format: "Team Size: Solo\nOn-Spot Topic revealed during event",
    rules: [
      "Final submission must include a clear user flow and short explanation of the design thinking and decisions.",
      "All work must be created during the event period only.",
      "Each member must stick to the time allotted and submit within the deadline.",
      "Decision of the judges will be final and binding."
    ],
    prohibited: [
      "No Pre-existing Template is Used",
      "No Inter-Team Collaboration"
    ]
  },
  {
    title: "Paper To Pixel",
    icon: <LuFileCode2 className="text-blue-400 text-4xl stroke-1" />,
    description: "Paper Presentation",
    date: "Aug 14, 2025",
    venue: "Seminar Hall 2",
    schedule: "10:00 AM - 11:30 AM",
    overview:
      "Paper to Pixel is a technical paper presentation event where participants turn their research into impactful visuals, showcasing critical thinking, presentation skills, and domain knowledge.",
    format:
      "Team Size: 1 to 2 members\nTopic choices include:\n- AI & Cybersecurity Fusion\n- IoT & Embedded Security\n- GenAI Security & Prompt Injection\n- Cybercrime & Forensics\n- Web & App Vulnerability Research\n- Nation-State Cyber Warfare",
    submissionGuidelines: [
      "Use of the official PPT template is mandatory.",
      "Presentations should follow a logical flow and be clear and concise.",
      "Each team gets 3 minutes for the presentation + 2 minutes Q&A by judges."
    ],
    rules: [
      "Only one project per team/individual.",
      "Code demos must be functional and owned by the presenter.",
      "Professional behaviour and academic integrity are expected.",
      "The decision of the judges is final and binding."
    ],
    prohibited: ["Plagiarism will result in immediate disqualification."]
  }
];

const Tech = ({ refProp }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section ref={refProp} className="px-10 md:px-20 lg:px-32 text-white pb-20">
      <p className="text-md font-funnel text-center pt-20 pb-10">TECHNICAL EVENTS</p>
      <hr className="border-0.5 border-white/20 w-full" />

      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-y-10 mt-10">
        {events.map((event, index) => (
          <div key={index} className="w-[200px] h-[180px] font-funnel">
            <SpotlightCard
  className="w-full h-full cursor-pointer transition-transform hover:scale-[1.03]"
  spotlightColor="rgba(0, 150, 255, 0.4)"
  onClick={() => setSelectedEvent(event)}
>
  <div className="flex flex-col items-center justify-center text-center gap-1 h-full px-1.5 py-2">
    <div>{event.icon}</div>
    <h3 className="text-md font-funnel">{event.title}</h3>
    <p className="text-sm text-white/70">{event.description}</p>
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
