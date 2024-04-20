import { logout } from '../api/user.js';
import { render, html } from '../lib.js'

const navRoot = document.querySelector('header')

function navTemplate(user, onLogout) {
  return html`
  <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>
      <nav>
        <div>
          <a href="/characters">Characters</a>
        </div>
       ${user ? html`
        <!-- Logged-in users -->
        <div class="user">
          <a href="/create">Add Character</a>
          <a @click=${onLogout} href="javascript:void(0)">Logout</a>
        </div>` :
      html`
        <!-- Guest users -->
        <div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </nav>`}
  `
}

export function navDecorator(ctx, next) {
  const user = ctx.user;
  render(navTemplate(user, onLogout), navRoot)
  next()

  async function onLogout() {
    await logout()
    ctx.page.redirect('/')
  }
}