import React, { Fragment, useState ,useEffect } from 'react'
import Conversation from '../Conversation/Conversation';
import Message from '../Message/Message'
import { io } from 'socket.io-client';
import {socketUrl} from '../../../../Constants';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreaters } from '../../../../Store/Redux/Store/index';
import { refreshServiceProvider ,getConversations , addMessage , getMessages} from '../../../../Services/ServiceProvider'

function Messges() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket,setSocket] = useState(null);
  const [arrivalMessage, setArrivalMessages] = useState(null);
  const serviceProviderId = useSelector(state=>state.ServiceProviderData.serviceProvider.id);
  const dispatch = useDispatch()
  const {ServiceProviderData} = bindActionCreators(actionCreaters,dispatch);
  const [conversation, setConversation] = useState([]);
  const [currentChat,setCurrentChat] = useState([]);
    

    useEffect(()=>{
      refreshServiceProvider().then((response)=>{
        ServiceProviderData(response.data);
      });
     },[ServiceProviderData]);
     
     useEffect(()=>{
      setSocket(io(socketUrl));
     },[]);


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
      if(socket){
        socket.emit('new-user-add',serviceProviderId);
      }
      },[socket,serviceProviderId]);

      

      const sendMessage = ()=>{
        const receiverId = currentChat.members.find((m)=> m !== serviceProviderId);
        socket.emit('send-message', {
          text:message,
          sender:serviceProviderId,
          receiver:receiverId
        });
        const data = {
           text:message,
           sender:serviceProviderId,
           receiver:receiverId,
           conversationId:currentChat._id
          }
          addMessage(data).then((response)=>{
            setMessage('');
            setMessages([...messages,response.data]);
          })
      };

      useEffect(()=>{
        if(currentChat._id){
          getMessages(currentChat._id).then((response)=>{
            setMessages(response.data);
          });
        }
       },[currentChat._id])

      useEffect(()=>{
        getConversations(serviceProviderId).then((response)=>{
         if(response.data.success){
          setConversation(response.data.conversation);
         }
        })
      },[serviceProviderId]);
  
  return (
    <Fragment>
  <div className='flex flex-col lg:flex-row'>
    <div className='chatMenu w-full lg:w-2/6'>
      <div className='chatMenuWrapper h-full p-5'>
        <input placeholder='Search for friends' className='p-2 w-full border-0 border-b-2'></input>
        {conversation.map((c,i)=>(
          <div onClick={()=>setCurrentChat(c)} className='shadow-lg rounded'>
            <Conversation conversation={c} serviceProviderId={serviceProviderId}/>
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
                <div><Message message={m} own={m.senderId === serviceProviderId}/></div>
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
