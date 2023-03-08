import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {adminLogin} from '../../../Services/Admin'

function Login() {
    const [form,setForm] = useState({
        email: "",
        password: "",
      })
    const [formErrors,setFormErrors] = useState({});
    const [error,setError] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    // values updations
    const onUpdateField = (e) => {
        e.preventDefault();
        const nextFormState = {
          ...form,
          [e.target.name]: e.target.value,
        };
        setForm(nextFormState);
      };

       // Form Submission
     const onSubmitForm = (e) => {
        e.preventDefault();
        setFormErrors(validate(form));
        setIsSubmit(true);
      };
      // Form Validation
    const validate = (values) => {
        const errors = {};
  
        if(!values.email){
          errors.email = "Email is Required";
        }else if (
          !String(values.email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ) {
          errors.email = "Invalid Email Address";
        }
        if (!values.password) {
          errors.password = "Password is Required";
        }
      return errors;
     };

     useEffect(()=>{
        if (Object.keys(formErrors).length === 0 && isSubmit){
        const data = {
            email : form.email,
            password : form.password
        }
         adminLogin(data).then((response)=>{
           if(response.data.auth){
             localStorage.setItem("adminToken", response.data.token);
             navigate('/admin/home')
           }else if(response.data.error){
            setError(response.data.error)
           }
         })
       }
      });


  return (
 <div className='grid place-items-center bg-[#513B3B]'>
    <div className='flex w-2/3 font-Montserrat font-bold m-5 shadow-md rounded'>
        <div className='hidden lg:block w-full h-screen bg-black bg-opacity-40 h-screen'>
          <div className='w-full h-screen bg-cover saturate-50' style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/images/homeimage.jpg')`}}>
           <div className='text-3xl p-7 text-white italic cursor-pointer'>
             <h1 className=''>Event</h1>
             <h1 className=''>Organizer</h1>
          </div>
         </div>
        </div>
        <div className='w-full h-screen bg-white'>
            <div className='p-10 mt-10'>
                <h1 className='text-xl'>Admin Login</h1>
                <form className="bg-white mt-10" onSubmit={onSubmitForm}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email Address
                        </label>
                        <input value={form.email} onChange={onUpdateField} name="email" className="shadow appearance-none border rounded font-normal w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"></input>
                        <p className="error text-red-500">{formErrors.email}</p>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input name="password" value={form.password} onChange={onUpdateField} className="shadow appearance-none border font-normal rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********"></input>
                        <p className="error text-red-500">{formErrors.password}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-[#513B3B]  hover:bg-[#713B3B] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Continue
                        </button>
                    </div>
                    <div className='text-center'>
                       <h1 className='error text-red-500 mt-5 text center'>{error}</h1>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login
