const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  createdDate: {
    type: Date,
    default: Date.now,
  },
  image: String,
  desc_uz: String,
  desc_en: String,
  desc_ru: String,
});

const Blog = model("Blog", blogSchema);

module.exports = Blog;
