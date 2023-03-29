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

  res.json({ message: "게시글", posts: posts });
};

const getFeaturedPosts = async (req, res) => {
  let featuredPosts;

  try {
    featuredPosts = await Post.findAll({ where: { featured: true } });
  } catch (err) {
    const error = new HttpError("게시물을 불러오는데에 실패했어요!", 500);
    return next(error);
  }

  res.json({ featuredPosts: featuredPosts });
};

exports.getAllPosts = getAllPosts;
exports.getFeaturedPosts = getFeaturedPosts;
