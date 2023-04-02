import React from 'react'

function Description() {
  return (
    <div className='mb-10'>
        <div className='w-full'>
        <hr/>
            <h1 className='text-2xl font-bold text-center mt-10'>Join Event Organizer to Change your Business</h1>
            <h4 className='text-xl text-center mt-3 text-gray-500'>Event Organizer is Website Market Place which connect you to needy Customers</h4>
            <h2 className='text-xl text-center mt-10 font-bold text-[#513B3B]'>Who Can Join ?</h2>
            <h4 className='text-xl text-center mt-3 text-gray-500'>A Registered Event Management Company With Minimum 1 Year Experience in Related Fields</h4>
        </div>
        <div className='w-full mt-10 md:flex justify-evenly '>
          <div className='mt-5 md:mt-0 md:w-1/3'>
              <h1 className='text-center text-4xl text-green-500 font-bold'>200+</h1>
              <h3 className='text-center text-2xl mt-2'>Customers</h3>
          </div>
          <div className='mt-5 md:mt-0 md:w-1/3'>
              <h1 className='text-center text-4xl text-green-500 font-bold'>100+</h1>
              <h3 className='text-center text-2xl mt-2'>Service Providers</h3>
          </div>
          <div className='mt-5 md:mt-0 md:w-1/3'>
              <h1 className='text-center text-4xl text-green-500 font-bold'>650+</h1>
              <h3 className='text-center text-2xl mt-2'>Service Provided Each Month</h3>
          </div>
        </div>
      </div>
  )
}

export default Description
