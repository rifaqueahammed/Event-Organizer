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
        <div className='flex h-screen'>
            <div className='chatMenu w-2/6 '>
                <div className='chatMenuWrapper h-full p-5'>
                 <input placeholder='Search for friends' className='p-2 w-full border-0 border-b-2'></input>
                 {conversation.map((c,i)=>(
                  <div onClick={()=>setCurrentChat(c)}>
                    <Conversation conversation={c} serviceProviderId={serviceProviderId}/>
                  </div>
                  ))}
                </div>
            </div>
            <div className='chatBox w-4/6 bg-white shadow-lg h-screen relative'> 
                 <div className='chatBoxWrapper p-10 h-full overflow-y-scroll'>
                  { currentChat ?
                 (<><div className='flex flex-col justify-between'>
                     { messages.map((m)=>(
                     <div><Message message={m} own={m.senderId === serviceProviderId}/></div>
                     ))}
                   </div> 
                <div className='flex justify-between m-5 border-1'>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='p-1 w-3/4 shadow-lg bg-gray-300 rounded ' name='text' placeholder='Write something...'></textarea>
                  <button onClick={sendMessage} className='rounded bg-black px-5 text-white font-bold'>Send</button>
                </div></>) :(<span className='text-3xl text-gray-300 m-5'>Open a conversation to start a chat</span>)
                    }
                 </div>
            </div>

        </div>
    </Fragment>
  )
}

export default Messges
