const _ = require("lodash");

// SEARCH CONTROLLER FOR THE PROVIDED QUERY
exports.searchBlog =  _.memoize((req, res) => {
  const query = req.query.query;
  if (!query) {
    return res.status(400).json({ error: "Missing query parameter" });
  }

  const blogData = req.blogData;
  const searchResults = _.filter(blogData, (blog) =>
    _.includes(_.toLower(blog.title), _.toLower(query))
  );
  if (searchResults?.length === 0) res.json({ success: "No data Match with your string" });
  else res.json(searchResults);
});
