import React, { Fragment } from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/User/Navbar/Navbar'
import ServiceProviders from '../../Components/User/ServiceProviders/ServiceProviders'


function ServiceProvidersPage() {
  return (
    <Fragment>
        <div className='bg-black'><Navbar/></div>
        <ServiceProviders/>
        <Footer/>
    </Fragment>
  )
}

export default ServiceProvidersPage
