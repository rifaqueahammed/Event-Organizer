import React, { Fragment } from 'react'
import Footer from '../../Components/Footer/Footer'
import Home from '../../Components/User/Home/Home'
import Services from '../../Components/User/Home/Services'

function LandinPage() {
  return (
    <div>
        <Fragment>
            <Home/>
            <Services/>
            <Footer/>
        </Fragment>
      
    </div>
  )
}

export default LandinPage
