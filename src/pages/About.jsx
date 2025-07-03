import ScrollReveal from './../components/ScrollReveal';

const About = ({refProp}) => {
  return (
    
    <section ref={refProp}>
      <div className='flex flex-row p-20'>
        <div className="font-funnel text-blue-50 text-2xl w-full flex flex-col px-20 items-center overflow-hidden gap-10">
          <p>ABOUT US</p>
          <hr className='border-0.5 border-white/20 w-full' />


          <ScrollReveal
            baseOpacity={0.2}         
            enableBlur={true}
            blurStrength={15}         
            baseRotation={1.5}        
            duration={1.2}            
            easing="ease-out"        
            
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, velit unde labore quas, esse magni, asperiores facere sed illum accusamus porro reiciendis repellat cupiditate omnis suscipit necessitatibus vel saepe dicta! Unde numquam facilis distinctio eius tenetur. Excepturi numquam commodi at non molestiae eligendi doloribus quisquam doloremque! Quis quas asperiores, vel repellendus minus nemo recusandae aliquam laborum deserunt veniam? Sunt saepe repellat dolores rem debitis exercitationem voluptates molestias enim? Ex facilis sint cum minima accusamus iure autem iusto tenetur! Tenetur maiores reiciendis magnam nihil quidem dolore consequatur? Quae minima nostrum ad, ratione ipsam eaque non, repellat, reprehenderit nemo deserunt in repudiandae!
          </ScrollReveal>

        </div>
      </div>
      </section>
    
  )
}

export default About