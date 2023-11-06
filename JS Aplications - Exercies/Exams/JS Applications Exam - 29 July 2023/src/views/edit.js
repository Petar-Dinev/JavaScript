import { editPost, getOnePost } from "../api/post.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (post, onEdit) => html` <section id="edit">
  <div class="form">
    <h2>Edit Fact</h2>
    <form class="edit-form" @submit=${onEdit}>
      <input
        type="text"
        name="category"
        id="category"
        placeholder="Category"
        .value=${post.category}
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value=${post.imageUrl}
      />
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
        .value=${post.description}
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="10"
        cols="50"
        .value=${post.moreInfo}
      ></textarea>
      <button type="submit">Post</button>
    </form>
  </div>
</section>`;

export async function editView(ctx) {
  const id = ctx.params.id;
  const post = await getOnePost(id);
  ctx.render(editTemplate(post, createSubmitHandler(onEdit)));

  async function onEdit(data) {
    console.log(data);
    console.log(id);
    const {
      category,
      "image-url": imageUrl,
      description,
      "additional-info": moreInfo,
    } = data;
    if (
      category == "" ||
      imageUrl == "" ||
      description == "" ||
      moreInfo == ""
    ) {
      return alert('All fields are required!')
    }
    await editPost(id, { category, imageUrl, description, moreInfo });
    ctx.page.redirect("/catalog/" + id);
  }
}
