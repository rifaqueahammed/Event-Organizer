import React, { useState } from 'react'

function EditServiceProvider() {
    const [showModal, setShowModal] = useState(true);

  return (
   <div>
     {showModal ? (
      <>
        <div className="w-screen md:w-auto justify-center items-center flex overflow-x-hidden overflow-y-auto relative inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              
              <button
                  className="p-1 ml-auto  border-0 text-black  float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                 <i className="fa-solid fa-xmark"></i>
              </button>

              <div className='flex flex-col'>
                <div className=''>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-2/3'>Accept</button>
                </div>
                <div className=''> 
                <button className='w-2/3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Reject</button>
                </div>
                <div>
                <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                  </label>
                  <input  name="password" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"></input>
                  <p className="text-red-500 text-xs italic">Please Enter your password.</p>
                  </div>
                  {/* <p className="error text-red-500">{formErrors.password}</p> */}
              </form>
                </div>

              </div>
              
            </div>
          </div>
        </div>
      </>
    ) : null}
      

   </div>
  )
}

export default EditServiceProvider
