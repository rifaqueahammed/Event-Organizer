/* eslint-disable no-console */
const express = require('express');
const dotenv = require("dotenv");
const http = require('http');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');
// eslint-disable-next-line import/no-extraneous-dependencies
const { Server } = require("socket.io");
const dbconnection = require("./Config/connection");
const userRouter = require('./Routes/user');
const adminRouter = require('./Routes/admin');
const serviceProviderRouter = require('./Routes/serviceProvider');
const chatRouter = require('./Routes/chat');

const app = express();
const server = http.createServer(app);
const port = 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

dotenv.config();
dbconnection();


// routers
app.use("/backend",userRouter);
app.use("/backend/admin", adminRouter);
app.use("/backend/serviceProvider", serviceProviderRouter);
app.use("/backend/chat", chatRouter);


const io = new Server(server, {
  pingTimeout:60000,
  cors: {
    origin: process.env.CLIENT_BASEURL,
    methods: ['GET', 'POST'],
  },
});

let activeUsers = [];

const addactiveUsers = (userId , socketId)=>{
  // eslint-disable-next-line no-unused-expressions
  !activeUsers.some((activeUser) => activeUser.userId === userId) && activeUsers.push({ userId, socketId });
};

const removeUser = (socketId)=>{
  // eslint-disable-next-line no-const-assign
  activeUsers = activeUsers.filter((activeUser)=> activeUser.socketId !== socketId);
};

const getUser = (userId)=>activeUsers.find((activeUser)=> activeUser.userId === userId)

io.on('connection', (socket) => {
  console.log(`a user connected ${socket.id}`);

  socket.on("new-user-add", (userId) => {
     addactiveUsers(userId,socket.id);
  });

  // send message to a specific user
  socket.on("send-message", ({ text,sender,receiver}) => {
    const user = getUser(receiver);
    if(user){
      io.to(user.socketId).emit('getMessage',{
        sender,
        text
      });
    }
  }); 

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${ socket.id}`);
    removeUser(socket.id);
  });
});



server.listen(port, () => {
    console.log(`App listening at port ${port}`);
  });
  