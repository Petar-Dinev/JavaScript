const { Schema, model, Types } = require("mongoose");

const email_pattern = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;

const userSchema = new Schema({
  email: {
    type: String,
    validate: {
      validator: (value) => email_pattern.test(value),
      message: "Email must contains only english letters and be valid email!",
    },
  },
  hashedPassword: { type: String, required: true },
  descriptionOfSkills: {
    type: String, required: true,
    maxlength: [40, "Description must be at most 40 characters long!"],
  },
  myAds: { type: [Types.ObjectId], ref: "Ad", default: [] },
});

userSchema.index(
  { email: 1 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
