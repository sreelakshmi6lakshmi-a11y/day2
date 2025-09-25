const mongoose=require("mongoose");

const blogschema = new mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});
const BlogModel = mongoose.model("Blog",blogschema)
//Write missing codes here
module.exports= BlogModel;