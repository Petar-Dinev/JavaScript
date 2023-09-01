import { logout } from "./api/user.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { profileView } from "./views/profile.js";
import { registerView } from "./views/register.js";

const main = document.querySelector('main')
document.querySelector('#logoutBtn').addEventListener('click', onLogout);

page(decorateContext)
page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/profile", profileView);
page("/create", createView);
page("/memes", catalogView);
page("/memes/:id", detailsView);
page("/edit/:id", editView);

updateNav()
page.start();

function decorateContext(ctx, next) {
  ctx.render = renderMain;
  ctx.updateNav = updateNav;
  next()
}

function renderMain(templateResult) {
    render(templateResult, main)
}

function updateNav() {
    const user = getUserData();

    if(user) {
      document.querySelector('.user').style.display = 'block'
      document.querySelector('.guest').style.display = 'none'
      document.querySelector('.user span').textContent = `Welcome ${user.email}`
    } else {
        document.querySelector('.user').style.display = 'none'
        document.querySelector('.guest').style.display = 'block'
    }
}

async function onLogout() {
    await logout();
    updateNav()
    page.redirect('/')
}

