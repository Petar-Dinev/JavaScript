import { editMeme, getOneById } from "../api/data.js";
import { html } from "../lib.js";
import { notify } from "../notify.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (meme, onEdit) => html`
  <section id="edit-meme">
    <form id="edit-form" @submit=${onEdit}>
      <h1>Edit Meme</h1>
      <div class="container">
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title} />
        <label for="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter Description"
          name="description"
          .value=${meme.description}
        ></textarea
        >
        <label for="imageUrl">Image Url</label>
        <input
          id="imageUrl"
          type="text"
          placeholder="Enter Meme ImageUrl"
          name="imageUrl"
          .value=${meme.imageUrl}
        />
        <input type="submit" class="registerbtn button" value="Edit Meme" />
      </div>
    </form>
  </section>
`;

export async function editView(ctx) {
  const id = ctx.params.id;
  const meme = await getOneById(id);
  ctx.render(editTemplate(meme, createSubmitHandler(onEdit)));

  async function onEdit(data) {
    const { title, description, imageUrl } = data;
    if (!title || !description || !imageUrl) {
      return notify("All fields are required!");
    }

    await editMeme(id, title, description, imageUrl);
    ctx.page.redirect("/memes/" + id);
  }
}
