const { register, login } = require("../services/userService");
const { parseError } = require("../util/parser");
const {hasUser, isGuest} = require('../middlewares/guards')

const authController = require("express").Router();

authController.get("/register", isGuest(), (req, res) => {
  res.render("register", {
    title: "Register page",
  });
});

authController.post("/register", isGuest(), async (req, res) => {
  try {
    if (req.body.email == "" || req.body.username == "") {
      throw new Error("All fields are required!");
    }
    if(req.body.password.length < 3) {
      throw new Error('Password must be at least 3 characters long!')
    }
    if (req.body.rePass !== req.body.password) {
      throw new Error("Passwords don't match!");
    }
    const token = await register(req.body.email, req.body.username, req.body.password);
    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    res.render("register", {
      title: "Register page",
      errors: parseError(error),
      data: {
        email: req.body.email,
        username: req.body.username,
      },
    });
  }
});

authController.get("/login", isGuest(), (req, res) => {
  res.render("login", {
    title: "Login page",
  });
});

authController.post("/login", isGuest(), async (req, res) => {
  try {
    const token = await login(req.body.email, req.body.password);
    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    res.render("login", {
      title: "Login page",
      errors: parseError(error),
      data: {
        email: req.body.email,
      },
    });
  }
});

authController.get('/logout', hasUser(), (req, res) => {
  res.clearCookie('token');
  res.redirect('/')
})

module.exports = authController;
