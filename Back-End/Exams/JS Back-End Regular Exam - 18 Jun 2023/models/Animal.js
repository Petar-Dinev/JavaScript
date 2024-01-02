const { Schema, model, Types } = require("mongoose");

const IMAGE_URL_PATTERN = /https?:\/\/.+/i;

const animalSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, "Name must be at least 2 characters long!"],
  },
  years: {
    type: Number,
    required: true,
    min: [1, "Years can be from 1 to 100!"],
    max: [100, "Years can be from 1 to 100!"],
  },
  kind: {
    type: String,
    required: true,
    minlength: [3, "Kind must be at least 3 characters long!"],
  },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => IMAGE_URL_PATTERN.test(value),
      message: "Image url must be valid!",
    },
  },
  need: {
    type: String,
    required: true,
    minlength: [3, "Need must be at least 2 characters long!"],
    maxlength: [20, "Need must be at most 20 characters long!"],
  },
  location: {
    type: String,
    required: true,
    minlength: [5, "Location must be at least 5 characters long!"],
    maxlength: [15, "Location must be at most 15 characters long!"],
  },
  description: {
    type: String,
    required: true,
    minlength: [5, "Description must be at least 5 characters long!"],
    maxlength: [50, "Description must be at most 50 characters long!"],
  },
  donations: { type: [Types.ObjectId], ref: "User", default: [] },
  owner: { type: Types.ObjectId, ref: "User", required: true },
});

const Animal = model("Animal", animalSchema);

module.exports = Animal;
