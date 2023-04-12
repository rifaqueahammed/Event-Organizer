import React, { useEffect, useState } from 'react'
import './Conversation.css'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { getChatServiceProvider } from '../../../../Services/User';


function Conversation({conversation,userId}) {
  const [serviceProvider,setserviceProvider] = useState('');

  useEffect(()=>{
    const friendId = conversation.members.find((m)=> m !== userId)
    getChatServiceProvider(friendId).then((response)=>{
      setserviceProvider(response.data);
    })
  },[conversation.members, userId]);

  return (
    <div className='conversation'>
      <Avatar style={{ backgroundColor: '#000' }} icon={<UserOutlined />} />
      <span className='conversationName'>{serviceProvider.companyname}</span>
    </div>
  )
}

export default Conversation
