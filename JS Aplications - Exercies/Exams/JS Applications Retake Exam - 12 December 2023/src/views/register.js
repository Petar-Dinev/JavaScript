import { register } from "../api/user.js";
import { html } from "../lib.js";
import { createSubmitHandler, setUserData } from "../utils.js";

const registerTemplate = (onLogin) => html` <section id="register">
  <div class="form">
    <h2>Register</h2>
    <form class="register-form" @submit=${onLogin}>
      <input type="text" name="email" id="register-email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="register-password"
        placeholder="password"
      />
      <input
        type="password"
        name="re-password"
        id="repeat-password"
        placeholder="repeat password"
      />
      <button type="submit">register</button>
      <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
  </div>
</section>`;

export function registerView(ctx) {
  ctx.render(registerTemplate(createSubmitHandler(onLogin)));

  async function onLogin({ email, password, "re-password": rePass }) {
    if (email == "" || password == "") {
      return alert("All fields are required!");
    }
    if (password != rePass) {
      return alert("Passwords don't match!");
    }

    try {
      const user = await register(email, password);
      setUserData(user);
      ctx.page.redirect("/");
    } catch (err) {
      alert(`In register template -> ${err.message}`);
    }
  }
}
