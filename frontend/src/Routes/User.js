import React from 'react'
import { Route,Routes } from 'react-router-dom';
import LandinPage from '../Pages/User/LandinPage';

function User() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<LandinPage/>}></Route>
        </Routes>
      
    </div>
  )
}

export default User
