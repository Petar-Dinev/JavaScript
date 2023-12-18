import {render, page} from './lib.js'
import { getUserData } from './utils.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { navDecorator } from './views/nav.js';
import { showProfile } from './views/profile.js';
import { showRegister } from './views/register.js';


const root = document.getElementById('content')

page(contexDecoration)
page(navDecorator)
page('/', showHome)
page('/create', showCreate)
page('/profile', showProfile)
page('/login', showLogin)
page('/register', showRegister)
page('/:id', showDetails)
page('/:id/edit', showEdit)

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

