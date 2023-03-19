import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Homepage from '../Pages/User/Homepage';
import ProfilePage from '../Pages/User/ProfilePage';

function UserRoutes() {
  return (
    <div>
        <Routes>
           <Route path='/' element={<Homepage/>}></Route>
           <Route path='/userProfile' element={<ProfilePage/>}></Route>
        </Routes>
    </div>
  )
}

export default UserRoutes

