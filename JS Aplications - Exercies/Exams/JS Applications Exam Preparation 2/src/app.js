import { page, render } from "./lib.js";
import { getUserData } from "./utils.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showMyList } from "./views/myList.js";
import { navDecorator } from "./views/nav.js";
import { showRegister } from "./views/register.js";
import { showSearch } from "./views/search.js";

const root = document.getElementById("site-content")

page(contexDecoration)
page(navDecorator)
page('/', showHome)
page('/catalog', showCatalog)
page('/catalog/:id', showDetails)
page('/register', showRegister)
page('/login', showLogin)
page('/create', showCreate)
page('/edit/:id', showEdit)
page('/myList', showMyList)
page('/search', showSearch)

page.start()

function contexDecoration(ctx, next) {
    ctx.user = getUserData()
    ctx.render = mainRender;
    next()
}
function mainRender(teplate) {
    render(teplate, root)
}