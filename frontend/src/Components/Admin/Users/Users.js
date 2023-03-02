import React, { useEffect, useState } from 'react'
import axios from '../../../axios'

function Users() {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
      axios.get('/admin/users').then((response)=>{
        const users = response.data;
        setUsers(users)
      })
    },[]);

//    const userController = ((userId)=>{
//       axios.post()
//    });

  return (
  <div>
    <div className='text-center font-semibold mb-10'><h2>Users Management</h2></div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className=''>
                <th scope="col" className="px-6 py-3">
                    No
                </th>
                <th scope="col" className="px-6 py-3">
                    User ID
                </th>
                <th scope="col" className="px-6 py-3  whitespace-nowrap">
                    User Name
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
            {users.map((user,i)=>(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {i+1}
                </th>
                <td className="px-6 py-4 whitespace-nowrap">
                {user._id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {user.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {user.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                {!user.isBlocked ? <button  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Block</button> : <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>UnBlock</button>}
                {/* onClick={()=>userController(user._id)} */}
                </td>
            </tr>

            ))}
        </tbody>
    </table>
  </div>
</div>
  )
}


export default Users


