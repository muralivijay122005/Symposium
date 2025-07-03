import React from 'react'

const Ntech = ({refProp}) => {
  return (
    <section ref={refProp} className="min-h-screen p-10 text-white">
    <h2 className="text-3xl font-bold"> NonTech Events</h2>
    <p>Details about Non technical events...</p>
  </section>
  )
}

export default Ntech