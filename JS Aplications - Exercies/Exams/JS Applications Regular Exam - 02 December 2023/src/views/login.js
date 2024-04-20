import { login } from "../api/user.js"
import { html } from "../lib.js"
import { createSubmitHandler } from "../utils.js"

function loginTemplate(onLogin) {
  return html`<section id="login">
    <div class="form" @submit=${onLogin}>
      <img class="border" src="./images/border.png" alt="">
      <h2>Login</h2>
      <form class="login-form">
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
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>`
}

export function showLogint(ctx) {
  ctx.render(loginTemplate(createSubmitHandler(onLogin)))

  async function onLogin({ email, password }) {
    console.log(email, password);
    if (email == '' || password == '') {
      return alert('Email and Password are required!')
    }

    try {
      console.log('hi');
      await login(email, password)
      ctx.page.redirect('/')
    } catch (err) {
      return alert(err)
    }
  }
}