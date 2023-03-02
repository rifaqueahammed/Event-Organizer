import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Users from '../Users/Users'
import ServiceProviders from '../ServiceProviders/ServiceProviders';
import Requests from '../ServiceProviders/Requests'


function Home() {
    const menu = [
        {name:"Dashbord",component:'Dashbord',icon:"fa-solid fa-gauge"},
        {name:"Users", component:'Users',icon:"fa-solid fa-users"},
        {name:"ServiceProviders",component:'ServiceProviders',icon:"fa-solid fa-briefcase"},
        {name:"Inbox",component:'Inbox',icon:"fa-solid fa-envelope"},
        {name:"Requests",component:'Requests',icon:"fa-solid fa-paper-plane"},
    ]
    const [open,setOpen] = useState(true);
    const [component,setComponent] = useState('');

  return (
    <div className='font-Montserrat w-full'>
        <section className='flex gap-6'>
            <div className={`bg-[#513B3B] min-h-screen ${open ?'w-72':'w-16'} duration-500`}>
            <div className='flex justify-between'>
                <div className={`${!open && 'hidden'} text-lg text-white italic cursor-pointer p-3 duration-500 font-semibold`}>
                 <h1 className=''>Event</h1>
                 <h1 className=''>Organizer</h1>
               </div>
               <div onClick={()=>setOpen(!open)} className='py-3 px-4 flex justify-end text-gray-100'>
               <i className="fa-2x fa-solid fa-bars cursor-pointer"></i>
               </div>
            </div>
               <div className='text-white m-4  flex flex-col gap-4 relative'>
                { menu?.map((menu,i)=>(
                     <button onClick={()=>setComponent(menu.component)} className={`group flex items-center text-sm font-medium gap-3.5 p-2 hover:bg-gray-500 rounded-md`}>
                     <div><i className={menu.icon}></i></div>
                     <h2 style={{transitionDelay:`${i+3}00ms`}} className={`whitespace-pre duration-500 ${ !open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu.name}</h2>
                     <h2 className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 duration-300 group-hover:w-fit`}>{menu.name}</h2>
                    </button> 
                    ))
                }
                 <Link to="/" className={`group flex items-center text-sm font-medium gap-3.5 p-2 hover:bg-gray-500 rounded-md`}>
                     <div><i className="fa-solid fa-power-off"></i></div>
                     <h2 style={{transitionDelay:`${9}00ms`}} className={`whitespace-pre duration-500 ${ !open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Logout</h2>
                     <h2 className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 duration-300 group-hover:w-fit`}>Logout</h2>
                </Link> 
               </div>
            </div>
            <div className='w-full mr-10 mt-5'>
             {component === 'Users' && <Users/>}
             {component === 'ServiceProviders' && <ServiceProviders/>}
             {component === 'Requests' && <Requests/>}
            </div>
        </section>
    </div>
  )
}

export default Home
