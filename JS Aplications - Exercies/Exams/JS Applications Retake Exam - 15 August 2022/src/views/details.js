import { deletePost, getOne } from "../api/data.js";
import { html } from "../lib.js";

const detailsTemplate = (post, owner, onDelete) => html`<section id="details">
  <div id="details-wrapper">
    <p id="details-title">Shoe Details</p>
    <div id="img-wrapper">
      <img src="${post.imageUrl}" alt="example1" />
    </div>
    <div id="info-wrapper">
      <p>Brand: <span id="details-brand">${post.brand}</span></p>
      <p>Model: <span id="details-model">${post.model}</span></p>
      <p>Release date: <span id="details-release">${post.release}</span></p>
      <p>Designer: <span id="details-designer">${post.designer}</span></p>
      <p>Value: <span id="details-value">${post.value}</span></p>
    </div>

    ${owner ? html`<div id="action-buttons">
      <a href="/edit/${post._id}" id="edit-btn">Edit</a>
      <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
    </div>` : ''}
    
  </div>
</section>`;

export async function showDetails(ctx) {
    const postId = ctx.params.id;
    const post = await getOne(postId)
    const user = ctx.user;
    const owner = user?._id == post._ownerId;
  ctx.render(detailsTemplate(post, owner, onDelete));

  async function onDelete() {
    const choise = confirm('Are u sure?')
    if(choise) {
        await deletePost(postId)
        ctx.page.redirect('/catalog')
    }
  }
}
