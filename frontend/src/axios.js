import axios from "axios";
import {baseUrl} from './Constants';

const instance = axios.create({
    baseURL: baseUrl,
  });

  
//   // Add a response interceptor
// instance.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     if (error.response) {
//       // Handle the response error
//       return Promise.reject(error.response.data);
//     } else if (error.request) {
//       // Handle the request error
//       return Promise.reject("Unable to make request. Please check your internet connection.");
//     } else {
//       // Handle the other error
//       return Promise.reject("An error occurred while processing your request.");
//     }
//   }
// );
 
export default instance;

  