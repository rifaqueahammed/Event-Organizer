import React, { Fragment } from 'react'
import Footer from '../../Components/Footer/Footer'
import Description from '../../Components/ServiceProvider/LandingPage/Description'
import Home from '../../Components/ServiceProvider/LandingPage/Home'
import SignUp from '../../Components/ServiceProvider/LandingPage/SignUp'

function LandinPage() {
  return (
    <div className=''>
        <Fragment>
            <div className='relative'><Home/></div>
            <div className='m-3 md:absolute inset-y-1/3 md:inset-y-2/3 md:left-40 md:m-0'><SignUp/></div>
            <Description/>
            <Footer/>
        </Fragment>
    </div>
  )
}

export default LandinPage
