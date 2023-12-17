const { hasUser, isGuest } = require("../middlewares/guards");
const { login, register } = require("../services/userService");
const parseError = require("../utils/parseError");

const authController = require("express").Router();

authController.get("/login", isGuest(), (req, res) => {
  res.render("login", { title: "Login page" });
});

authController.post("/login", isGuest(), async (req, res) => {
  try {
    const token = await login(req.body.email, req.body.password);
    res.cookie("token", token);
    console.log('cookie maked');
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.render("login", {
      title: "Login page",
      data: { email: req.body.email },
      errors: parseError(err),
    });
  }
});

authController.get("/register", isGuest(), (req, res) => {
  res.render("register", { title: "Register page" });
});

authController.post("/register", isGuest(), async (req, res) => {
  try {
    if (req.body.password.length < 4) {
      throw new Error("Password must be at least 4 characters long!");
    }
    if (req.body.password != req.body.rePass) {
      throw new Error("Passwords don't match");
    }
    const token = await register(req.body.email, req.body.gender, req.body.password);
    res.cookie("token", token);
    res.redirect("/");
  } catch (err) {
    const isMale = req.body.gender == "male";
    res.render("register", {
      title: "Register page",
      data: {
        email: req.body.email,
        isMale,
      },
      errors: parseError(err),
    });
  }
});
authController.get("/logout", hasUser(), (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

module.exports = authController;
