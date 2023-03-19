import React from 'react'

function Services() {
  return (
    <div>
         <div className='text-center font-semibold mb-5'><h2>Services</h2></div>
       <div className='m-10 mt-0 h-screen md:shadow-xl'>
        <div className='text-center font-semibold p-10'>
          <h1>6 Years of Experience in Wedding Planning and Organizing, We Have Customers from all parts of India..!  </h1>
        </div>
        <div className='md:flex w-full h-2/4 g-2'>
          <div className='m-4 w-full md:w-1/2 shadow-lg h-full overflow-auto hover:overflow-scroll'>
                <div className='flex'>
                  <div className='m-2 w-1/4 ml-5'><h1 className=''>Company No</h1></div>
                  <div className='m-2 md:w-1/4'><h1 className=''>:serviceProvider.licence_number</h1></div>
                </div>
                <div className='flex'>
                  <div className='m-2 w-1/4 ml-5'><h1 className=''>Email</h1></div>
                  <div className='m-2 md:w-1/4'><h1 className=''>:serviceProvider.email</h1></div>
                </div>
                <div className='flex'>
                  <div className='m-2 w-1/4 ml-5'><h1 className=''>Phone</h1></div>
                  <div className='m-2 md:w-1/4'><h1 className=''>:</h1></div>
                </div>
                <div className='flex'>
                  <div className='m-2 w-1/4 ml-5'><h1 className=''>Owner Name</h1></div>
                  <div className='m-2 md:w-1/4'><h1 className=''>:</h1></div>
                </div>
                <div className='flex'>
                  <div className='m-2 w-1/4 ml-5'><h1 className=''>HQ Location</h1></div>
                  <div className='m-2 md:w-1/4'><h1 className=''>:</h1></div>
                </div>
                <div className='flex'>
                  <div className='m-2 w-1/4 ml-5'><h1 className=''>Locations Operated</h1></div>
                  <div className='m-2 md:w-1/4'><h1 className=''>:Calicut,Kochi,Wayanad</h1></div>
                </div>
          </div>
          <div className='m-4 w-full md:w-1/2 h-full shadow-lg'>
            <div className='text-center font-bold mt-2'>
              <h1>Services</h1>
            </div>
            <div className='p-5'>
              <ul className=''>
                <li className='m-2'><h2>Wedding Planning</h2></li>
                <li className='m-2'><h2>Birthday Planning</h2></li>
                <li className='m-2'><h2>Housewarmin Party Planning</h2></li>
                <li className='m-2'><h2>Housewarmin Party Planning</h2></li>
                <li className='m-2'><h2>Housewarmin Party Planning</h2></li>
              </ul>
            </div>
          </div>
        </div>
        
       </div>
      
    </div>
  )
}

export default Services
