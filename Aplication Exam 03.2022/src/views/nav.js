import { logout } from "../api/user.js";
import { render, html, page } from "../lib.js";
import { getUserData } from "../util.js";

const navMain = document.querySelector("header");

const navTemplate = (user) => html`
<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>
  <nav>
    <div>
      <a href="/dashboard">Dashboard</a>
    </div>
    ${user
      ? html`<!-- Logged-in users -->
          <div class="user">
            <a href="/create">Add Album</a>
            <a @click=${onLogout} href="javascript:void(0)">Logout</a>
          </div>`
      : html`<!-- Guest users -->
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>`}
  </nav>
`;

export function updateNav() {
  const user = getUserData();

  render(navTemplate(user), navMain);
}

function onLogout() {
  logout();
  updateNav()
  page.redirect("/");
}
