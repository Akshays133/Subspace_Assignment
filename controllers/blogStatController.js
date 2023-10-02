const _ = require("lodash");

// Middleware to perform data analysis
exports.blogStats =  _.memoize((req, res, next) => {
  const blogData = req.blogData;

  const totalBlogs = blogData.length;
  const longestBlog = _.maxBy(blogData, "title.length");
  const privacyBlogs = _.filter(blogData, (blog) =>
    _.includes(_.toLower(blog.title), "privacy")
  );
  const uniqueTitles = _.uniqBy(blogData, "title");

  req.blogStats = {
    totalBlogs,
    longestBlog: longestBlog ? longestBlog.title : "",
    privacyBlogs: privacyBlogs.length,
    uniqueTitles: _.map(uniqueTitles, "title"),
  };
  // console.log(req.blogStats.uniqueTitles.length);
  next();
});


exports.returnBlog = (req, res) => {
  const blogStats = req.blogStats;
  res.json(blogStats);
};
