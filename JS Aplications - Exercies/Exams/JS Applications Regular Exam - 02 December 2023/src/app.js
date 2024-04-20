import { html, page, render } from "./lib.js"
import { getUserData } from "./utils.js"
import { showCatalog } from "./views/catalog.js"
import { showCreate } from "./views/create.js"
import { showDetails } from "./views/details.js"
import { showEdit } from "./views/edit.js"
import { showHome } from "./views/home.js"
import { showLogint } from "./views/login.js"
import { navDecorator } from "./views/nav.js"
import { showRegister } from "./views/register.js"

const root = document.querySelector('main')

page(contextDecoration)
page(navDecorator)
page('/', showHome)
page('/login', showLogint)
page('/register', showRegister)
page('/create', showCreate)
page('/characters', showCatalog)
page('/characters/:id', showDetails)
page('/characters/:id/edit', showEdit)
page.start()




function contextDecoration(ctx, next) {
    ctx.render = mainRender
    ctx.user = getUserData()
    next()
}



function mainRender(content) {
    render(content, root)
}