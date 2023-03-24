import React, { Fragment, useContext, useState } from 'react'
import {  Form, Button, Input, Upload ,Spin ,message } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { addService } from '../../../Services/ServiceProvider';
import { ServiceModalContext } from '../../../Store/Context/ServiceAdditionModal';

const { TextArea } = Input;

function AddServices() {
const {showServiceModal,setShowServiceModal} = useContext(ServiceModalContext);
const [loading,setLoading] = useState(false)

const {form} = Form.useForm()

const onFinish = (values)=>{
    const data = new FormData();

    data.append("service_name", values.service_name);
    data.append("description",values.description);
    for(let i =0;i<values.images.fileList.length;i++){
      data.append("images",values.images.fileList[i].originFileObj);
    }
    const headers = {
      headers: {
          "Content-Type": "multipart/form-data",
        },
    }
    addService(data,headers).then((result)=>{
        if(result.data.success){
          setLoading(false);
          message.success("Service Added");
          setShowServiceModal(false);
        }
    })
    }
  return (
    <Fragment>
        { showServiceModal && 
                <div className='absolute inset-x-1/4 z-20 shadow-[0_4px_9px_-4px_#3b71ca] bg-gray-200 w-1/2 text-center p-5 font-Montserrat flex-col justify-center items-center backdrop-blur-sm'>
                <div className='relative' onClick={()=>setShowServiceModal(false)}><CloseOutlined className='absolute top-0 right-0 border p-1 hover:bg-gray-100 cursor-pointer'/></div>
                <h1 className='font-semibold mb-5 mt-8 md:mt-0'>Add Services</h1>
                <Form form={form} onFinish={onFinish} labelCol={{ span: 5,}}  layout="horizontal"  className='p-5 border' encType='multipart/form-data' >
                     <Form.Item  label="Service Name"  name='service_name' id='service_name'> 
                      <Input />
                    </Form.Item>   
                    <Form.Item label="Description" name='description' >
                      <TextArea rows={4} />
                   </Form.Item>
                   <div className='w-full h-auto flex justify-center items-center'><Spin spinning={loading}/></div> 
                   <Form.Item label="Select Images" name='images'>
                   <Upload multiple  listType="picture-card" accept='.jpeg,.png,.jpg' name='images'>
                      <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 5,}}>Upload</div>
                      </div>
                    </Upload>
                    </Form.Item>
                    <Form.Item className=''>
                      <Button block htmlType="submit" className='bg-green-700 text-white font-bold rounded-md' onClick={()=>setLoading(true)}>SUBMIT</Button>
                    </Form.Item>
                </Form>
                </div>
               }
    </Fragment>
  )
}

export default AddServices
