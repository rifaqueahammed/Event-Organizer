import React from 'react'
import Navbar from '../../ServiceProvider/LandingPage/Navbar'

function Home() {
  return (
    <div className='w-auto md:w-full h-80 lg:h-screen bg-cover saturate-50' style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/images/servicehome.jpg')`}}>
      <div className='bg-black bg-opacity-40 h-80 lg:h-screen'>
          <div className='sticky top-0'><Navbar/></div>
      </div>
      
    </div>
  )
}

export default Home