
import React from 'react'
import './Location.css';

function Location() {
  return (
    <div>
        <div className="container1 w-full shadow-lg">
           <form className="form1 flex justify-around items-center">
            <div className="box">
              <span>City/Street</span>
              <input type="text" placeholder="Location" />
            </div>
            <div className="box">
              <span>Services</span>
                {/* <div className='flex gap-10'> */}
                  <input type="text" placeholder="Search Services" />
                  {/* <button className="btn1" style={{ backgroundColor: "#193441" }}>
                    <i className="fa fa-search"></i>
                    </button> */}
                {/* </div> */}
            </div>
          </form>
      </div>
      
    </div>
  )
}

export default Location
