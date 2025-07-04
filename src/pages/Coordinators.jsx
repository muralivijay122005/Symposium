import SpotlightCard from '../components/SpotlightCard';
import { FaRegUser } from "react-icons/fa";

const coordinators = {
  staff: [
    {
      name: "Dr. Priya Sharma",
      phone: "+91 98765 43210",
      email: "priya.sharma@college.edu",
      image: "/images/staff1.jpg"
    },
    {
      name: "Mr. Rajesh Kumar",
      phone: "+91 87654 32109",
      email: "rajesh.kumar@college.edu",
      image: "/images/staff2.jpg"
    }
  ],
  students: [
    {
      name: "Aarav Singh",
      phone: "+91 91234 56789",
      email: "aarav.s@college.edu",
      image: "/images/student1.jpg"
    },
    {
      name: "Meera Iyer",
      phone: "+91 93456 78901",
      email: "meera.i@college.edu",
      image: "/images/student2.jpg"
    },
    {
      name: "Rohan Das",
      phone: "+91 90012 34567",
      email: "rohan.d@college.edu",
      image: "/images/student3.jpg"
    },
    {
      name: "Sneha Patel",
      phone: "+91 99887 65432",
      email: "sneha.p@college.edu",
      image: "/images/student4.jpg"
    }
  ]
};

const Footer = ({ refProp }) => {
  return (
    <section ref={refProp} className="min-h-screen px-40 text-white">
      <h2 className="text-2xl font-funnel text-center pb-10">COORDINATORS</h2>
      <hr className='border-0.5 border-white/20 w-full mb-10' />

      {/* Staff Coordinators */}
      <div className="space-y-6 mb-16">
        <h3 className="text-2xl font-funnel pb-4">Staff Coordinators</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {coordinators.staff.map((person, index) => (
            <SpotlightCard
              key={index}
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="flex flex-col md:flex-row font-funnel items-center gap-20">
                <img src={person.image} alt={person.name} className="w-30 h-30 rounded-full border border-blue-800 object-cover shadow-md" />
                <div className="text-left text-xl">
                  <h3 className="">{person.name}</h3>
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
        <h3 className="text-2xl pb-4">Student Coordinators</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {coordinators.students.map((person, index) => (
            <SpotlightCard
              key={index}
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="text-left text-xl flex flex-row items-center gap-6">
                  <div className='rounded-full w-20 h-20 bg-white/10 items-center flex justify-center'><FaRegUser size={25}/></div>
                  <div>
                    <h3 className="">{person.name}</h3>
                    <p className="opacity-80">{person.phone}</p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
