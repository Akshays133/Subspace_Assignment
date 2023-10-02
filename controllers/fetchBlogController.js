const { default: axios } = require("axios");

const API_URL = "https://intent-kit-16.hasura.app/api/rest/blogs";
const HASURA_ADMIN_SECRET =
  "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6";

  /// FETCHING THE BLOG FOR BOTH THE API HITTINGS
exports.fetchBlogs = async (req, res, next) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
      },
    });
    req.blogData = response.data.blogs;
    // console.log(req.blogData.length);
    next();
  } catch (error) {
    console.error("Error retrieving blog data:", error);
    res.status(500).json({ error: "Failed to retrieve blog data" });
  }
};
