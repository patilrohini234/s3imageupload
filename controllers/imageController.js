const imageService = require("../services/imageService");

exports.uploadImage = async (req, res, next) => {
  console.log("In uploadImage Controller");

  const image = await imageService.uploadImage(req.file, next);
  return res.json({ image });
};

exports.getSignedURL = async (req, res, next) => {
  console.log("In getSignedURL Controller");

  const { id } = req.params;
  const url = await imageService.getSignedURL(id, next);
  return res.json({ url });
};
