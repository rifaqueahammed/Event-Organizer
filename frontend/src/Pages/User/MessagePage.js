import React, { Fragment } from 'react'
import Navbar from '../../Components/User/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Chat from '../../Components/User/Chat/Messages/Messges'

function MessagePage() {
  return (
    <Fragment>
        <div className='bg-black'><Navbar/></div>
        <Chat/>
        <Footer/>
    </Fragment>
  )
}

export default MessagePage
