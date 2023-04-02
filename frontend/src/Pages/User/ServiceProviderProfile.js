import React, { Fragment } from 'react';
import Navbar from '../../Components/User/Navbar/Navbar';
import Profile from '../../Components/User/ServiceProviders/Profile';
import  Footer from '../../Components/Footer/Footer';

function ServiceProviderProfile() {
  return (
   <Fragment>
    <div className='bg-black'><Navbar/></div>
    <Profile/>
    <Footer/>
   </Fragment>
  )
}

export default ServiceProviderProfile
