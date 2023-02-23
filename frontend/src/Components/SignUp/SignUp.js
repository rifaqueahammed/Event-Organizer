import React from 'react'

function SignUp() {
    const [showModal, setShowModal] = React.useState(true);
  return (
    <div>
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
                 <i class="fa-solid fa-xmark"></i>
              </button>
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h6 className="text-xl font-semibold">
                  Please Login Continue
                </h6>
              </div>

              </div>
              
              {/*body*/}
              {/* <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                 everything.
                </p>
              </div> */}
              <div>
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                    Your Name
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Your Name"></input>
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email Address
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email"></input>
                </div>
                <div class="">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                   Password
                  </label>
                  <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"></input>
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Confirm Password
                  </label>
                  <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"></input>
                </div>
                  <div class="flex items-center justify-between">
                    <button class="bg-[#513B3B]  hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Continue
                    </button>
                  </div>
              </form>
              {/* <div className='text-xl text-center font-bold'>
                <h1>OR</h1>
                <div>
                <div class="m-3">
                    <button class="border-4 w-full text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                     <i class="fa-brands fa-google"></i>
                      -Continue
                    </button>
                </div>
                </div>
              </div> */}

              </div>
              
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
      
    </div>
  )
}

export default SignUp
