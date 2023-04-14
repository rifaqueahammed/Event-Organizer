import React, { Fragment, useState ,useEffect } from 'react'
import Conversation from '../Conversation/Conversation';
import Message from '../Message/Message'
import { io } from 'socket.io-client';
import {socketUrl} from '../../../../Constants';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreaters } from '../../../../Store/Redux/Store/index';
import { userRefresh } from '../../../../Services/User'
import { useLocation } from 'react-router-dom';
import {getConversations,addNewConversation,addMessage,getMessages} from '../../../../Services/User';

function Messges() {

  const userId = useSelector(state=>state.UserData.user.id);
  const [socket,setSocket] =useState(null);
  const dispatch = useDispatch()
  const {UserData} = bindActionCreators(actionCreaters,dispatch);
  const location = useLocation();
  const serviceProviderID = location.state.serviceProviderID;
  const [message, setMessage] = useState("");
  const [messages,setMessages] = useState([])
  const [arrivalMessage, setArrivalMessages] = useState(null);
  const [conversation, setConversation] = useState([]);
  const [currentChat,setCurrentChat] = useState([]);

 useEffect(()=>{
    if(localStorage.getItem("userToken")){
      userRefresh().then((response)=>{
        UserData(response.data)
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(()=>{
    setSocket(io(socketUrl));
   },[]);

   
 useEffect(()=>{
  if(socket){
    socket.emit('new-user-add',userId);
  }
  },[socket, userId]);

  useEffect(()=>{
    if(userId && serviceProviderID ){
      const newConversation ={
        sender:userId,
        receiver:serviceProviderID
      };
      addNewConversation(newConversation).then((response)=>{
        getConversations(userId).then((response)=>{
          if(response.data.success){
           setConversation(response.data.conversation);
          }
         })
      });
    }
  },[serviceProviderID, userId]);

   const sendMessage = (e)=>{
    e.preventDefault();
    socket.emit('send-message', {
      text:message,
      sender:userId,
      receiver:serviceProviderID
    });
    const receiverId = currentChat.members.find((m)=> m !== userId);
    const data = {
      text:message,
      sender:userId,
      receiver:receiverId,
      conversationId:currentChat._id
    }
    addMessage(data).then((response)=>{
      setMessage('');
      setMessages([...messages,response.data]);
    })
  };

  useEffect(()=>{
    if(socket){
      socket.on("getMessage", data=>{
        setArrivalMessages({
          sender:data.sender,
          message:data.text,
          sentTime: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
        })
     })
    }
   },[socket]);

   useEffect(()=>{
    if(arrivalMessage && currentChat.members.includes(arrivalMessage.sender)){
      setMessages((prev)=>[...prev,arrivalMessage]);
    }
   }, [arrivalMessage, currentChat.members])

   useEffect(()=>{
    if(currentChat._id){
      getMessages(currentChat._id).then((response)=>{
        setMessages(response.data);
      });
    }
   },[currentChat._id])

   useEffect(()=>{
     getConversations(userId).then((response)=>{
      if(response.data.success){
       setConversation(response.data.conversation);
      }
     })
   },[userId]);

   useEffect(()=>{
    console.log(currentChat)
   })

  return (
 <Fragment>
  <div className='flex flex-col lg:flex-row'>
    <div className='chatMenu w-full lg:w-2/6'>
      <div className='chatMenuWrapper h-full p-5'>
        <input placeholder='Search for friends' className='p-2 w-full border-0 border-b-2'></input>
        {conversation.map((c,i)=>(
          <div onClick={()=>setCurrentChat(c)} className='shadow-lg rounded'>
            <Conversation conversation={c} userId={userId}/>
          </div>
        ))}
      </div>
    </div>
    <div className='chatBox w-full lg:w-4/6 bg-gray-200 h-screen'>  
      <div className='chatBoxWrapper p-10 bg-gray-100 overflow-y-scroll h-5/6'>
        { currentChat ? (
          <>
            <div className='flex flex-col justify-between'>
              { messages.map((m)=>(
                <div><Message message={m} own={m.senderId === userId}/></div>
              ))}
            </div> 
          </>
        ) : (
          <span className='text-3xl text-gray-300 m-5'>Open a conversation to start a chat</span>
        )}
      </div>
      <div className='flex p-5 border-2 w-full bg-white'>
          <input value={message} onChange={(e) => setMessage(e.target.value)} className='p-2 lg:p-5 w-2/3 lg:w-3/4 shadow-lg rounded' name='text' placeholder='Write something...'></input>
          <button onClick={sendMessage} className='rounded bg-black px-5 text-white font-bold ml-5'>Send</button>
      </div>
    </div>
  </div>
</Fragment>

  )
}

export default Messges
