import React, { useContext, useEffect, useState } from 'react'
import { Card, Button} from 'antd';
import { ServiceModalContext } from '../../../Store/Context/ServiceAdditionModal';
import AddServices from './AddServices';
import { getServices } from '../../../Services/ServiceProvider';
const { Meta } = Card;

function Services() {
     
const {showServiceModal,setShowServiceModal} = useContext(ServiceModalContext);
const [services,setServices] = useState([]);

useEffect(()=>{
  getServices().then((response)=>{
    setServices(response.data)
  })
},[])


  return (
    <div className='relative font-Montserrat'>
        <div className='text-center font-semibold mb-5'><h2>Services</h2></div>
        <Button onClick={()=>setShowServiceModal(true)} type='button' className='absolute top-10 right-10 bg-green-700 text-white text-md font-bold'>ADD SERVICE</Button>
         {showServiceModal && <div className='fixed bg-black inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-20'><AddServices/></div>}
        <div className='m-5 mt-10 md:shadow-xl grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center'>
        {services.map((service,i)=>(
          <div className='p-5 '>
             <Card hoverable style={{width: 280,}}
               cover={<img alt="example" style={{  height: 280 }} src={service.images[0].path} />}>
              <Meta title={service.name}/>
              </Card>
          </div>
          ))}
       </div>
    </div>
  )
}

export default Services
