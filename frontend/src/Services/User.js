import axios from "../axios";


// request interceptor
axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("userToken");
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
      localStorage.removeItem("userToken");
      return Promise.reject(error.response.data);
    } 
  }
);

// user end points

export const userLogin = (data)=>{
  return axios.post('/login',data);
}

export const userSignUp = (data)=>{
  return axios.post('/signUp',data);
}

export const otpVerification = (data)=>{
  return axios.post('/verifyOtp',data);
}

// export const userhomePage = (userId)=>{
//   return axios.get(`/userhome/${userId}`);
// }