import { page, render } from "./lib.js"
import { getUserData } from "./utils.js"
import { showCatalog } from "./views/catalog.js"
import { showCreate } from "./views/create.js"
import { showDetails } from "./views/details.js"
import { showEdit } from "./views/edit.js"
import { showHome } from "./views/home.js"
import { showLogin } from "./views/login.js"
import { navDecorator } from "./views/nav.js"
import { showRegister } from "./views/register.js"
import { showSearch } from "./views/search.js"

const root = document.getElementById("main-content")

page(contextDecorator)
page(navDecorator)
page('/', showHome)
page('/login', showLogin)
page('/register', showRegister)
page('/catalog', showCatalog)
page('/catalog/:id', showDetails)
page('/create', showCreate)
page('/edit/:id', showEdit)
page('/search', showSearch)

page.start()


function contextDecorator(ctx, next) {
    ctx.render = mainRender;
    ctx.user = getUserData()
    next()
}

function mainRender(content) {
     render(content, root)
}