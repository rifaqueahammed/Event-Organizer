import React, { useEffect, useState } from 'react'
import { userSignUp } from '../../../Services/User';
import {otpVerification} from '../../../Services/User'
import {  message } from 'antd';


function SignUp() {
    const [showModal, setShowModal] = useState(true);
    const [form, setForm] = useState({
      username: "",
      email: "",
      phone:"",
      password: "",
      confirmPassword: "",
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [error,setError] = useState('');
    const [otpPage,setOtpPage] = useState(false);
    const [otp,setOtp] = useState('');
    const [otperror,setOtpError] = useState('');
    
    // values updations
    const onUpdateField = (e) => {
      e.preventDefault();
      const nextFormState = {
        ...form,
        [e.target.name]: e.target.value,
      };
      setForm(nextFormState);
    };
    
    // Form Validation
    const validate = (values) => {
      const errors = {};
  
      if (!values.username) {
        errors.username = "User Name Required";
      } else if (!/^[A-Za-z\s]*$/.test(values.username)) {
        errors.username = "Username should only contain alphabets and space";
      }
      if (!values.password) {
        errors.password = "password is required";
      } else if (values.password.length < 6) {
        errors.password = "password is should atleast contain 6 characters";
      } else if (values.password.length >= 10) {
        errors.password = "password is should exceed 10 characters";
      }
      if (!values.phone) {
        errors.phone = "mobile number is required";
      }
      else if (values.phone.length !== 10) {
        errors.phone = "Invalid mobile number";
      }
      if (!values.email) {
        errors.email = "email is required";
      } else if (
        !String(values.email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.confirmPassword) {
       errors.confirmPassword = "Confirm password is required";
      }else if (values.confirmPassword !== values.password) {
       errors.confirmPassword = "Passwords do not match";
      }
  
      return errors;
    };
    
    // Form Submission
    const onSubmitForm = (e) => {
      e.preventDefault();
      setFormErrors(validate(form));
      setIsSubmit(true);
    };

  useEffect(()=>{
    if (Object.keys(formErrors).length === 0 && isSubmit){
      const data = {
        username :form.username,
        email : form.email,
        phone : form.phone,
        password : form.password
      }
      userSignUp(data).then((response) => {
      if(response.data.success){
       setOtpPage(true);
      }else if(response.data.error){
        setError(response.data.error);
      }
    });
   }
  },[form.email, form.password, form.phone, form.username, formErrors, isSubmit, setOtpPage]);

  const verifyOTP = (e)=>{
     e.preventDefault();
     const data = {
      otp:otp,
      email:form.email
     }
     otpVerification(data).then((response)=>{
        if(response.data.success){
          message.success("Plese Continue to Login");
          setShowModal(false);
        }
        else if (response.data.error){
          setOtpError(response.data.error);
          setTimeout(function () {
            setShowModal(false);
        }, 5000)
        }
     })
    
  }
return (
   <div className='w-screen md:w-auto'>
        {showModal ? (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto relative inset-0 z-50 outline-none focus:outline-none transition ease-in delay-500">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className='flex'>
              <button
                  className="p-1 ml-auto  border-0 text-black  float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                 <i className="fa-solid fa-xmark"></i>
              </button>
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h6 className="text-xl font-semibold">
                  Please Login Continue
                </h6>
              </div>
            </div>
              
              {/*body*/}
              <div>
              <div className='text-center'>
                       <h1 className='error font-bold text-red-500 mt-5 text center'>{error}</h1>
                  </div>
              {!otpPage && <form onSubmit={onSubmitForm} className="bg-white shadow-md rounded px-8 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                    Your Name
                  </label>
                  <input  value={form.username}  onChange={onUpdateField}  name="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name"></input>
                </div>
                <p className="error text-red-500">{formErrors.username}</p>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email Address
                  </label>
                  <input value={form.email}  onChange={onUpdateField}  name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"></input>
                </div>
                <p className="error text-red-500">{formErrors.email}</p>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="phone">
                    Phone
                  </label>
                  <input value={form.phone}  onChange={onUpdateField}  name="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" placeholder="Phone"></input>
                </div>
                <p className="error text-red-500">{formErrors.phone}</p>
                <div className="">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                   Password
                  </label>
                  <input value={form.password}  onChange={onUpdateField}  name="password" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******"></input>
                </div>
                <p className="error text-red-500">{formErrors.password}</p>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="confirmpassword">
                  Confirm Password
                  </label>
                  <input value={form.confirmPassword}  onChange={onUpdateField}  name="confirmPassword" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmpassword" type="password" placeholder="******"></input>
                </div>
                <p className="error">{formErrors.confirmpassword}</p>
                  <div className="flex items-center justify-between">
                    <button className="bg-[#513B3B]  hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                      Continue
                    </button>
                  </div>
              </form>}
              {otpPage && 
              <form onSubmit={verifyOTP} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="otp">
                      Enter One Time Password
                  </label>
                  <input value={otp} name="otp" onChange={(e)=>setOtp(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="otp" type="text" placeholder="Enter OTP"></input>
              </div>
              <p className="error text-red-500">{otperror}</p>
              <div className="flex items-center justify-between">
                  <button className="bg-[#513B3B]  hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                     Submit
                  </button>
             </div>
             </form>
              }
            </div>
          </div>
        </div>
      </div>
    </>
    ) : null}
  </div>
)
}

export default SignUp
