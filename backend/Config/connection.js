/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require("mongoose");

module.exports = () => {
    const uri = process.env.MONGO_URI;
    mongoose
      .connect(uri)
      .then(() => {
        console.log(`Databse connected`);
      })
      .catch((err) => {
        console.log(`Database connection failed : ${err}`);
      });
  };