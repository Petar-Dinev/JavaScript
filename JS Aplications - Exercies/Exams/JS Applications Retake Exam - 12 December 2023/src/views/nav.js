import { html, render } from "../lib.js";
import { logout } from "../api/user.js";
import { clearUserData } from "../utils.js";

const navRoot = document.querySelector("header");

const navTemplate = (user, onLogout) => html` <a id="logo" href="/"
    ><img id="logo-car" src="./images/car-logo.png" alt="img"
  /></a>
  <nav>
    <div>
      <a href="/catalog">Our Cars</a>
      <a href="/search">Search</a>
    </div>
    ${user
      ? html` <!-- Logged-in users -->
          <div class="user">
            <a href="/create">Add Your Car</a>
            <a @click=${onLogout} href="javascript:void(0)">Logout</a>
          </div>`
      : html` <!-- Guest users -->
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>`}
  </nav>`;

export function navDecorator(ctx, next) {
  const user = ctx.user;
  render(navTemplate(user, onLogout), navRoot);
  next();

  async function onLogout() {
    try {
      await logout();
      clearUserData()
      ctx.page.redirect("/");
    } catch (err) {
      alert(err.message);
    }
  }
}
