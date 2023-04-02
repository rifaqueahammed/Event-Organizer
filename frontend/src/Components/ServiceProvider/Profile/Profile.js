import React, { useState, useEffect } from 'react';
import { getServiceProvider } from '../../../Services/ServiceProvider';
// import { useSelector } from 'react-redux';


function Profile() {

  //  const serviceProviderdata = useSelector(state=>state.ServiceProviderData.serviceProvider);
   const [serviceProvider,setServiceProvider] = useState({services:[]});
   

    useEffect(()=>{
        getServiceProvider().then((response)=>{
          setServiceProvider(response.data);
        }).catch(
            console.error())
       },[setServiceProvider]);

  return ( 
    <div className=''>
       <div className='text-center font-semibold mb-5'><h2>Profile</h2></div>
       <div className='m-10 mt-0 h-screen md:shadow-xl'>

        <div className='md:flex bg-black w-full md:h-1/4 justify-between items-center'>
          <img className='p-5 md:m-5 md:w-1/5 h-full' src={serviceProvider.logo_image} alt=''></img>
          <div className='md:p-0 md:mr-20 md:whitespace-nowrap text-center'>
            <h1 className='text-white font-bold'>{serviceProvider.companyname}</h1>
            {serviceProvider.line1 && <h1 className='text-white'>{serviceProvider?.line1}<span>,{serviceProvider?.pincode}</span></h1>}
          </div>
        </div>
        <div className='text-center font-semibold p-10'>
          <h1>6 Years of Experience in Wedding Planning and Organizing, We Have Customers from all parts of India..!  </h1>
        </div>
        <div className='md:flex w-full h-2/4 g-2'>
          <div className='m-4 w-full md:w-1/2 shadow-lg h-full overflow-auto hover:overflow-scroll'>
                <div className='flex'>
                  <div className='m-2 w-1/4 ml-5'><h1 className=''>Company No</h1></div>
                  <div className='m-2 md:w-1/4'><h1 className=''>:{serviceProvider.licence_number}</h1></div>
                </div>
                <div className='flex'>
                  <div className='m-2 w-1/4 ml-5'><h1 className=''>Email</h1></div>
                  <div className='m-2 md:w-1/4'><h1 className=''>:{serviceProvider.email}</h1></div>
                </div>
                <div className='flex'>
                  <div className='m-2 w-1/4 ml-5'><h1 className=''>Phone</h1></div>
                  <div className='m-2 md:w-1/4'><h1 className=''>:{serviceProvider.phone}</h1></div>
                </div>
                <div className='flex'>
                  <div className='m-2 w-1/4 ml-5'><h1 className=''>Owner Name</h1></div>
                  <div className='m-2 md:w-1/4'><h1 className=''>:{serviceProvider.ownername}</h1></div>
                </div>
                <div className='flex'>
                  <div className='m-2 w-1/4 ml-5'><h1 className=''>HQ Location</h1></div>
                  <div className='m-2 md:w-1/4'><h1 className=''>:{serviceProvider.hq}</h1></div>
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
              { serviceProvider.services.map((service,i)=>(
                <li className='m-2' key={i}><h2>{service.name}</h2></li>
              ))
              }
              </ul>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Profile
