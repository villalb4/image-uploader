const express = require("express");
const router = express.Router();
const { uploadImage } = require("../modules/cloudinary");

router.post("/", async (req, res) => {
  const imageBase64 = req.body.image
  try {
    const response = await uploadImage(imageBase64);
    res.send(response);
  } catch (error) {
    res.status(500).send("Error al subir la imagen");
  }
});

module.exports = router;
