import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { updateNav } from "./views/nav.js";
import { showRegister } from "./views/register.js";

const root = document.querySelector("main");

page(decorateContext);
page(updateNav)
page("/", showHome);
page("/catalog", showCatalog);
page("/catalog/:id", showDetails);
page('/login', showLogin)
page('/register', showRegister)
page('/create', showCreate)
page('/edit/:id', showEdit)
page.start();

function decorateContext(ctx, next) {
  const user = getUserData()
  ctx.user = user;
  ctx.render = randerMain
  next();
}

function randerMain(content) {
  render(content, root)
}
