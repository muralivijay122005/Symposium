import SpotlightCard from "../components/SpotlightCard";
import { FaRegUser } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaDiscord, FaXTwitter } from "react-icons/fa6";

const coordinators = {
  staff: [
    {
      name: "Ms. Akshaya Dharani K",
      phone: "+91 98849 47054",
      designation: "Asst. Professor, Dept of CSE (CS)",
    },
    {
      name: "Mrs. Parveenbanu M",
      phone: "+91 72004 67850",
      designation: "Asst. Professor, Dept of CSE (CS)",
    },
  ],
  students: [
    { name: "Abilash B", phone: "+91 72004 67850" },
    { name: "Kartheek Kareti", phone: "+91 93456 78901" },
    { name: "Roshath S", phone: "+91 81228 65936" },
    { name: "Adarsh A G", phone: "+91 98849 47054" },
    { name: "Balakumaran", phone: "+91 76958 27158" },
    { name: "Uppala Vishnu Varthan", phone: "+91 99083 80546" },
  ],
};

const Coordinators = ({ refProp }) => {
  const tech = coordinators.students.slice(0, 2);
  const nonTech = coordinators.students.slice(2, 4);
  const registration = coordinators.students.slice(4, 6);

  return (
    <section ref={refProp} className="min-h-screen px-14 md:px-20 lg:px-32 text-white">
      <h2 className="text-lg font-funnel text-center py-10">COORDINATORS</h2>
      <hr className="border-0.5 border-white/20 w-full mb-10" />

      {/* Staff Coordinators */}
      <div className="space-y-6 mb-16 font-funnel">
        <h3 className="text-lg text-white/50 pb-2">Staff Coordinators</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {coordinators.staff.map((person, index) => (
            <SpotlightCard
              key={index}
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 150, 255, 0.3)"
            >
              <div className="flex items-center gap-6">
                <div className="rounded-full bg-white/10 flex items-center justify-center w-16 min-w-[4rem] aspect-square shrink-0">
                  <FaRegUser size={24} />
                </div>
                <div className="text-left text-md sm:text-md">
                  <h3 className="text-white">{person.name}</h3>
                  <p className="text-white/60">{person.phone}</p>
                  <p className="text-white/60">{person.designation}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Student Coordinators */}
      <div className="space-y-10 font-funnel">
        <h3 className="text-lg text-white/50 pb-2">Student Coordinators</h3>

        {/* Tech Coordinators */}
        <div className="space-y-4">
          <h4 className="text-md text-white flex justify-center">Tech</h4>
          <div className="grid sm:grid-cols-2 gap-6">
            {tech.map((person, index) => (
              <SpotlightCard
                key={index}
                className="custom-spotlight-card"
                spotlightColor="rgba(80, 200, 130, 0.3)"
              >
                <div className="flex items-center gap-6">
                  <div className="rounded-full bg-white/10 flex items-center justify-center w-16 min-w-[4rem] aspect-square shrink-0">
                    <FaRegUser size={24} />
                  </div>
                  <div className="text-left text-md sm:text-md">
                    <h3 className="text-white">{person.name}</h3>
                    <p className="text-white/60">{person.phone}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Non-Tech Coordinators */}
        <div className="space-y-4">
          <h4 className="text-md text-white flex justify-center">Non-Tech</h4>
          <div className="grid sm:grid-cols-2 gap-6">
            {nonTech.map((person, index) => (
              <SpotlightCard
                key={index}
                className="custom-spotlight-card"
                spotlightColor="rgba(80, 200, 130, 0.3)"
              >
                <div className="flex items-center gap-6">
                  <div className="rounded-full bg-white/10 flex items-center justify-center w-16 min-w-[4rem] aspect-square shrink-0">
                    <FaRegUser size={24} />
                  </div>
                  <div className="text-left text-md sm:text-md">
                    <h3 className="text-white">{person.name}</h3>
                    <p className="text-white/60">{person.phone}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Registration Coordinators */}
        <div className="space-y-4">
          <h4 className="text-md text-white flex justify-center">Registration</h4>
          <div className="grid sm:grid-cols-2 gap-6">
            {registration.map((person, index) => (
              <SpotlightCard
                key={index}
                className="custom-spotlight-card"
                spotlightColor="rgba(80, 200, 130, 0.3)"
              >
                <div className="flex items-center gap-6">
                  <div className="rounded-full bg-white/10 flex items-center justify-center w-16 min-w-[4rem] aspect-square shrink-0">
                    <FaRegUser size={24} />
                  </div>
                  <div className="text-left text-md sm:text-md">
                    <h3 className="text-white">{person.name}</h3>
                    <p className="text-white/60">{person.phone}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Cards */}
      <div className="space-y-4 mt-16 font-funnel">
        <h4 className="text-md text-white flex justify-center">Social Media</h4>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              name: "Instagram",
              id: "@noctivus_25",
              icon: <FaInstagram size={24} className="text-emerald-400" />,
            },
            {
              name: "LinkedIn",
              id: "Noctivus Symposium",
              icon: <FaLinkedin size={24} className="text-emerald-400" />,
            },
            {
              name: "X (Twitter)",
              id: "@sympo_x",
              icon: <FaXTwitter size={24} className="text-emerald-400" />,
            },
            {
              name: "Discord",
              id: "discord.gg/sympo",
              icon: <FaDiscord size={24} className="text-emerald-400" />,
            },
          ].map((social, index) => (
            <SpotlightCard
              key={index}
              className="custom-spotlight-card"
              spotlightColor="rgba(80, 200, 130, 0.4)"
            >
              <div className="flex items-center gap-6">
                <div className="rounded-full bg-emerald-400/10 flex items-center justify-center w-16 min-w-[4rem] aspect-square shrink-0">
                  {social.icon}
                </div>
                <div className="text-left text-md sm:text-md flex-1 min-w-0">
                  <h3 className="text-white">{social.name}</h3>
                  <p className="text-white/60 truncate max-w-[200px]" title={social.id}>
                    {social.id}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coordinators;
