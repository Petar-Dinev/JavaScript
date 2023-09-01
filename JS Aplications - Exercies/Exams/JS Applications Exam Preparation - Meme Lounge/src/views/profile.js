import { getOwnMemes } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const profileTemplate = (user, myMemes) => html`
  <section id="user-profile-page" class="user-profile">
    <article class="user-info">
      <img
        id="user-avatar-url"
        alt="user-profile"
        src="${user.gender == "male"
          ? "/images/male.png"
          : "/images/female.png"}"
      />
      <div class="user-content">
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>My memes count: ${myMemes.length}</p>
      </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
      <!-- Display : If user doesn't have own memes  -->
      ${myMemes.length == 0
        ? html`<p class="no-memes">No memes in database.</p>`
        : myMemes.map(memeTemplate)}
    </div>
  </section>
`;
const memeTemplate = (meme) => html`
  <div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl} />
    <a class="button" href="/memes/${meme._id}">Details</a>
  </div>
`;

export async function profileView(ctx) {
  const user = getUserData();
  const myMemes = await getOwnMemes(user._id)
  ctx.render(profileTemplate(user, myMemes));
}
