import React, { useState, useEffect } from 'react'
import { getServiceProvider ,editServiceProvider } from '../../../Services/ServiceProvider';
import { useSelector } from 'react-redux';
import {  message } from 'antd';

function EditProfile() {
  const serviceProviderdata = useSelector(state=>state.ServiceProviderData.serviceProvider);
  const [serviceProvider,setServiceProvider] = useState({});

  useEffect(()=>{
    const id = serviceProviderdata.id;
      getServiceProvider(id).then((response)=>{
        setServiceProvider(response.data);
      }).catch(
          console.error())
     },[serviceProviderdata, setServiceProvider]);

  // values updations
  const onUpdateField = (e) => {
    e.preventDefault();
    const nextFormState = {
      ...serviceProvider,
      [e.target.name]: e.target.value,
    };
    setServiceProvider(nextFormState);
  };

  const onSubmit = ((e)=>{
    e.preventDefault();
    const data = serviceProvider;
    editServiceProvider(data,serviceProviderdata.id).then((response)=>{
       if(response){
         message.success("Updated")
       }
    })
  });

    
  return (
    <div>
      <div className='text-center font-semibold mb-5'><h2>Edit Profile</h2></div>
       <div className='m-10 mt-0 shadow-xl'>
        <form className='p-10 md:p-20' onSubmit={(onSubmit)} >
          <div className='md:flex'>
            <label className='md:p-2 whitespace-nowrap w-1/4'>Company Name:</label>
            <input type="text" value={serviceProvider?.companyname} onChange={onUpdateField} id="companyname" name='companyname' class="md:ml-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full md:w-1/2 md:p-2"></input>
          </div>
          <div className='md:flex mt-2'>
            <label className='md:p-2 whitespace-nowrap w-1/4'>Licenece Number:</label>
            <input type="text" value={serviceProvider?.licence_number} onChange={onUpdateField} id="licence_number" name='licence_number' class="md:ml-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full md:w-1/2 md:p-2"></input>
          </div>
          <div className='md:flex mt-2'>
            <label className='md:p-2 whitespace-nowrap w-1/4'>Phone:</label>
            <input type="number" value={serviceProvider?.phone} onChange={onUpdateField} id="phone" name='phone' class="md:ml-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full md:w-1/2 md:p-2"></input>
          </div>
          <div className='md:flex mt-2'>
            <label className='md:p-2 whitespace-nowrap w-1/4'>Owner Name:</label>
            <input type="text" value={serviceProvider?.ownername} onChange={onUpdateField} id="ownername" name='ownername' class="md:ml-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full md:w-1/2 md:p-2"></input>
          </div>
          <div className='md:flex mt-2'>
            <label className='md:p-2 whitespace-nowrap w-1/4'>HQ Location:</label>
            <input type="text" value={serviceProvider?.hq} onChange={onUpdateField} id="hq" name='hq' class="md:ml-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full md:w-1/2 md:p-2"></input>
          </div>
          <div className='md:flex mt-2'>
            <label className='md:p-2 whitespace-nowrap w-1/4'>Address:</label>
            <input type="text" value={serviceProvider?.line1} onChange={onUpdateField} id="line1" name='line1' class="md:ml-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full md:w-1/2 md:p-2 h-20"></input>
          </div>
          <div className='md:flex mt-2'>
            <label className='md:p-2 whitespace-nowrap w-1/4'>State:</label>
            <input type="text" value={serviceProvider?.state} onChange={onUpdateField} id="state" name='state' class="md:ml-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full md:w-1/2 md:p-2"></input>
          </div>
          <div className='md:flex mt-2'>
            <label className='md:p-2 whitespace-nowrap w-1/4'>Pincode:</label>
            <input type="text" value={serviceProvider?.pincode} onChange={onUpdateField} id="pincode" name='pincode' class="md:ml-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full md:w-1/2 md:p-2"></input>
          </div>
          <div className='md:flex mt-2'>
            <label className='md:p-2 whitespace-nowrap w-1/4'>Cover Photo:</label>
            <input type="file" id="" name='' class="md:ml-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full md:w-1/2 md:p-2"></input>
          </div>
          <button type='submit' className='bg-green-500 hover:bg-green-600 text-white font-bold w-full shadow-lg p-2 mt-10 rounded-md'>SAVE CHANGES</button>
        </form>
       </div>
    </div>
  )
}

export default EditProfile 
