import React from 'react'
import Mainview from './Mainview'
import Features from './Features'
import Trusted from './Trusted'

const Landing = () => {
  return (
    <div className='overflow-hidden'>
      <Mainview/>
      <Features/>
      <Trusted/>
    </div>
  )
}

export default Landing
