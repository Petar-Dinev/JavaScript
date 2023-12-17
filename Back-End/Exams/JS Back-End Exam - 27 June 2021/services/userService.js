const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const secret = "asdhajsdkqiwdqnwdasdkas";

async function register(email, gender, password) {
  const existing = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });
  if (existing) {
    throw new Error("Email is taken");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ email, gender, hashedPassword });

  return createToken(user);
}

async function login(email, password) {
  const user = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });
  if (!user) {
    throw new Error("Incorrect email or password!");
  }
  const match = await bcrypt.compare(password, user.hashedPassword);
  if (!match) {
    throw new Error("Incorrect email or password!");
  }

  return createToken(user);
}

async function addTripToUser(userId, tripId) {
  const user = await User.findById(userId);
  user.trips.push(tripId)
  await user.save()
}

function createToken({ _id, email, gender }) {
  const payload = { _id, email, gender };

  return jwt.sign(payload, secret);
}

function verifyToken(token) {
  return jwt.verify(token, secret);
}
module.exports = {
  login,
  verifyToken,
  register,
  addTripToUser
};
