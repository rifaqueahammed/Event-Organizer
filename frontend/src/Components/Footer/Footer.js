import React from 'react'

function Footer() {
  return (
    <div className='w-auto md:w-full font-Montserrat bg-[#513B3B] mt-10'>
    <div className='text-md p-5 text-white md:flex justify-around'>
      <h1 className='cursor-pointer'>About</h1>
      <h1 className='cursor-pointer'>Terms and Conditions</h1>
      <h1 className='cursor-pointer'>Privacy Policy</h1>
      <h1 className='cursor-pointer'>Reviews</h1>
      <h1 className='cursor-pointer'>Careers</h1>
      <h1 className='cursor-pointer'>Contact Us</h1>
      <h1 className='cursor-pointer'>Quik Links</h1>
    </div>
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    <div className='flex justify-around'>
        <div className='text-md text-white italic cursor-pointer font-bold'>
        <h1 className=''>Event</h1>
        <h1 className=''>Organizer</h1>
        </div>
        <div className='text-white p-7'><h2>@2023 Event Organizing  Solution India Pvt.Lmd.</h2></div>
    </div>
    </div>
  )
}

export default Footer
