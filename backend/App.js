/* eslint-disable no-console */
const express = require('express');
const dotenv = require("dotenv");
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors')
const dbconnection = require("./Config/connection");

const userRouter = require('./Routes/user');
const adminRouter = require('./Routes/admin');
const serviceProviderRouter = require('./Routes/serviceProvider')


const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

dotenv.config();
dbconnection();

// routers
app.use("/",userRouter);
app.use("/admin", adminRouter);
app.use("/serviceProvider", serviceProviderRouter);


app.listen(port, () => {
    console.log(`App listening at port ${port}`);
  });
  