const AppError = require("./appError");

module.exports = (err, req, res, next) => {
  if (err instanceof AppError) {
    res.status(err.code).json({
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Oh snap! Our service is not working...",
    });
  }
};
