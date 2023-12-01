import { login } from "../api/user.js";
import { html } from "../lib.js";
import { createSubmithandler } from "../util.js";

const loginTemplate = (onLogin) => html`<section id="login">
<div class="form">
  <h2>Login</h2>
  <form class="login-form" @submit=${onLogin} >
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
</section>`

export function showLogin(ctx) {
    ctx.render(loginTemplate(createSubmithandler(onLogin)))

    async function onLogin({email, password}) {
        if (email == '' || password == '') {
            return alert('All fields are required!')
        }
        await login(email, password)
        ctx.page.redirect('/catalog')
    }
}