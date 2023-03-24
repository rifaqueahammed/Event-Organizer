import React from 'react'
import { Route,Routes } from 'react-router-dom';
import LandinPage from '../Pages/ServiceProvider/LandinPage';
import Home from '../Components/ServiceProvider/Home/Home';
import Authorization from '../Components/ServiceProvider/Authorization/Authorization';

function ServiceProvider() {
  return (
    <div>
       <Routes>
            <Route path='/' element={<Authorization><LandinPage/></Authorization>}></Route>
            <Route path='/home' element={<Authorization><Home/></Authorization>}></Route>
       </Routes>
    </div>
  )
}

export default ServiceProvider
