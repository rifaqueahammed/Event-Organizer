import React from 'react'
import { Route,Routes } from 'react-router-dom';
import AdminPage from '../Pages/Admin/AdminPage';
import Login from '../Components/Admin/Home/Login';
import Errorpage from '../Components/Admin/Error/Errorpage';
import Authorization from '../Components/Admin/Authorization/Authorization';


function AdminRouter() {
 
  return (
    <div>
       <Routes>
            <Route path='/' element={<Authorization><Login/></Authorization>}></Route>
            <Route path='/home' element={<Authorization><AdminPage/></Authorization>}></Route>
            <Route path='/error' element={<Errorpage/>}></Route>
       </Routes>
    </div>
  )
}

export default AdminRouter
