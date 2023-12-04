import { logout } from "../api/user.js";
import { html, render } from "../lib.js";

const nav = document.querySelector('header')

const navTemplate = (user, onLogout) => html`<nav>
  <section class="logo">
    <img src="./images/logo.png" alt="logo" />
  </section>
  <ul>
    <!--Users and Guest-->
    <li><a href="/">Home</a></li>
    <li><a href="/catalog">Dashboard</a></li>
    ${!user
      ? html`<li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>`
      : html` <li><a href="/create">Create Postcard</a></li>
          <li><a @click=${onLogout} href="javascript:void(0)">Logout</a></li>`}
  </ul>
</nav>`;

export function updateNav(ctx, next) {
  const user = ctx.user;

  render(navTemplate(user, onLogout), nav);
  next()

  async function onLogout() {
    await logout()
    ctx.page.redirect('/')
  }
}


