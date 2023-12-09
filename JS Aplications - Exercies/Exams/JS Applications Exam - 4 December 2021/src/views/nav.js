import { logout } from "../api/user.js";
import { html, render } from "../lib.js";

const navRoot = document.querySelector("header");

const navTemplate = (user, onLogout) => html`<nav>
  <img src="./images/headphones.png" />
  <a href="/">Home</a>
  <ul>
    <!--All user-->
    <li><a href="/catalog">Catalog</a></li>
    <li><a href="/search">Search</a></li>
    <!--Only guest-->
    ${!user
      ? html` <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>`
      : html`
          <li><a href="/create">Create Album</a></li>
          <li><a @click=${onLogout} href="javascript:void(0)">Logout</a></li>
        `}
  </ul>
</nav>`;

export function navDecorator(ctx, next) {
  const user = ctx.user;
  render(navTemplate(user, onLogout), navRoot);
  next();

  async function onLogout() {
    try {
      await logout();
      ctx.page.redirect("/");
    } catch (err) {
      alert(err.message);
    }
  }
}
