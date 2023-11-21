import {render, page} from './lib.js'
import { getUserData } from './utils.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showLogin } from './views/login.js';
import { showMyPosts } from './views/myPosts.js';
import { showRegister } from './views/register.js';
import { navDecorator } from './views/navigation.js';

const root = document.getElementById('main-content')

page(contexDecoration)
page(navDecorator)
page('/', '/catalog')
page('/catalog', showCatalog)
page('/catalog/:id', showDetails)
page('/register', showRegister)
page('/login', showLogin)
page('/create', showCreate)
page('/edit/:id', showEdit)
page('/myPosts', showMyPosts)

page.start()


function contexDecoration(ctx, next) {
    ctx.render = mainRender;
    const user = getUserData();
    ctx.user = user;
    next()
}

function mainRender(content) {
    render(content, root)
}

