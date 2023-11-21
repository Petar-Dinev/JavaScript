import { html, render } from "../lib.js"
import { logout } from "../api/userApi.js"

const navRoot = document.querySelector('header')

const navTemplate = (user, onLogout) => html`
<!-- Navigation -->
<h1><a href="/catalog">Orphelp</a></h1>

<nav>
    <a href="/catalog">Dashboard</a>
    
    ${user? html`
    <div id="user">
        <a href="/myPosts">My Posts</a>
        <a href="/create">Create Post</a>
        <a @click=${onLogout} href="javascript:void(0)">Logout</a>
    </div>`

    : html`<div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>`}
</nav>`

export function navDecorator(ctx, next) {
    const user = ctx.user

    render(navTemplate(user, onLogout), navRoot)

    next()
    
    async function onLogout() {
       await logout()
       ctx.page.redirect('/catalog')
    }
 }