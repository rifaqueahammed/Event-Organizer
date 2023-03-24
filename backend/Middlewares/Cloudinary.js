/* eslint-disable import/no-extraneous-dependencies */
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
    cloud_name: process.env.YOUR_CLOUD_NAME,
    api_key:  process.env.YOUR_API_KEY,
    api_secret: process.env.YOUR_API_SECRET,
  });

  const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "EventOrganizer",
      allowedFormats: ['jpeg', 'png', 'jpg'],
    },
  });
  
  const upload = multer({ storage });

    module.exports = upload;