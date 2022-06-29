const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const uuid = require("uuid").v4;
const ImageInfo = require("../models/imageinfo");
const AppError = require("../util/appError");

const s3 = new aws.S3({
  apiVersion: "2006-03-01",
  signatureVersion: "v4",
});

exports.upload = multer({
  storage: multerS3({
    s3,
    bucket: "imageupload12",
    metadata: (req, file, cb) => {
      cb(null, { fieldname: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, `${uuid()}${file.originalname}`);
    },
  }),
});

exports.getSignedURL = async (id) => {
  console.log("In getSignedURL Service");

  const info = await ImageInfo.findByPk(id);
  console.log(info);
  if (!info) {
    throw new AppError(404, `Cannot find image with ${id} id`);
  }
  const { key } = info;
  var attributes = {
    Bucket: "imageupload12",
    Key: key,
  };
  var url = s3.getSignedUrl("getObject", attributes);
  return url;
};

exports.uploadImage = async ({ key, location, originalname }) => {
  console.log("In uploadImage Service");

  const image = await ImageInfo.create({
    key,
    originalname,
    location,
  });

  if (!image) {
    throw new AppError(404, `Cannot add image in data with key ${key} `);
  }
  return image;
};
