import React, { Fragment} from 'react'
import Home from '../../Components/User/Home/Home'
import Services from '../../Components/User/Home/Services'
import Footer from '../../Components/Footer/Footer'
import Search from '../../Components/Search/Search'

function Homepage() {

  return (
    <div>
         <Fragment>
            <Home/>
            <div className='w-full flex justify-center'>
              <Search/>
            </div>
            <Services/>
            <Footer/>
         </Fragment>
    </div>
  )
}

export default Homepage
