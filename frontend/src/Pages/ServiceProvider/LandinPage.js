import React, { Fragment } from 'react'
import Footer from '../../Components/Footer/Footer'
import Description from '../../Components/ServiceProvider/Home/Description'
import Home from '../../Components/ServiceProvider/Home/Home'

function LandinPage() {
  return (
    <div>
        <Fragment>
            <Home/>
            <Description/>
            <Footer/>
        </Fragment>
    </div>
  )
}

export default LandinPage
