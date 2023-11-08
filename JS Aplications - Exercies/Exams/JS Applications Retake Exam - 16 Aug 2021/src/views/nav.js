import { logout } from "../api/user.js";
import { html, render } from "../lib.js"
;
const navRoot = document.querySelector("header");

const navTemplate = (user, onLogout) => html`<h1><a class="home" href="/">GamesPlay</a></h1>
  <nav>
    <a href="/catalog">All games</a>
    ${user
      ? html` <div id="user">
          <a href="/create">Create Game</a>
          <a @click=${onLogout} href="javascript:void(0)">Logout</a>
        </div>`
      : html`<div id="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`}
  </nav>`;

export function navDecorator(ctx, next) {
  const user = ctx.user;
  render(navTemplate(user, onLogout), navRoot);
  next()

  async function onLogout() {
    await logout()
    ctx.page.redirect('/')
  }
}
