import React, { Fragment } from 'react'
import Home from '../../Components/User/Home/Home'
import Services from '../../Components/User/Home/Services'
import Footer from '../../Components/Footer/Footer'

function Homepage() {
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

export default Homepage
