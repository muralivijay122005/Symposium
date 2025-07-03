import ScrollReveal from "./../components/ScrollReveal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";




const About = () => {
  return (
    <>
    
    <div className='flex flex-row p-20'>
    <div className="font-funnel text-blue-50 text-2xl w-full flex flex-col px-20 items-center overflow-hidden gap-10">
        <p>ABOUT US</p>
        <hr className='border-0.5 border-white/20 w-full'/>
        <p className='font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently</p>


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
