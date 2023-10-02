var express = require('express');
const _ = require("lodash");
const blogs = require('../controllers/blogStatController');
const search = require("../controllers/searchBlogController");
var router = express.Router();

const clearCacheAfter5 = (req, res, next) => {
  // Clear cache after 5 minutes
  setTimeout(() => {
    app.locals.memoize = {};
  }, 5 * 60 * 1000);

  next();
};

/* GET THE REQUIRED RESPONSE OF BLOG DATA. */
router.get("/blog-stats",  blogs.blogStats, clearCacheAfter5, blogs.returnBlog);


/* GET THE SEARCHED BLOGS DATA. */
router.get("/blog-search",  search.searchBlog);


module.exports = router;
