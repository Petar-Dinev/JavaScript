import { logout } from "../api/user.js";
import { html, render } from "../lib.js";

const navRoot = document.querySelector("header");

const navTemplate = (user, onLogout) => html`
  <nav>
    <a class="active" href="/">Home</a>
    <a href="/catalog">All Listings</a>
    <a href="/search">By Year</a>
    ${!user
      ? html`<div id="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`
      : html`<div id="profile">
          <a>Welcome ${user.username}</a>
          <a href="/myList">My Listings</a>
          <a href="/create">Create Listing</a>
          <a @click=${onLogout} href="javascript:void(0)">Logout</a>
        </div>`}
  </nav>
`;

export function navDecorator(ctx, next) {
  const user = ctx.user;
  render(navTemplate(user, onLogout), navRoot);
  next();

  async function onLogout() {
    await logout();
    ctx.page.redirect("/");
  }
}
