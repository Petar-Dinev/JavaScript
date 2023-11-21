import { login } from '../api/userApi.js';
import {html} from '../lib.js'
import { createSubmitHandler } from '../utils.js';

const loginTemplate = (onLogin) => html` <section id="login-page" class="auth">
  <form id="login" @submit=${onLogin} >
    <h1 class="title">Login</h1>

    <article class="input-group">
      <label for="login-email">Email: </label>
      <input type="email" id="login-email" name="email" />
    </article>

    <article class="input-group">
      <label for="password">Password: </label>
      <input type="password" id="password" name="password" />
    </article>

    <input type="submit" class="btn submit-btn" value="Log In" />
  </form>
</section>`;

export function showLogin(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)))

    async function onLogin({email, password}) {
        if(email == '' || password == '') {
            return alert('All fields are required!')
        }
        try {
          await login(email, password);
          ctx.page.redirect('/catalog')
        } catch(err) {
          alert(err.message)
        }
       
    }
}
