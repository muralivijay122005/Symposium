import ScrollReveal from "./../components/ScrollReveal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ScrollFloat from "../components/ScrollFloat";
const About = ({ refProp }) => {
  return (

    <section ref={refProp}>
      <div className='flex flex-row p-20'>
        <div className="font-funnel text-blue-50 text-2xl w-full flex flex-col items-center overflow-hidden ">
          <p className="pb-10">NOCTIVUS UNVEILED</p>
          
          <hr className='border-0.5 border-white/20 w-full' />
          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={true}
            blurStrength={15}
            baseRotation={1.5}
            duration={1.5}
            easing="ease-out"

          >
            Noctivus is the annual national-level symposium organized by the Department of Computer Science and Engineering (Cyber Security) at Velammal Engineering College. This event serves as a dynamic platform for students to showcase their skills, explore emerging technologies, and engage in meaningful discussions around the rapidly evolving field of cyber security. With a mission to inspire innovation and foster technical excellence, Noctivus features a diverse lineup of events including technical competitions, non-technical challenges, and hands-on workshops conducted by industry professionals. Whether you’re a tech enthusiast, a creative thinker, or someone eager to dive into the world of cyber defense, Noctivus offers something for everyone. The symposium not only encourages academic and professional growth but also builds a community of learners and leaders passionate about digital security. Join us at Noctivus to connect, compete, and contribute to shaping a smarter and safer digital future.
          </ScrollReveal>

        </div>
      </div>
    </section>

  )
}


export default About;
