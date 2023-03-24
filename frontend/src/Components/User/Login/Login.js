import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreaters } from '../../../Store/Redux/Store/index';
import { userLogin } from '../../../Services/User';

function Login() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(true);
    const [form,setForm] = useState({
      email: "",
      password: "",
    })
    const [formErrors,setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [error,setError] = useState('');
    const dispatch = useDispatch();
    const {UserData} = bindActionCreators(actionCreaters,dispatch);

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
        errors.email = "email is required";
      }else if (
        !String(values.email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "password is required";
      }
    return errors;
   }


   useEffect(()=>{
    if (Object.keys(formErrors).length === 0 && isSubmit){
      const data = {
        email : form.email,
        password : form.password
      }
      userLogin(data).then((response) => {
      if(response.data.auth){
        localStorage.setItem("userToken",response.data.token);
        const user = {
          id:response.data.payLoad.id,
          email:response.data.payLoad.email,
          username:response.data.payLoad.username
        } 
        UserData(user)
        navigate('/user');
      }else if(response.data.error){
        setError(response.data.error)
       }
    });
   }
  });

    
  return (
    <>
    {showModal ? (
      <>
        <div className="w-screen md:w-auto justify-center items-center flex overflow-x-hidden overflow-y-auto relative inset-0 z-50 outline-none focus:outline-none">
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
              <div>
              <form onSubmit={onSubmitForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email Address
                  </label>
                  <input  value={form.email}  onChange={onUpdateField} name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email"></input>
                </div>
                <p className="error text-red-500">{formErrors.email}</p>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                  </label>
                  <input value={form.password}  onChange={onUpdateField} name="password" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"></input>
                  </div>
                  <p className="error text-red-500">{formErrors.password}</p>
                  <div className="flex items-center justify-between">
                    <button className="bg-[#513B3B]  hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                      Continue
                    </button>
                  </div>
                  <div className='text-center'>
                       <h1 className='error text-red-500 mt-5 text center'>{error}</h1>
                  </div>
              </form>
              {/* <div className='text-xl text-center font-bold'>
                <h1>OR</h1>
                <div>
                <div className="m-3">
                    <button className="border-4 w-full text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                     <i className="fa-brands fa-google"></i>
                      Continue
                    </button>
                </div>
                </div>
              </div> */}

              </div>
              
            </div>
          </div>
        </div>
      </>
    ) : null}
      
  </>
  )
}

export default Login


