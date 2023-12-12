const { Schema, model, Types } = require("mongoose");

const IMAGE_URL_PATTERN = /^https?:\/\/.+/;

const bookSchema = new Schema({
  title: {
    type: String,
    minlength: [2, "Title must be at least 2 characters long."],
  },
  author: {
    type: String,
    required: true,
    minlength: [5, "Author must be at least 5 characters long."],
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (value) => IMAGE_URL_PATTERN.test(value),
      message: "Image url must be valid.",
    },
  },
  bookReview: {
    type: String,
    required: true,
    minlength: [10, "Book review must be at least 10 characters long."],
  },
  genre: {
    type: String,
    required: true,
    minlength: [3, "Genre must be at least 3 characters long."],
  },
  stars: {
    type: Number,
    min: [1, "Stars must be at least 1"],
    max: [5, "Stars must be at most 5"],
  },
  wishingList: { type: [Types.ObjectId], ref: "User", default: [] },
  owner: { type: Types.ObjectId, ref: "User", require: true },
});

const Book = model("Book", bookSchema);

module.exports = Book;
