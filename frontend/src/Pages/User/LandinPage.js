import React, { Fragment } from 'react'
import Footer from '../../Components/Footer/Footer'
import Home from '../../Components/Home/Home'
import Services from '../../Components/Home/Services'

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
