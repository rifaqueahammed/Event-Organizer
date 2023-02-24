import React from 'react'
import { Route,Routes } from 'react-router-dom';
import LandinPage from '../Pages/ServiceProvider/LandinPage';

function ServiceProvider() {
  return (
    <div>
       <Routes>
            <Route path='/' element={<LandinPage/>}></Route>
       </Routes>
    </div>
  )
}

export default ServiceProvider
