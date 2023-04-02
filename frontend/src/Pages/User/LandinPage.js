import React, { Fragment } from 'react'
import Footer from '../../Components/Footer/Footer'
import Home from '../../Components/User/Home/Home'
import Services from '../../Components/User/Home/Services'
import Search from '../../Components/Search/Search'
import Description from '../../Components/User/Home/Description'
// import Location from '../../Components/Location/Location'

function LandinPage() {
  return (
    <div>
        <Fragment>
            <Home/>
            <div className='w-full flex justify-center'>
              <Search/>
            </div>
            <Services/>
            <Description/>
            <Footer/>
        </Fragment>
      
    </div>
  )
}

export default LandinPage
