import SpotlightCard from "../components/SpotlightCard";
import { VscTools } from "react-icons/vsc";

const Workshop = ({ refProp }) => {
  return (
    <section
      ref={refProp}
      className="px-14 sm:px-10 md:px-20 lg:px-32 font-funnel text-white"
    >
      <h2 className="text-lg text-center pt-10 mb-10">WORKSHOP</h2>
      <hr className="border-0.5 border-white/20 w-full mb-10" />

      <SpotlightCard
        className="w-full transition-transform hover:scale-[1.02]"
        spotlightColor="rgba(0, 150, 255, 0.2)"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Image */}
          <img
            src="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-122642,resizemode-75,msid-105921572/news/india/india-usa-taiwan-launch-workshop-on-cyber-security-ahead-of-polls-in-3countries-in-2024.jpg"
            alt="Workshop"
            className="w-full md:w-1/3 h-52 md:h-60 object-cover rounded-xl border border-white/20"
          />

          {/* Right Content */}
          <div className="w-full md:w-2/3 flex flex-col gap-4">
            {/* Icon + Title */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <h3 className="text-xl sm:text-xl flex flex-row items-center gap-3 font-semibold text-white">
                <div className="bg-white/20 flex items-center justify-center w-12 min-w-[3rem] aspect-square rounded-full shrink-0">
                  <VscTools className="text-white text-xl sm:text-2xl" />
                </div>
                The Art of Hacking
              </h3>
            </div>

            {/* Conducted By */}
            <p className="text-white/60 text-left text-md">
              Conducted by: <span className="text-white">Sriram Kesavan, Founder & Director of Security at TG Cyberlabs</span>
            </p>


            {/* Description */}
            <p className="text-white/70 text-left text-md leading-relaxed">
              The Art of Hacking is a hands-on workshop that dives deep into the mindset,
              techniques, and real-world tactics used by ethical hackers. From reconnaissance
              to exploitation, this session unveils how digital systems are probed, bypassed,
              and broken while emphasizing responsible hacking practices to secure them.
              Led by industry expert Sriram Kesavan, this workshop is tailored for cybersecurity
              enthusiasts eager to learn how hackers really think and act.
            </p>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
};

export default Workshop;
