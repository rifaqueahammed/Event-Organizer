import axios from "../axios";


// request interceptor
axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("serviceproviderToken");
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
      localStorage.removeItem("serviceproviderToken");
      return Promise.reject(error.response.data);
    } 
  }
);

// service provider end points

export const serviceProviderLogin = (data)=>{
    return axios.post('/serviceProvider/login',data);
}

export const getServiceProvider = ()=>{
  return axios.get('/serviceProvider/profile');
}

export const editServiceProvider = (data)=>{
  return axios.patch('serviceProvider/editprofile',data);
}

export const Changepassword = (data)=>{
  return axios.patch('serviceProvider/changePassword',data);
}

export const addService = (data,headers)=>{
  return axios.post('serviceProvider/addService',data,headers);
}

export const getServices = ()=>{
  return axios.get('serviceprovider/getServices');
}