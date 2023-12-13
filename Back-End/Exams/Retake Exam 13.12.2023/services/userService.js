const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "ahgs9dgqw5jqwdw3dqwdj";

async function register(username, email, password) {
  const existing = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });
  if (existing) {
    throw new Error("Email is taken!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    hashedPassword,
  });

  return createSession(user);
}

async function login(email, password) {
  const user = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });
  if (!user) {
    throw new Error("Incorrect email or password!");
  }
  const hasMatch = await bcrypt.compare(password, user.hashedPassword);

  if (hasMatch == false) {
    throw new Error("Incorrect email or password!");
  }

  return createSession(user);
}

function createSession({ _id, username, email }) {
  const payload = {
    _id,
    email,
    username,
  };
  return jwt.sign(payload, JWT_SECRET);
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {
  register,
  login,
  verifyToken,
};
