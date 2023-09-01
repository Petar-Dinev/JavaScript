import { deleteMeme, getOneById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (meme, user, isOwner, onDelete) => html`
  <section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
      <div class="meme-img">
        <img alt="meme-alt" src="${meme.imageUrl}" />
      </div>
      <div class="meme-description">
        <h2>Meme Description</h2>
        <p>${meme.description}</p>
        ${user && isOwner
          ? html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
              <button @click=${onDelete} class="button danger">Delete</button>`
          : ""}
      </div>
    </div>
  </section>
`;

export async function detailsView(ctx) {
  const id = ctx.params.id;
  const meme = await getOneById(id);
  const user = getUserData();
  const isOwner = user?._id == meme._ownerId
  ctx.render(detailsTemplate(meme, user, isOwner, onDelete));

  async function onDelete() {
    const choise = confirm('Are u sure?');
    if(choise) {
      await deleteMeme(id)
      ctx.page.redirect('/memes')
    }
  }
}
