import React, { Fragment } from 'react'
import Footer from '../../Components/Footer/Footer'
import Home from '../../Components/User/Home/Home'
import Services from '../../Components/User/Home/Services'
import Search from '../../Components/Location/Search'
// import Location from '../../Components/Location/Location'

function LandinPage() {
  return (
    <div>
        <Fragment>
            <div className='relative'><Home/></div>
            <div className='w-full flex justify-center'>
              {/* <Location/> */}
              <Search/>
            </div>
            <Services/>
            <Footer/>
        </Fragment>
      
    </div>
  )
}

export default LandinPage
