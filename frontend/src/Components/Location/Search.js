import React from 'react'


function Search() {
  return (
    <div className='md:absolute inset-y-1/3 md:inset-y-2/3 m-2 md:m-0'>
    <div className='w-full text-center bg-white shadow-lg shadow-gray-100/10 rounded-lg'>
      <form  className='md:flex p-4 justify-between'>
        <div>
          <input name="service_name" className="m-2 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="service_name" type="text" placeholder="Service Name"/>
        </div>
        <div className=''>
         <button type="submit" className="m-2 text-xl text-blue-700 hover:bg-blue-700 hover:text-white font-bold  py-1 px-4 border bg-white border-white-500 rounded">Search</button>
        </div>
      </form>
  </div>
</div>
  )
}

export default Search
