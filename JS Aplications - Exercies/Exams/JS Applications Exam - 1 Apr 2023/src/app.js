import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showNav } from "./views/nav.js";
import { showRegister } from "./views/register.js";
import { showSearch } from "./views/search.js";

const root = document.querySelector("main");

page(decorateContext);
page(showNav)
page('/', showHome)
page('/catalog', showCatalog)
page('/catalog/:id', showDetails)
page('/create', showCreate)
page('/edit/:id', showEdit)
page('/login', showLogin)
page('/register', showRegister)
page('/search', showSearch)
page.start();

function decorateContext(ctx, next) {
  ctx.user = getUserData()
  ctx.render = mainRender
  next();
}

function mainRender(content) {
  render(content, root)
}
