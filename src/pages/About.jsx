import ScrollReveal from "./../components/ScrollReveal";
import "aos/dist/aos.css";

const About = ({ refProp }) => {
  return (
    <section
      ref={refProp}
      className="px-14 sm:px-10 md:px-16 lg:px-32 xl:px-40 py-10"
    >
      <div className="mx-auto flex flex-col items-center">
        <div className="font-funnel text-blue-50 w-full flex flex-col items-center overflow-hidden">
          <p className="pb-10 text-md">NOCTIVUS UNVEILED</p>

          <hr className="border-0.5 border-white/20 w-full" />

          <p className="text-md pt-10 text-white/50 leading-7 ">
            Noctivus is a national-level symposium by the Department of CSE
            (Cyber Security), Velammal Engineering College. It brings together
            tech enthusiasts to explore innovations, compete in exciting events,
            and dive into the world of cyber security. From hands-on workshops
            to thrilling technical and non-technical contests, Noctivus is where
            ideas ignite and futures begin. Join us to connect, create, and lead
            the digital revolution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
