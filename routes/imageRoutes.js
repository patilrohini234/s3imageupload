const express = require("express");
const router = express.Router();
const { upload } = require("../services/imageService");
const { uploadImage, getSignedURL } = require("../controllers/imageController");
const withErrorHandlerAsync = require("../util/withErrorHandlerAsync");

router
  .route("/upload")
  .post(
    withErrorHandlerAsync(upload.single("appImage")),
    withErrorHandlerAsync(uploadImage)
  );
router.route("/getSignedURL/:id").get(withErrorHandlerAsync(getSignedURL));

module.exports = router;
