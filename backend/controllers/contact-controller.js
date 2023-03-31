const HttpError = require("../error/http-error");

const sendEmail = async (req, res, next) => {
  console.log("이메일 보내기 !");
};

exports.sendEmail = sendEmail;
