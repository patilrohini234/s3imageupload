class AppError {
  constructor(code, message) {
    this.message = message;
    this.code = code;
  }
}

module.exports = AppError;
