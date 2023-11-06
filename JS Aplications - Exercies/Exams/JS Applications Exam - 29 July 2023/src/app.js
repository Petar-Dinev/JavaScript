import { logout } from "./api/user.js";
import { page, render } from "./lib.js";
import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";

const root = document.querySelector("main");
document.getElementById("logoutBtn").addEventListener("click", onLogout);

page(decorateNav);
page(decorateContex);
page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/catalog", catalogView);
page("/catalog/:id", detailsView);
page("/create", createView);
page("/edit/:id", editView);
page.start();

function decorateContex(ctx, next) {
  ctx.render = mainRender;
  next();
}

function mainRender(resultTemplate) {
  render(resultTemplate, root);
}

function onLogout() {
  console.log("hi");
  logout();
  page.redirect("/");
}

function decorateNav(ctx, next) {
  function updateNav() {
    const user = sessionStorage.getItem("user");
    if (user !== null) {
      document.getElementsByClassName("user")[0].style.display = "";
      document.getElementsByClassName("guest")[0].style.display = "none";
    } else {
      document.getElementsByClassName("user")[0].style.display = "none";
      document.getElementsByClassName("guest")[0].style.display = "";
    }
  }
  updateNav()
  ctx.updateNav = updateNav;
  next();
}
