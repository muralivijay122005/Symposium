import { useState } from "react";
import EventPopup from "../components/Eventpopup.jsx"; // adjust path as needed

// Make sure your events array is imported or defined here
// adjust path as needed
const events = [
  {
    title: "Null Core",
    description: "A deep dive into low-level programming and system internals.",
    image: "/images/events/nullcore.jpg",
    date: "Aug 10, 2025",
    venue: "CSE Lab 1",
    schedule: "Round 1: 11:00 AM - 12:00 PM\nRound 2: 1:30 PM - 2:30 PM",
    overview:
      "A thrilling team-based low-level programming contest that tests understanding of memory, system calls, and coordination under pressure.",
    format:
      "Teams of 3 participants.\nRound 1 (Memory Maze - 30 min): Each participant writes low-level logic individually.\nRound 2 (Syscall Relay - 45 min): Participants rotate solving a chain of system-level problems.",
    rules: [
      "Only one participant codes at a time.",
      "No backtracking to previous solutions.",
      "Use of external tools or internet is prohibited.",
      "Code must be efficient and properly commented.",
      "Only C/C++ is allowed.",
      "Participants must switch roles as per instruction.",
    ],
  },
  {
    title: "GlitchGround",
    description:
      "Hack the glitches and master the challenges in this hacking event.",
    image: "/images/events/glitchground.jpg",
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
    description: "Music meets code – build, bend, and break audio with tech.",
    image: "/images/events/beatoverflow.jpg",
    date: "Aug 12, 2025",
    venue: "Audio Lab - Block C",
    schedule: "Round 1: 11:00 AM - 12:00 PM\nRound 2: 2:00 PM - 3:30 PM",
    overview:
      "Participants write creative code to manipulate audio, design effects, and compose procedural music.",
    format:
      "Individual or pair participation.\nRound 1: Code a functional audio tool.\nRound 2: Remix challenge using given audio samples.",
    rules: [
      "Only JS/Python with p5.js, Web Audio API or PyDub allowed.",
      "Use of pre-recorded loops not permitted unless specified.",
      "Audio must be generated or manipulated in real time.",
      "Originality is key — no copied compositions.",
    ],
  },
  {
    title: "Beyond Screen",
    description: "Augmented Reality, VR & immersive tech demos and contests.",
    image: "/images/events/beyondscreen.jpg",
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
    description: "Research meets reality – convert ideas into working tech.",
    image: "/images/events/papertopixel.jpg",
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

  const handleClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => setSelectedEvent(null);

  return (
    <section ref={refProp} className="min-h-screen p-10 text-white">
      
      <p className="text-3xl font-funnel text-center pb-10">TECHNICAL EVENT</p>
      <hr className='border-0.5 border-white/20 w-full' />
      <div className="flex flex-wrap justify-center gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="w-[320px] cursor-pointer bg-[#26273a] rounded-xl p-5 hover:scale-[1.02] transition-transform shadow-lg"
            onClick={() => handleClick(event)}
          >
            <div className="flex items-center gap-5">
              <img
                src={event.image}
                alt={event.title}
                className="w-16 h-16 border border-yellow-600 object-cover rounded-lg"
              />
              <div className="text-left text-sm">
                <h3 className="text-base font-semibold">{event.title}</h3>
                <p className="text-[12px] text-gray-400">{event.date}</p>
                <p className="text-[12px] text-gray-400">{event.venue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Event popup modal */}
      <EventPopup event={selectedEvent} onClose={closeModal} />
    </section>
  );
};

export default Tech;