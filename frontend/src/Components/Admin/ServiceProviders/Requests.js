import React, { useState ,useEffect } from 'react'
import axios from '../../../axios';
import EditServiceProvider from './EditServiceProvider';

function Requests() {
    const [ServiceProviders,setServiceProviders] = useState([]);
    const [editJoinRequest,setEditJoinRequest] = useState(false);
    
    useEffect(()=>{
      axios.get('/admin/joinRequests').then((response)=>{
        const serviceProviders = response.data;
        setServiceProviders(serviceProviders)
      })
    },[]);

    const editServiceProvider = ((iD)=>{
        setEditJoinRequest(!editJoinRequest)
    })


  return (
  <div className='relative'>
    <div className='text-center font-semibold mb-10'><h2>Join Requests Management</h2></div>
    <div className='absolute inset-0'>{editJoinRequest && <EditServiceProvider/>}</div>
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
                <button  onClick={()=>editServiceProvider(ServiceProvider._id)}  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Edit</button> 
                </td>
            </tr>

            ))}
        </tbody>
    </table>
  </div>
</div>
  )
}

export default Requests
