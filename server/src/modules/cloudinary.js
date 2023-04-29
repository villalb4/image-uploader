const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadImage = async (imageBase64) => {
  try {
    const response = await cloudinary.uploader.upload(imageBase64);
    return response;
  } catch (error) {
    throw new Error("Error al subir la imagen :", error);
  }
};

module.exports = { uploadImage };
