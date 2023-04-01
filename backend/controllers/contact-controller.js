const HttpError = require("../error/http-error");
const nodeMailer = require("nodemailer");

const sendEmail = async (req, res, next) => {
  const { email, subject, message } = req.body;

  try {
    const transporter = await nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.APP_PASS,
      },
    });

    let mailOptions = {
      from: email, //송신할 이메일
      to: "brgndy96@gmail.com", //수신할 이메일
      subject: subject,
      html: message,
    };
    await transporter.sendMail(mailOptions);
  } catch (err) {
    const error = new HttpError("이메일을 보내는데 실패 했어요!", 503);
    return next(error);
  }

  res.json({ message: "이메일 전송이 완료 되었어요!" });
};

exports.sendEmail = sendEmail;
