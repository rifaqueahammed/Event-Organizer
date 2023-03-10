import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../../../axios'

function SignUp() {
    const navigate = useNavigate(); 
    const [form, setForm] = useState({
        companyname: "",
        email: "",
        phone:"",
      });
      const [formErrors, setFormErrors] = useState({})
      const [isSubmit, setIsSubmit] = useState(false);

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

        if (!values.companyname) {
            errors.companyname = "Company Name is Required";
        }
        if (!values.phone) {
            errors.phone = "Mobile number is required";
        }else if (values.phone.length !== 10) {
            errors.phone = "Invalid Mobile number";
          }
        if (!values.email) {
            errors.email = "email is required";
        } else if (
            !String(values.email)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              )) {
            errors.email = "Invalid email address";
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
         axios.post('/serviceProvider/joinrequest',{
            companyname :form.companyname,
            email : form.email,
            phone : form.phone,
         }).then((result)=>{
            if(result.data.success){
              navigate('/serviceprovider')
            }
         })
       }
      });

  return (
    <div className='w-full text-center  bg-gradient-to-r from-[#513B3B] to-cyan-900 rounded-lg'>
        <h1 className='font-bold text-xl text-white p-3'>Join With Event Organizer and Grow your Business</h1>
        <form onSubmit={onSubmitForm} className='md:flex p-4 justify-between'>
          <div>
            <input value={form.companyname} onChange={onUpdateField} name="companyname" className="m-2 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="companyname" type="text" placeholder="Company Name"/>
            <p className="error text-red-700">{formErrors.companyname}</p>
          </div>
          <div>
            <input value={form.email} onChange={onUpdateField} name="email" className="m-2 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email"/>
            <p className="error text-red-700">{formErrors.email}</p>
          </div>
          <div>
            <input value={form.phone} onChange={onUpdateField} name="phone" className="m-2 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" placeholder="Mobile Number"/>
            <p className="error text-red-700">{formErrors.phone}</p>
          </div>
          <div className=''>
           <button type="submit" className="m-2 text-xl text-blue-700 hover:bg-blue-700 hover:text-white font-bold  py-2 px-4 border bg-white border-white-500 rounded">Get in touch</button>
          </div>
        </form>
    </div>
  )
}

export default SignUp
