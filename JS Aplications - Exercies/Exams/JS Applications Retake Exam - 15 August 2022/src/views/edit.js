import { editPost, getOne } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmithandler } from "../util.js";

const editTemplate = (post, onEdit) => html`<section id="edit">
  <div class="form">
    <h2>Edit item</h2>
    <form class="edit-form" @submit=${onEdit} >
      <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${post.brand} />
      <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${post.model} />
      <input
        type="text"
        name="imageUrl"
        id="shoe-img"
        placeholder="Image url"
        .value=${post.imageUrl}
      />
      <input
        type="text"
        name="release"
        id="shoe-release"
        placeholder="Release date"
        .value=${post.release}
      />
      <input
        type="text"
        name="designer"
        id="shoe-designer"
        placeholder="Designer"
        .value=${post.designer}
      />
      <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${post.value} />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function showEdit(ctx) {
  const postId = ctx.params.id;
  const post = await getOne(postId);
  ctx.render(editTemplate(post, createSubmithandler(onEdit)));

  async function onEdit({ brand, model, imageUrl, release, designer, value }) {
    if (
        brand == "" ||
        model == "" ||
        imageUrl == "" ||
        release == "" ||
        designer == "" ||
        value == ""
      ) {
        return alert("All fields are required!");
    }
    await editPost(postId, { brand, model, imageUrl, release, designer, value })
    ctx.page.redirect('/catalog' + postId)
  }
}
