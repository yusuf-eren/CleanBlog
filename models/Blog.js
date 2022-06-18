const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const path = require('path');
mongoose.pluralize(null);

const BlogSchema = new Schema({
  name: String,
  message: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
