import { login } from "../api/user.js";
import { html } from "../lib.js";
import { createSubmitHandler, setUserData } from "../utils.js";

const loginTemplate = (onLogin) => html` <section id="login">
  <div class="form">
    <h2>Login</h2>
    <form class="login-form" @submit=${onLogin}>
      <input type="text" name="email" id="email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button type="submit">login</button>
      <p class="message">
        Not registered? <a href="/register">Create an account</a>
      </p>
    </form>
  </div>
</section>`;

export function loginView(ctx) {
  ctx.render(loginTemplate(createSubmitHandler(onLogin)));

  async function onLogin({ email, password }) {
    if (email == "" || password == "") {
      return alert("All fields are required!");
    }

    try {
      const user = await login(email, password);
      setUserData(user);
      ctx.page.redirect("/");
    } catch (err) {
      alert(`In login template ->  ${err.message}`);
    }
  }
}
