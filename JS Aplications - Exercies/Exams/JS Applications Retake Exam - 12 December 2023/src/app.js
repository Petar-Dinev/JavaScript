import { render, page } from "./lib.js"
import { registerView } from "./views/register.js"
import { homeView } from "./views/home.js"
import { catalogView } from "./views/catalog.js"
import { loginView } from "./views/login.js"
import { navDecorator } from "./views/nav.js"
import { getUserData } from "./utils.js"
import { detailsView } from "./views/details.js"
import { createView } from "./views/create.js"
import { editView } from "./views/edit.js"
import { searchView } from "./views/search.js"

const root = document.getElementById('main-element')

page(contextDecorator)
page(navDecorator)
page('/index.html', '/')
page('/', homeView)
page('/catalog', catalogView)
page('/catalog/:id', detailsView)
page('/login', loginView)
page('/register', registerView)
page('/create', createView)
page('/edit/:id', editView)
page('/search', searchView)


page.start()

function mainRender(content) {
  render(content, root)
}

function contextDecorator(ctx, next) {
    ctx.render = mainRender;
    ctx.user = getUserData()
    next()
}