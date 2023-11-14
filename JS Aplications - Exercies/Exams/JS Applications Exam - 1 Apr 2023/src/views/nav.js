import { logout } from "../api/user.js";
import { html, render } from "../lib.js";

const navRoot = document.querySelector("header");

const navTemplate = (user, onLogout) => html` <!-- Navigation -->
  <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

  <nav>
    <div>
      <a href="/catalog">Fruits</a>
      <a href="/search">Search</a>
    </div>

    ${user
      ? html`<div class="user">
          <a href="/create">Add Fruit</a>
          <a @click=${onLogout} href="javascript:void(0)">Logout</a>
        </div>`
      : html`<div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`}
  </nav>`;

export function showNav(ctx, next) {
  const user = ctx.user;
  render(navTemplate(user, onLogout), navRoot);
  next();

  async function onLogout() {
    await logout();
    ctx.page.redirect("/");
  }
}
