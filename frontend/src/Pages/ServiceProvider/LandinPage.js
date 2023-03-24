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
            <div className='w-full flex justify-center'>
              <SignUp/>
            </div>
            <Description/>
            <Footer/>
        </Fragment>
    </div>
  )
}

export default LandinPage
