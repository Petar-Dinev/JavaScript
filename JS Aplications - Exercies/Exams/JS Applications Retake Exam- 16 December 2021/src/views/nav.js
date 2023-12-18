import { html, render } from "../lib.js";
import { logout } from "../api/user.js";

const navRoot = document.querySelector("header");

const navTemplate = (user, onLogout) => html`<nav>
  <a href="/">Theater</a>
  <ul>
    <!--Only users-->
    ${user
      ? html` <li><a href="/profile">Profile</a></li>
          <li><a href="/create">Create Event</a></li>
          <li><a href="javascript:void(0)" @click=${onLogout}>Logout</a></li>`
      : html` <!--Only guest-->
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>`}
  </ul>
</nav>`;

export function navDecorator(ctx, next) {
  const user = ctx.user;
  render(navTemplate(user, onLogout), navRoot);
  next();

  async function onLogout() {
    await logout();
    ctx.page.redirect("/");
  }
}
