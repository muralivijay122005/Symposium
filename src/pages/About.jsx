import ScrollReveal from "./../components/ScrollReveal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const AnimatedText = ({ text }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const letters = text.split('');

  return (
    <h1 className="text-4xl font-bold text-white flex flex-wrap justify-center">
      {letters
        .map((char, index) => ({
          char,
          delay: (letters.length - index - 1) * 60, // reverse delay
        }))
        .map(({ char, delay }, i) => (
          <span
            key={i}
            data-aos="fade-up"
            data-aos-delay={delay}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
    </h1>
  );
};

const About = () => {
  return (
    <>
      <div className="flex flex-row p-20">
        <img className="p-40 bg-red-500"></img>
        <div className="font-funnel text-blue-50 text-2xl w-full flex flex-col px-20 items-center overflow-hidden gap-10">
          <ScrollReveal
        baseOpacity={0}
        baseRotation={5}
        blurStrength={10}
        enableBlur={true}
        rotationEnd="bottom center"
        wordAnimationEnd="top 50%"
        containerClassName="text-center"
        textClassName="text-white tracking-wide"
      >ABOUT US</ScrollReveal>
          {/* <AnimatedText text="About us" /> */}

          <hr className="border-0.5 border-white/20 w-full" />
          <p className="font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
