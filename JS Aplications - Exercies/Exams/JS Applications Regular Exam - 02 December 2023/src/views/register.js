import { register } from "../api/user.js"
import { html } from "../lib.js"
import { createSubmitHandler } from "../utils.js"

function registerTemplate(onRegister) {
  return html`<section id="register">
          
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Register</h2>
      <form class="register-form" @submit=${onRegister}>
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
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
      <img class="border" src="./images/border.png" alt="">
    </div>
   
  </section>`
}

export function showRegister(ctx) {
  ctx.render(registerTemplate(createSubmitHandler(onRegister)))

  async function onRegister({ email, password, "re-password": rePass }) {
    if (email == '' || password == '') {
      return alert('All fields are required!')
    }
    if (password !== rePass) {
      return alert('Passwords don\'t match!')
    }

    try {
      await register(email, password)
      ctx.page.redirect('/')
    } catch (err) {
      return alert(err.message)
    }
  }
}