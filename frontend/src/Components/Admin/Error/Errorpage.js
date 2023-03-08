import React from 'react'
import { Link } from 'react-router-dom'

function Errorpage() {
  return (
    <div>
        <div
  class="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r
    from-[#713B3B]
    to-[#513B3B]
  "
>
  <div class="md:px-40 md:py-20 bg-white rounded-md shadow-xl">
    <div class="flex flex-col items-center">
      <h1 class="font-bold text-blue-600 text-9xl">404</h1>

      <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
        <span class="text-red-500">Oops!</span> Page not found
      </h6>

      <p class="mb-8 text-center text-gray-500 md:text-lg">
        The page you’re looking for doesn’t exist.
      </p>
      <div className='text-green-500 font-bold'><Link to='/admin'>Go to Home</Link></div>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Errorpage
