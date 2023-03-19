import React from 'react'
import { Route,Routes } from 'react-router-dom';
import LandinPage from '../Pages/ServiceProvider/LandinPage';
import Home from '../Components/ServiceProvider/Home/Home';

function ServiceProvider() {
  return (
    <div>
       <Routes>
            <Route path='/' element={<LandinPage/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
       </Routes>
    </div>
  )
}

export default ServiceProvider
