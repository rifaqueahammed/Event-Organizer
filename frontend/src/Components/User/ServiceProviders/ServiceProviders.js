import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getServiceProviders } from '../../../Services/User';


function ServiceProviders() {
  
  const {servicename} = useParams();
  const [search,setSearch] = useState(servicename);
  const [ServiceProviders,setServiceProviders] = useState([])
  const navigate = useNavigate();


  useEffect(()=>{
    const data = {
      service_name:search
    };
    getServiceProviders(data).then((response)=>{
      setServiceProviders(response.data);
      navigate(`/user/serviceProviders/${search}`);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[navigate])


  const searchService = (e)=>{
    e.preventDefault();
    const data = {
      service_name:search
    };
    const servicename = search;
    getServiceProviders(data).then((response)=>{
        setServiceProviders(response.data);
        navigate(`/user/serviceProviders/${servicename}`);
    })
  }
  const getServiceProvider = (id)=>{
     navigate(`/user/serviceProviderProfile/${id}`);
  }

  return (
    <Fragment>
      <div className='w-full p-2 font-Montserrat'>
        <form  onSubmit={searchService} className='md:flex justify-center mt-10'>
          <input value={search} onChange={(e)=>setSearch(e.target.value)}  name="service_name" className='w-full md:w-1/4 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring'></input>
          <button className='w-full md:w-auto mt-2 md:mt-0 bg-black rounded px-3 py-3 text-white font-semibold md:ml-2'> Modify Search</button>
        </form>
      </div>
      <div className='p-5 md:p-10 font-Montserrat'>
      { ServiceProviders.map((ServiceProvider,i)=>(
        <div className='md:flex p-5 md:p-10 shadow-lg justify-between'>
         <img src={ServiceProvider.logo_image.path} alt='' className='md:w-1/4'></img>
         <div className='mt-2'>
            <h1 className='text-xl font-semibold text-green-500'>{ServiceProvider.companyname}</h1>
            <p className=''>{ServiceProvider.phone}</p>
            <p className=''>{ServiceProvider.hq}</p>
            <p className=''>{ServiceProvider.address.line1}</p>
          </div>
          <div className='mt-2'>
             <h1 className='font-semibold'>Our Services</h1>
             {ServiceProvider.services.map((service,i)=>(
              <p>{service.name}</p>
             ))}
          </div>
          <div className='mt-2 md:mt-10'><button type='button' onClick={()=>getServiceProvider(ServiceProvider._id)} className='w-full bg-black rounded p-2 text-white'>View More</button></div>
        </div>
        ))}
      </div>
    </Fragment>
  )
}

export default ServiceProviders
