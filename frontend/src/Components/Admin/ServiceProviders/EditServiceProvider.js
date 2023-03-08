
import React, { useContext, useEffect, useState} from 'react'
import { ModalContext } from '../../../Store/Context/Adminside';
import {agreeServiceProvider,deleteServiceProvider,getJoinRequests,
  addServiceproiderPassword} from '../../../Services/Admin'

function EditServiceProvider() {
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const {showModal,setShowModal,serviceProvider,setServiceProviders} = useContext(ModalContext);
    
    const editServiceProvider = (status)=>{
      const id = serviceProvider;
      if(status.agree)
      {
        agreeServiceProvider(id).then((result)=>{
          if(result.data.success){
            setIsAgreed(true)
          }
        })
      }else if(status.reject){
        deleteServiceProvider(id).then((result)=>{
          if(result.data.success){
            setShowModal(false)
            getJoinRequests().then((response)=>{
              const serviceProviders = response.data;
              setServiceProviders(serviceProviders)
            })
          }
        })
      }
  }

  // Form Validation
  const validate = (password) => {
    const errors = {};
    if (!password) {
      errors.password = "Password is Required";
    } else if (password.length < 6) {
      errors.password = "Password is should atleast contain 6 characters";
    } else if (password.length >= 10) {
      errors.password = "Password is should not exceed 10 characters";
    }
    return errors;
  }

  const onSubmitPassword = (e) => {
    e.preventDefault();
    console.log(password)
    setError(validate(password));
    setIsSubmit(true);
  };

  useEffect(()=>{
    if (Object.keys(error).length === 0 && isSubmit){
       const data = {
        serviceProvider,
        password
      }
      addServiceproiderPassword(data).then((result)=>{
        if(result.data.success){
          setShowModal(false)
          getJoinRequests().then((response)=>{
            const serviceProviders = response.data;
            setServiceProviders(serviceProviders)
          })
        }
      })
    }
  })

  

    return (
    <>
    {showModal ? (
    <>
    <div className="relative bg-gray-100 rounded-lg shadow dark:bg-gray-700">
            <div className='px-6 py-6 lg:px-8'>
            <button onClick={()=>setShowModal(false)} type="button" className=" absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            </div>
             <div class="px-6 py-6 lg:px-8">
                  <div className='md:flex gap-4'>
                    <button onClick={()=>editServiceProvider({agree:true})} className="w-full md:w-2/3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Accept</button>
                    <button onClick={()=>editServiceProvider({reject:true})} type="submit" className="w-full md:w-2/3 mt-2 md:mt-0 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Reject</button>
                  </div>
            </div>
            {isAgreed && <div className="px-6 py-6 lg:px-8 grid justify-items-center">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add Initial Password</h3>
                <form className="space-y-2" onSubmit={onSubmitPassword}>
                    <div className='w-full'>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <p className="error text-red-500">{error.password}</p>
                    <button type="submit"  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Set Password</button>
                </form>
            </div>}
        </div>
  

    </>) :null}
    </>
  )
}

export default EditServiceProvider
