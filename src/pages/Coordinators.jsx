import SpotlightCard from "../components/SpotlightCard";
import { FaRegUser } from "react-icons/fa";

const coordinators = {
  staff: [
    {
      name: "Dr. Priya Sharma",
      phone: "+91 98765 43210",
      email: "priya.sharma@college.edu",
      image: "/images/staff1.jpg",
    },
    {
      name: "Mr. Rajesh Kumar",
      phone: "+91 87654 32109",
      email: "rajesh.kumar@college.edu",
      image: "/images/staff2.jpg",
    },
  ],
  students: [
    {
      name: "Aarav Singh",
      phone: "+91 91234 56789",
      email: "aarav.s@college.edu",
      image: "/images/student1.jpg",
    },
    {
      name: "Meera Iyer",
      phone: "+91 93456 78901",
      email: "meera.i@college.edu",
      image: "/images/student2.jpg",
    },
    {
      name: "Rohan Das",
      phone: "+91 90012 34567",
      email: "rohan.d@college.edu",
      image: "/images/student3.jpg",
    },
    {
      name: "Sneha Patel",
      phone: "+91 99887 65432",
      email: "sneha.p@college.edu",
      image: "/images/student4.jpg",
    },
  ],
};

const Coordinators = ({ refProp }) => {
  return (
    <section
      ref={refProp}
      className="min-h-screen px-14 sm:px-10 md:px-16 lg:px-40 xl:px-40 text-white"
    >
      <h2 className="text-lg font-funnel text-center py-10">COORDINATORS</h2>
      <hr className="border-0.5 border-white/20 w-full mb-10" />

      {/* Staff Coordinators */}
      <div className="space-y-6 mb-16">
        <h3 className="text-lg font-funnel text-white/50 pb-2">
          Staff Coordinators
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {coordinators.staff.map((person, index) => (
            <SpotlightCard
              key={index}
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 150, 255, 0.3)"
            >
              <div className="flex flex-col sm:flex-row font-funnel items-center gap-8 sm:gap-12">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-white object-cover"
                />
                <div className="text-center sm:text-left text-md sm:text-md">
                  <h3>{person.name}</h3>
                  <p className="opacity-80">{person.phone}</p>
                  <p className="opacity-80">{person.email}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Student Coordinators */}
      <div className="space-y-6 font-funnel">
        <h3 className="text-lg text-white/50 pb-2">Student Coordinators</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {coordinators.students.map((person, index) => (
            <SpotlightCard
              key={index}
              className="custom-spotlight-card"
              spotlightColor="rgba(80, 200, 130, 0.3)"
            >
              <div className="flex items-center gap-6">
                <div className="rounded-full w-16 h-16 bg-white/10 flex items-center justify-center">
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
    </section>
  );
};

export default Coordinators;
