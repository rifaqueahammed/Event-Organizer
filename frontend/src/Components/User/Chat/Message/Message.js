import React from 'react'
import './Message.css'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function Message({message,own}) {
  return (
    <div className={own ? 'message own' : 'message'}>
        <div className='messageTop'>
        {!own && <Avatar style={{ backgroundColor: '#000' }} icon={<UserOutlined />} />}
        <p className='messageText m-2 p-2 rounded font-semibold'>{message.message}</p>
        {own && <Avatar style={{ backgroundColor: '#000' }} icon={<UserOutlined />} />}
        </div>
        <div className='text-normal text-gray-500'>{message.createdAt}</div>
      
    </div>
  )
}

export default Message
