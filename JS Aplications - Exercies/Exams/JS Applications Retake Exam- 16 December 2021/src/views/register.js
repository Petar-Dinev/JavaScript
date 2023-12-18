import { register } from "../api/user.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const registerTemplate = (onRegister) => html`<section id="registerPage">
  <form class="registerForm" @submit=${onRegister} >
    <h2>Register</h2>
    <div class="on-dark">
      <label for="email">Email:</label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="steven@abv.bg"
        value=""
      />
    </div>

    <div class="on-dark">
      <label for="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="********"
        value=""
      />
    </div>

    <div class="on-dark">
      <label for="repeatPassword">Repeat Password:</label>
      <input
        id="repeatPassword"
        name="repeatPassword"
        type="password"
        placeholder="********"
        value=""
      />
    </div>

    <button class="btn" type="submit">Register</button>

    <p class="field">
      <span>If you have profile click <a href="/login">here</a></span>
    </p>
  </form>
</section>`;

export async function showRegister(ctx) {
  ctx.render(registerTemplate(createSubmitHandler(onRegister)));

  async function onRegister({email, password, repeatPassword: rePass}) {
    if(email == '' || password == '') {
        return alert('All fields are required!')
    }
    if(password != rePass) {
        return alert('Passwords don\'t match')
    }

    try {
        await register(email, password)
        ctx.page.redirect('/')
    } catch(err) {
        return alert(err)
    }
  }
}
