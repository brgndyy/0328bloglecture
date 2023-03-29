const Post = require("../models/post");
const HttpError = require("../error/http-error");

const getAllPosts = async (req, res) => {
  let posts;

  try {
    posts = await Post.findAll();
  } catch (err) {
    const error = new HttpError("게시물을 불러오는데에 실패했어요!", 500);
    return next(error);
  }

  res.json({ posts: posts });
};

exports.getAllPosts = getAllPosts;
