import React, { Fragment, useEffect, useState } from 'react';
import { getReviews } from '../../../Services/ServiceProvider';

function Reviews() {
    const [Reviews,setReviwes] = useState([]);

    useEffect(()=>{
       getReviews().then((response)=>{
        setReviwes(response.data);
       })
    },[]);

  return (
    <Fragment>
    <div className='ml-5 md:ml-0'>
        <div className='text-center font-semibold mb-5'><h2>Reviews</h2></div>
        <div className='p-5'> 
        {Reviews.map((Review,i)=>(
            <div className='md:flex shadow-lg p-2 mt-2'>
                  <h1>Reviewed By <span className='text-red-500'>{Review.reviews.username}</span></h1>
                  <p className='mt-2 md:ml-20 md:mt-0 font-medium'>"{Review.reviews.review}"</p>
            </div>
        ))}
       </div>
    </div>
        
    </Fragment>
  )
}

export default Reviews
