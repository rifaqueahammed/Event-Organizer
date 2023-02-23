import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom";
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp';

function Navbar() {
const [open,setOpen] = useState(false);
const [showLogin,setShowLogin] = useState(false);
const [showSignUp,setShowSignUp] = useState(false);

  return (
    <div>
     <nav className='font-Montserrat font-bold flex flex-col md:flex-row justify-between'>
        <div className='text-3xl p-7 text-white italic cursor-pointer'>
        <h1 className=''>Event</h1>
        <h1 className=''>Organizer</h1>
        </div>
        <div className='text-white md:hidden absolute right-8 top-6 cursor-pointer' onClick={()=>setOpen(!open)}>
         <i class={open ? "fa-3x fa-solid fa-xmark" : "fa-3x fa-solid fa-bars"}></i>
        </div>
        <ul className={`absolute md:static flex flex-col md:flex-row justify-between 
        md:p-5 md:mt-10 text-white  transition-all duration-500 ease-in md:transition-none ${open ? `top-20 p-8 mt-5 text-lg opacity-100`:` top-[-490px]`}`}>
            <li><h5 className='cursor-pointer'>Register as A Service Provider</h5></li>
            <li><button className='mt-2 md:mt-0 md:ml-5 cursor-pointer' onClick={()=>setShowSignUp(!showSignUp)}>SignUp</button></li>
            <li><button className='mt-2 md:mt-0 md:ml-5 cursor-pointer' onClick={()=>setShowLogin(!showLogin)}>Login</button></li>
        </ul>
    </nav> 
    <div className='absolute inset-y-0 right-0 mt-0'>
    {showLogin ? <Login/> :''}
    </div>
    <div className='absolute inset-y-0 right-0 mt-0'>
    {showSignUp ? <SignUp/> :''}
    </div>  
    </div>
  )
}

export default Navbar
