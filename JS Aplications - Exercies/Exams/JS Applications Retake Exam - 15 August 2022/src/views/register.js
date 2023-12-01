import { register } from "../api/user.js";
import { html } from "../lib.js";
import { createSubmithandler } from "../util.js";

const registerTemplate = (onRegister) => html`<section id="register">
  <div class="form">
    <h2>Register</h2>
    <form class="login-form" @submit=${onRegister}>
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
      <button type="submit">login</button>
      <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
  </div>
</section>`;

export function showRegister(ctx) {
  ctx.render(registerTemplate(createSubmithandler(onRegister)));

  async function onRegister({email, password,'re-password': repass}) {
        if(email == '' || password == '' || repass == '') {
            return alert('All fields are required!')
        }
        await register({email, password})
        ctx.page.redirect('/catalog')
  }
}
