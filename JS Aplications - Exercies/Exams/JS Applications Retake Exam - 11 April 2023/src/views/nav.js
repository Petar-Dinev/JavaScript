import { logout } from "../api/user.js";
import { html, render, page } from "../lib.js";

const navRoot = document.querySelector("header");

const navTemplate = (user, onLogout) => html`<a id="logo" href="/"
    ><img id="logo-img" src="./images/logo.png" alt=""
  /></a>

  <nav>
    <div>
      <a href="/catalog">Events</a>
    </div>
    ${user
      ? html`<div class="user">
          <a href="/create">Add Event</a>
          <a @click=${onLogout} href="javascript:void(0)">Logout</a>
        </div>`
      : html`
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        `}
  </nav>`;

export function updateNav(ctx, next) {
  const user = ctx.user;
  render(navTemplate(user, onLogout), navRoot);

  next()

  function onLogout() {
    logout();
    page.redirect("/");
  }
}
