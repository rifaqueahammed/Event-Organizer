import React from 'react'
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <div className='w-auto md:w-full h-screen bg-cover saturate-50' style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/images/homeimage.jpg')`}}>
      <div className='bg-black bg-opacity-40 h-screen'>
          <div className='sticky top-0'><Navbar/></div>
      </div>
    </div>
  )
}

export default Home
