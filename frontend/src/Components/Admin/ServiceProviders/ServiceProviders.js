import React, { useState, useEffect } from 'react'
import {getServiceProviders,serviceProviderControll} from '../../../Services/Admin'

function ServiceProviders() {
    const [ServiceProviders,setServiceProviders] = useState([]);
    
    useEffect(()=>{
      getServiceProviders().then((response)=>{
        const serviceProviders = response.data;
        setServiceProviders(serviceProviders)
      })
    },[]);

    const serviceProviderController = ((id)=>{
      const serviceProviderID = {
        id:id
      }
     serviceProviderControll(serviceProviderID).then((response)=>{
      if(response.data.success){
        if(response.data.isBlocked){
          localStorage.removeItem("serviceproviderToken");
        }
        getServiceProviders().then((response)=>{
          const serviceProviders = response.data;
          setServiceProviders(serviceProviders)
        })
      }
     })

    })


  return (
  <div>
    <div className='text-center font-semibold mb-10'><h2>Service Providers Management</h2></div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className=''>
                <th scope="col" className="px-6 py-3">
                    No
                </th>
                <th scope="col" className="px-6 py-3">
                     ID
                </th>
                <th scope="col" className="px-6 py-3  whitespace-nowrap">
                     Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {ServiceProviders.map((ServiceProvider,i)=>(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {i+1}
                </th>
                <td className="px-6 py-4 whitespace-nowrap">
                {ServiceProvider._id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {ServiceProvider.companyname}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {ServiceProvider.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {ServiceProvider.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                 <button onClick={()=>serviceProviderController(ServiceProvider._id)} className={`w-full text-white font-bold py-2 px-4 rounded ${!ServiceProvider.isBlocked ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700'}`} >{!ServiceProvider.isBlocked ?'Block' : 'UnBlock'}</button>
                </td>
            </tr>

            ))}
        </tbody>
    </table>
  </div>
</div>
  )
}

export default ServiceProviders
