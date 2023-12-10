const { Schema, Types, model } = require("mongoose");

const adSchema = new Schema({
  headline: {
    type: String,
    minlength: [4, "Headline must be at least 4 characters long."],
  },
  location: {
    type: String,
    minlength: [8, "Location must be at least 8 characters long."],
  },
  companyName: {
    type: String,
    minlength: [3, "Company name must be at least 3 characters long."],
  },
  companyDescription: {
    type: String,
    required: true,
    maxlength: [40, "Company description must be at most 40 characters long."],
  },
  author: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  usersApplied: {
    type: [Types.ObjectId],
    ref: "User",
    default: [],
  },
});

const Ad = model("Ad", adSchema);

module.exports = Ad;
