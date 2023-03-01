import React, { Fragment } from 'react'
import Footer from '../../Components/Footer/Footer'
import Description from '../../Components/ServiceProvider/Home/Description'
import Home from '../../Components/ServiceProvider/Home/Home'
import SignUp from '../../Components/ServiceProvider/Home/SignUp'

function LandinPage() {
  return (
    <div className=''>
        <Fragment>
            <div className='relative'><Home/></div>
            <div className='md:absolute m-3 inset-y-1/3 md:inset-y-2/3 md:left-40 lg:m-0'><SignUp/></div>
            <Description/>
            <Footer/>
        </Fragment>
    </div>
  )
}

export default LandinPage
