// eslint-disable-next-line import/no-extraneous-dependencies
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();
module.exports = {
  mailTransporter: nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODMAILER_EMAIL,
      pass: process.env.NODMAILER_PASS,
    },
  }),
};
