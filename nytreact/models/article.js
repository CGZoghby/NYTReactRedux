const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const articleSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  link: {
    type: String,
    required: true
  },
  //The published date and time of article
  date: {
    type: Date,
    default: Date.now,
  }
});

// This creates our model from the above schema, using mongoose's model method
const Article = mongoose.model("Article", articleSchema);

// Export the Article model
module.exports = Article;
