const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const HttpError = require("./error/http-error");
const { sequelize } = require("./models");
const postRoutes = require("./routes/post-routes");

const corsOption = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3002);

sequelize
  .sync({
    force: false,
  })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOption));
app.use(helmet());

app.use("/api/post", postRoutes);

app.use((req, res, next) => {
  const error = new HttpError("해당 페이지를 찾을 수 없어요!", 404);

  throw error;
});

app.use((req, res, next, error) => {
  res.status(error.code || 500);
  res.json({ message: error.message || "오류가 발생했어요!" });
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
