import React from 'react'
import Navbar from '../Navbar/Navbar'

function Profile() {
  return (
    <div className='bg-gray-300 md:bg-white'>
        <div className='sticky top-0 bg-black'><Navbar/></div>
        <div className='md:flex w-auto'>
          <div className=' w-full  md:w-1/4 shadow-2xl md:m-5 text-center rounded-md'>
          <div class="flex flex-wrap justify-center">
            <div class="w-3/5 py-4 px-4">
                <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" alt="..." class="shadow-xl rounded-full max-w-full h-auto align-middle border-none" />
            </div>
         </div>
          <h1 className='font-bold md:mt-5 text-xl'>Tovino Thomas</h1>
         </div>
         
            <div className='w-full md:w-2/3 shadow-2xl md:m-5 rounded-md  margin-auto'>
                <div className='flex'>
                  <div className='m-2 w-1/4 ml-5'><h1 className='font-semibold text-lg'>User Name</h1></div>
                  <div className='m-2 bg-gray-200 md:w-1/4'><h1 className='text-lg'>Tovino Thomas</h1></div>
                </div>
                <div className='flex'>
                  <div className='m-2 w-1/4 ml-5'><h1 className='font-semibold text-lg'>Email</h1></div>
                  <div className='m-2 bg-gray-200 md:w-1/4'><h1 className='text-lg'>tovino@gmail.com</h1></div>
                </div>
                <div className='flex'>
                  <div className='m-2 w-1/4 ml-5'><h1 className='font-semibold text-lg'>Phone</h1></div>
                  <div className='m-2 bg-gray-200 md:w-1/4'><h1 className='text-lg'>9564763423</h1></div>
                </div>
                <div className='flex'>
                  <div className='m-2 w-1/4 ml-5'><h1 className='font-semibold text-lg'>Contact Info</h1></div>
                  <div className='md:w-1/4'>
                    <div className='m-2 bg-gray-200 w-full whitespace-nowrap'><h1 className='text-lg'>Hello House</h1></div>
                    <div className='m-2 bg-gray-200 w-full whitespace-nowrap'><h1 className='text-lg'>Kalpetta, wayanad</h1></div>
                    <div className='m-2 bg-gray-200 w-full whitespace-nowrap'><h1 className='text-lg'>Kerala, 673122</h1></div>
                  </div>
                </div>
              </div>

        </div>
    </div>
  )
}

export default Profile
