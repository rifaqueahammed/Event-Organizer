import React, { useState ,useEffect } from 'react'
import './Conversation.css'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { getUser } from '../../../../Services/ServiceProvider';


function Conversation({conversation,serviceProviderId}) {
  const [user,setUser] = useState('');

  useEffect(()=>{
    const userId = conversation.members.find((m)=> m !== serviceProviderId)
    getUser(userId).then((response)=>{
      setUser(response.data);
    })
  },[conversation.members, serviceProviderId]);

  return (
    <div className='conversation'>
      <Avatar style={{ backgroundColor: '#000' }} icon={<UserOutlined />} />
      <span className='conversationName'>{user.username}</span>
    </div>
  )
}

export default Conversation
