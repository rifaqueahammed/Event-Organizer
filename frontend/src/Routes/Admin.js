import React from 'react'
import { Route,Routes } from 'react-router-dom';
import AdminPage from '../Pages/Admin/AdminPage';

function AdminRouter() {
  return (
    <div>
       <Routes>
            <Route path='/' element={<AdminPage/>}></Route>
       </Routes>
    </div>
  )
}

export default AdminRouter
