import React, { Fragment, useEffect, useState } from 'react';
import {getServiceProviderDetails} from '../../../Services/User';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addReview ,getReviews } from '../../../Services/User';
import {  message , Avatar } from 'antd';


function Profile() {
    const {serviceProviderID} =useParams();
    const [serviceProviderDetails,setserviceProviderDetails] = useState({services:[]});
    const user = useSelector(state=>state.UserData.user);
    const [review,setReview] = useState('');
    const [Reviews,setReviews] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
     getServiceProviderDetails(serviceProviderID).then((response)=>{
      if(response.data){
        setserviceProviderDetails(response.data);
      }
     })
    },[serviceProviderID]);

    useEffect(()=>{
      getReviews(serviceProviderID).then((response)=>{
        setReviews(response.data);
      })
    },[serviceProviderID])

    const addUserReview = ((e)=>{
      e.preventDefault();
      if(user.id){
        const data = {
         serviceProviderId:serviceProviderID,
         userId:user.id,
         username:user.username,
         review:review
        };
        addReview(data).then((response)=>{
          setReviews(response.data);
        });
       }else{
        message.info('Please Login to Continue');
       }
      });

      const chat = ()=>{
        navigate('/user/chat',{state:{serviceProviderID:serviceProviderID}})
      };
    
  return (
    <Fragment>
    <div className='border m-5'>
      <div className='shadow-lg md:flex m-2 items-center justify-between'>
      <img className='p-5 md:w-1/6 h-full' src={serviceProviderDetails.logo_image} alt=''></img>
      <div className='md:p-0 md:mr-20 md:whitespace-nowrap text-center'>
            <h1 className='text-xl font-bold'>{serviceProviderDetails.companyname}</h1>
            {serviceProviderDetails.line1 && <h1 className=''>{serviceProviderDetails?.line1}<span>,{serviceProviderDetails?.pincode}</span></h1>}
      </div>
      </div>
      <div className='text-center mt-5 md:text-end md:m-10 font-semibold'><button onClick={chat} className='bg-black rounded p-2 text-white'>Connect with Us</button></div>
      <div className='m-2 text-center md:mt-5'>
        <h1 className='text-xl font-bold md:mb-10'>Our Services</h1>
        { serviceProviderDetails?.services.map((service,i)=>(
          <div className='mt-5'>
            <h1 className='text-lg text-green-500 font-semibold'>{service.name}</h1>
            <h1 className='text-gray-500 italic'>{service.description}</h1>
           <div className='grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center'>
            {service?.images.map((image,i)=>(
            <img className='p-5 w-2/3 md:w-full' src={image.path} alt=''></img>
           ))} </div>
          </div>
        ))}
      </div>
    </div>
    <hr/>
    <div className='p-5 md:p-10'>
      <h1 className='font-bold text-lg'>Reviews</h1>
      <form className='mt-2' onSubmit={addUserReview}>
        <input  onChange={(e)=>setReview(e.target.value)} className='w-full md:w-1/2 px-3 py-3 placeholder-slate-300 text-slate-600 bg-gray-100 rounded text-sm border shadow outline-none focus:outline-none focus:ring' name='review' id='review'></input>
        <button type='submit' className='w-full md:w-auto rounded mt-2 md:mt-0 md:ml-5 p-2 bg-black text-white'>Post Review</button>
      </form>
      </div>
     {Reviews.map((Review,i)=>(
      <div className='p-5 md:px-20'>
          <div className='flex items-center'>
              <Avatar style={{ backgroundColor: '#7265e6', verticalAlign: 'middle' }} size="large">
              {Review.reviews.username}
              </Avatar>
              <p className='ml-2 font-semibold'>{Review.reviews.username}</p>
          </div>
          <div className='shadow-md text-gray-700'> <p className='p-5'>{Review.reviews.review}</p></div>
      </div>
     ))}
    </Fragment>
  )
}

export default Profile
