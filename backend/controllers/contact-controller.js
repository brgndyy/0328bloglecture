const HttpError = require("../error/http-error");
const nodeMailer = require("nodemailer");

const sendEmail = async (req, res, next) => {
  const { email, subject, message } = req.body;

  res.json({ email, subject, message });

  // const transporter = nodeMailer.createTransport({
  //   host : "smtp.gmail.com",
  //   port : 587,
  //   secure : false,
  //   auth : {
  //     user : GMAIL_USER,
  //     pass : APP_PASS
  //   }
  // });
};

exports.sendEmail = sendEmail;
