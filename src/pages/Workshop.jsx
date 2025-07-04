import React from 'react'

const Workshop = ({refProp}) => {
  return (
    <section ref={refProp} className="min-h-screen p-10 font-funnel text-white">
    <h2 className="text-2xl">WORKSHOP</h2>
    <p>Details about technical events...</p>
  </section>
  )
}

export default Workshop