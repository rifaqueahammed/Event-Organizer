import React, { Fragment } from 'react'
import Footer from '../../Components/Footer/Footer'
import Home from '../../Components/User/Home/Home'
import Services from '../../Components/User/Home/Services'
import Location from '../../Components/Location/Location'

function LandinPage() {
  return (
    <div>
        <Fragment>
            <div className='relative'><Home/></div>
            <div className='m-3 absolute  inset-y-1/3 md:inset-y-2/3 md:left-40 md:m-0'><Location/></div>
            <Services/>
            <Footer/>
        </Fragment>
      
    </div>
  )
}

export default LandinPage
