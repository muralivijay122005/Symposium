import SpotlightCard from "../components/SpotlightCard";
import { VscTools } from "react-icons/vsc";

const Workshop = ({ refProp }) => {
  return (
    <section
      ref={refProp}
      className="px-14 sm:px-10 md:px-20 lg:px-32 font-funnel text-white"
    >
      <h2 className="text-2xl text-center pt-10 mb-10">WORKSHOP</h2>
      <hr className="border-0.5 border-white/20 w-full mb-10" />

      <SpotlightCard
        className="w-full transition-transform hover:scale-[1.02]"
        spotlightColor="rgba(0, 150, 255, 0.2)"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Image */}
          <img
            src="/images/workshop.jpg"
            alt="Workshop"
            className="w-full md:w-1/3 h-52 md:h-60 object-cover rounded-xl border border-white/20"
          />

          {/* Right Content */}
          <div className="w-full md:w-2/3 flex flex-col gap-4">
            {/* Icon + Title */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="bg-white/20 flex items-center justify-center w-12 h-12 min-w-12 min-h-12 rounded-full overflow-hidden shrink-0">
                <VscTools className="text-white text-xl sm:text-2xl" />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                CyberSec Hands-On Workshop
              </h3>
            </div>

            {/* Description */}
            <p className="text-white/70 text-base md:text-lg leading-relaxed text-center md:text-left">
              Dive deep into real-world cybersecurity techniques in this
              hands-on workshop led by industry experts. Learn ethical hacking,
              penetration testing, and digital forensics in an interactive
              environment. No fluff, just real skills.
            </p>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
};

export default Workshop;
