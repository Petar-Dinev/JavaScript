const { Schema, model } = require("mongoose");

const EMAIL_PATTERN = /([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)/i;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => EMAIL_PATTERN.test(value),
      message: "Email must be valid!",
    },
  },
  hashedPassword: { type: String, required: true },
  firstName: {
    type: String,
    minlenght: [1, "First name must be at least 1 character long!"],
  },
  lastName: {
    type: String,
    minlenght: [1, "Last name must be at least 1 character long!"],
  },
});

userSchema.index(
  { email: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
