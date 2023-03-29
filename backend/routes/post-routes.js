const express = require("express");
const router = express.Router();
const postControllers = require("../controllers/post-controllers");

router.get("/", postControllers.getAllPosts);
router.get("/featured", postControllers.getFeaturedPosts);

module.exports = router;
