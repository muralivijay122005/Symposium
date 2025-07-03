import ScrollReveal from './../components/ScrollReveal';
import SpotlightCard from './../components/SpotlightCard';

const EventCards = () => {
  return (
    <>
    <div className='flex flex-row p-20'>
   
    <div className="font-funnel text-blue-50 text-2xl w-full flex flex-col px-20 items-center overflow-hidden gap-10">
        <p>EVENTS</p>
        <hr className='border-0.5 border-white/20 w-full'/>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
  
</SpotlightCard>
        
    </div> 
    </div>
    </>
  )
}

export default EventCards