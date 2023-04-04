import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Profile from '../Profile/Profile'
import EditProfile from '../Profile/EditProfile'
import ChangePassword from '../Profile/ChangePassword'
import Services from '../Services/Services'
import Reviews from '../Reviwes/Reviews';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreaters } from '../../../Store/Redux/Store/index';
import { refreshServiceProvider } from '../../../Services/ServiceProvider';





function Home() {
    const menu = [
        {name:"Dashboard",component:'Dashboard',icon:"fa-solid fa-gauge"},
        {name:"Profile", component:'Profile',icon:"fa-solid fa-user",submenu:true,submenuicon:"fa-solid fa-chevron-down",submenuItems:[
          {name:"Edit Profile",component:'EditProfile',icon:"fa-solid fa-pen-to-square"},
          {name:"Change Password",component:'ChangePassword',icon:"fa-sharp fa-solid fa-gear"}
        ]},
        {name:"Services",component:'Services',icon:"fa-solid fa-briefcase"},
        // {name:"Schedules",component:'Schedules',icon:"fa-solid fa-calendar-days"},
        {name:"Messages",component:'Messages',icon:"fa-solid fa-paper-plane"},
        {name:"Reviews",component:'Reviews',icon:"fa-solid fa-comments"}
    ]
    const [open,setOpen] = useState(true);
    const [submenuOpen,setSubmenuOpen] = useState(false);
    const [component,setComponent] = useState('');
    const navigate = useNavigate();
    const profile = useSelector(state=>state.ServiceProviderData.serviceProvider.companyname);
    const dispatch = useDispatch();
    const {ServiceProviderData,removeServiceProvider} = bindActionCreators(actionCreaters,dispatch);
     
    useEffect(()=>{
     refreshServiceProvider().then((response)=>{
       ServiceProviderData(response.data);
     });
    },[ServiceProviderData]);

    const logout = ((e)=>{
      e.preventDefault();
      localStorage.removeItem("serviceproviderToken");
      removeServiceProvider();
      navigate('/serviceprovider');
    })

  return (
    <div className='font-Montserrat w-full'>
        <section className='flex'>
            <div className={`fixed md:static z-30 bg-gradient-to-r from-[#513B3B] to-cyan-900 min-h-screen ${open ?'w-72':'w-16'} duration-500`}>
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
                    <><button onClick={() => setComponent(menu.component)} className={`group flex items-center text-sm font-medium gap-3.5 p-2 hover:bg-gray-500 rounded-md`}>
                    <div><i className={menu.icon}></i></div>
                    <h2 style={{ transitionDelay: `${i + 3}00ms` }} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu.name}</h2>
                    <h2 className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 duration-300 group-hover:w-fit`}>{menu.name}</h2>
                    { menu.submenu ? <div className={`${!open && 'hidden'} ml-20`} onClick={()=>setSubmenuOpen(!submenuOpen)}><i className={menu.submenuicon}></i></div> : null }
                  </button>
                   { menu.submenu && menu.submenuItems.map((submenuItems,i)=>(
                     <button onClick={() =>setComponent(submenuItems.component)} className={`${!submenuOpen && 'hidden'} ${!open && 'hidden'} group flex items-center text-sm font-normal gap-3.5 p-1 ml-5 hover:bg-gray-500 rounded-md`}>
                      <div><i className={submenuItems.icon}></i></div>
                      <h2 style={{ transitionDelay: `${i+3}00ms` }} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{submenuItems.name}</h2>
                     </button>
                    ))}
                  </>
                  ))
                }
                 <button onClick={logout} className={`group flex items-center text-sm font-medium gap-3.5 p-2 hover:bg-gray-500 rounded-md`}>
                     <div><i className="fa-solid fa-power-off"></i></div>
                     <h2 style={{transitionDelay:`${9}00ms`}} className={`whitespace-pre duration-500 ${ !open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Logout</h2>
                     <h2 className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 duration-300 group-hover:w-fit`}>Logout</h2>
                </button> 
               </div>
            </div>
            <div className='relative md:static ml-8 md:ml-0 w-full'>
              <div className='w-full h-20 md:h-10 shadow-xl text-center md:text-end md:mt-2'><h1 className='mr-4'><Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
              <span className='ml-2'>{profile}</span></h1></div>
             <div className='w-full mr-10 mt-5'>
              {component === '' && <Dashboard/>}
              {component === 'Dashboard' && <Dashboard/>}
              {component === 'Profile' && <Profile/>}
              {component === 'EditProfile' && <EditProfile/>}
              {component === 'ChangePassword' && <ChangePassword/>}
              {component === 'Services' && <Services/>}
              {component === 'Reviews' && <Reviews/>}
             </div>
            </div>
        </section>
    </div>
  )
}

export default Home

