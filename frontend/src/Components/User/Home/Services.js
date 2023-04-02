import React, { Fragment } from 'react'
// import { Carousel} from 'antd';

function Services() {
  
  return (
     <Fragment>
      <div className='text-center font-bold p-5 font-Montserrat'>
      <h1 className='text-xl mb-5 mt-5'>Our Services</h1>
      </div>
      <div className='grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center m-2">
         <img className="w-full" src="/images/wedding.jpg" alt=""/>
         <div className="px-6 py-4">
         <div className="font-bold text-xl mb-2">Wedding Arrangements</div>
          <p className="text-gray-700 text-base italic">“We Make Your Wedding Memorable”</p>
        </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden text-center shadow-lg text- m-2">
         <img className="w-full" src="/images/birthday.jpg" alt=""/>
         <div className="px-6 py-4">
         <div className="font-bold text-xl mb-2">Birthday Party</div>
          <p className="text-gray-700 text-base italic">“Your Birthday is our Happiness”</p>
        </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden text-center shadow-lg text-center m-2">
         <img className="w-full" src="/images/babyshower.jpg" alt=""/>
         <div className="px-6 py-4">
         <div className="font-bold text-xl mb-2">Babyshower Arrangements</div>
          <p className="text-gray-700 text-base italic">“You two are going to make wonderful parents”</p>
        </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden text-center shadow-lg text-center m-2">
         <img className="w-full" src="/images/house.jpg" alt=""/>
         <div className="px-6 py-4">
         <div className="font-bold text-xl mb-2">Housewarming Party</div>
          <p className="text-gray-700 text-base italic">“Make your House Party Awesome”</p>
        </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden text-center shadow-lg text-center m-2">
         <img className="w-full" src="/images/office.jpg" alt=""/>
         <div className="px-6 py-4">
         <div className="font-bold text-xl mb-2">Office Party Arrangements</div>
          <p className="text-gray-700 text-base italic">“Just Relax...We Arrange Memorable Party”</p>
        </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden text-center shadow-lg text-center m-2">
         <img className="w-full" src="/images/catering.jpg" alt=""/>
         <div className="px-6 py-4">
         <div className="font-bold text-xl mb-2">Catering Services</div>
          <p className="text-gray-700 text-base italic">“We Serve Delicious Food For You”</p>
        </div>
        </div>
      </div>
    </Fragment>
    
  )
}

export default Services

