import { deleteById, getOne } from "../api/data.js";
import { html } from "../lib.js";

const detailsTemplate = (post, owner, onDelete) => html`<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${post.imageUrl} alt="example1" />
    <p id="details-title">${post.model}</p>
    <div id="info-wrapper">
      <div id="details-description">
        <p class="year">Year: ${post.year}</p>
        <p class="mileage">Mileage: ${post.mileage} km.</p>
        <p class="contact">Contact Number: ${post.contact}</p>
        <p id="motorcycle-description">${post.about}</p>
      </div>
      ${owner
        ? html`<div id="action-buttons">
            <a href="/edit/${post._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
              >Delete</a
            >
          </div>`
        : ""}
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  const user = ctx.user;
  const postId = ctx.params.id;
  const post = await getOne(postId);
  const owner = user?._id == post._ownerId;
  ctx.render(detailsTemplate(post, owner, onDelete));

  async function onDelete() {
    const choise = confirm("Are u sure?");
    if (choise) {
      await deleteById(postId);
      ctx.page.redirect("/catalog");
    }
  }
}
