import axios from "../axios";


// request interceptor
axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("adminToken");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      // Handle the response error
      localStorage.removeItem("adminToken");
      return Promise.reject(error.response.data);
    } 
  }
);
  
// admin end points

export const adminLogin = (data)=>{
    return axios.post('/admin/login',data);
}

export const getUsers = ()=>{
   return  axios.get('/admin/users');
}

export const getServiceProviders = ()=>{
    return axios.get('/admin/serviceProviders');
}

export const getJoinRequests = ()=>{
    return axios.get('/admin/joinRequests');
}

export const agreeServiceProvider = (id)=>{
    return axios.patch(`/admin/verifyServiceProvider/${id}`);
}

export const deleteServiceProvider = (id)=>{
    return axios.delete(`/admin/deleteServiceProvider/${id}`);
}

export const addServiceproiderPassword = (data)=>{
   return axios.patch('admin/addPassword',data);
}

export const serviceProviderControll = (data)=>{
    return axios.patch('admin/serviceProviderControll',data);
}

export const userControll = (data)=>{
    return axios.patch('admin/userControll',data);
}

export const dashboardUserCounts = ()=>{
  return axios.get('admin/dashboardUserCounts');
}

export const dashboardServiceProviderCounts = ()=>{
  return axios.get('admin/dashboardServiceProviderCounts');
}

export const dashboardPendingRequestCounts = ()=>{
  return axios.get('admin/dashboardPendingRequestCounts');
}