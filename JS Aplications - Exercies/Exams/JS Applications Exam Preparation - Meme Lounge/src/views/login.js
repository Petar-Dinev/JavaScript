import { login } from "../api/user.js";
import { html } from "../lib.js";
import { notify } from "../notify.js";
import { createSubmitHandler } from "../util.js";

const loginTemplate = (onSubmit) => html`
  <section id="login">
    <form id="login-form" @submit=${onSubmit}>
      <div class="container">
        <h1>Login</h1>
        <label for="email">Email</label>
        <input id="email" placeholder="Enter Email" name="email" type="text" />
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          name="password"
        />
        <input type="submit" class="registerbtn button" value="Login" />
        <div class="container signin">
          <p>Dont have an account?<a href="/register">Sign up</a>.</p>
        </div>
      </div>
    </form>
  </section>
`;

export function loginView(ctx) {
  
  
  ctx.render(loginTemplate(createSubmitHandler(onSubmit)));

  async function onSubmit(data) {
    const email = data.email.trim()
    const password = data.password.trim()
    
    if(email  == '' || password == '') {
      return notify('All fields are required!')
    }
    await login(email, password)
    ctx.updateNav()
    ctx.page.redirect('/memes')
  }
}
