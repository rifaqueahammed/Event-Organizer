import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Homepage from '../Pages/User/Homepage';

function UserRoutes() {
  return (
    <div>
        <Routes>
           <Route path='/' element={<Homepage/>}></Route>
        </Routes>
    </div>
  )
}

export default UserRoutes

