import {page, render} from "./lib.js"
import { getUserData } from "./util.js";
import { showCreate } from "./views/create.js";
import { showDashboard } from "./views/dashboard.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { updateNav } from "./views/nav.js";
import { showRegister } from "./views/register.js";



const root = document.querySelector("main");

page(decorationContex)
page("index.html", "/");
page("/", showHome)
page("/dashboard", showDashboard)
page("/dashboard/:id", showDetails)
page("/edit/:id", showEdit)
page("/create", showCreate)
page("/register", showRegister)
page("/login", showLogin)


updateNav()
page.start()



function decorationContex(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData()
    ctx.user = user;

    next()
}

function renderMain(content) {
    render(content, root)
}