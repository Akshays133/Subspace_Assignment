var express = require("express");
const blogs = require("../controllers/searchBlogController");
var router = express.Router();

/* GET THE SEARCHED BLOGS DATA. */
router.get("/api/blog-search", blogs.searchBlog);

module.exports = router;
