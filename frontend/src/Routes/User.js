import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Homepage from '../Pages/User/Homepage';
// import ProfilePage from '../Pages/User/ProfilePage';
import ServiceProvidersPage from '../Pages/User/ServiceProviders';
import ServiceProviderProfile from '../Pages/User/ServiceProviderProfile';
import Authorization from '../Components/User/Authorization/Authorization';
import ChatPage from '../Pages/User/MessagePage'


function UserRoutes() {
  return (
    <div>
        <Routes>
           <Route path='/' element={<Authorization><Homepage/></Authorization>}></Route>
           {/* <Route path='/userProfile' element={<ProfilePage/>}></Route> */}
           <Route path='/serviceProviders/:servicename' element={<ServiceProvidersPage/>}></Route>
           <Route path='/serviceProviderProfile/:serviceProviderID' element={<ServiceProviderProfile/>}></Route>
           <Route path='/chat' element={<ChatPage/>}></Route>
        </Routes>
    </div>
  )
}
export default UserRoutes

