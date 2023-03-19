import React, { useEffect, useState } from 'react'
import { Changepassword } from '../../../Services/ServiceProvider';
import {  message } from 'antd';


function ChangePassword() {
    const [form, setForm] = useState({
        currentpassword: "",
        newpassword: "",
        confirmnewpassword:"",
      });
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
      const [error,setError] = useState('');

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

        if (!values.currentpassword) {
            errors.currentpassword = "Current Password is Required";
        }
        if (!values.newpassword) {
            errors.newpassword = "Newpassword is Required";
          } else if (values.newpassword.length < 6) {
            errors.newpassword = "Password is should atleast contain 6 characters";
          } else if (values.newpassword.length >= 10) {
            errors.newpassword = "password is should exceed 10 characters";
          }
        if (!values.confirmnewpassword) {
            errors.confirmnewpassword = "Confirm password is required";
           }else if (values.confirmnewpassword !== values.newpassword) {
            errors.confirmnewpassword = "Passwords do not match";
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
        if(Object.keys(formErrors).length === 0 && isSubmit ){
          const data = form;
          Changepassword(data).then((response)=>{
            console.log(response)
            if(response.data.updated){
                message.success("Password Changed")
            }
            else if(response.data.error){
             setError(response.data.error);
            }
          });
        }
    });

  return (
    <div>
        <div className='text-center font-semibold mb-5'><h2>Change Password</h2></div>
       <div className='m-10 mt-0 shadow-xl'>
        <form className='p-10 md:p-20' onSubmit={onSubmitForm}>
          <div className='md:flex'>
            <label className='md:p-2 whitespace-nowrap w-1/4'>Current Password:</label>
            <input type="password" value={form.currentpassword} onChange={onUpdateField} id="currentpassword" name='currentpassword' class="md:ml-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full md:w-1/2 md:p-2"></input>
          </div>
          <p className="error text-red-500 md:ml-2 whitespace-nowrap">{formErrors.currentpassword}</p>
          <p className="error text-red-500 md:ml-2 whitespace-nowrap">{error}</p>
          <div className='md:flex mt-2'>
            <label className='md:p-2 whitespace-nowrap w-1/4'>New Password:</label>
            <input type="password" value={form.newpassword} onChange={onUpdateField} id="newpassword" name='newpassword' class="md:ml-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full md:w-1/2 md:p-2"></input>
          </div>
          <p className="error text-red-500 md:ml-2 whitespace-nowrap">{formErrors.newpassword}</p>
          <div className='md:flex mt-2'>
            <label className='md:p-2 whitespace-nowrap w-1/4'>Confirm New Password:</label>
            <input type="password" value={form.confirmnewpassword} onChange={onUpdateField} id="confirmnewpassword" name='confirmnewpassword' class="md:ml-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full md:w-1/2 md:p-2"></input>
          </div>
          <p className="error text-red-500 md:ml-2 whitespace-nowrap">{formErrors.confirmnewpassword}</p>
          <button type='submit' className='bg-green-500 hover:bg-green-600 text-white font-bold w-full shadow-lg p-2 mt-10 rounded-md'>SAVE PASSWORD</button>
        </form>
       </div>
      
    </div>
  )
}

export default ChangePassword
