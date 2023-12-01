import { getAllPosts } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (posts) => html`<section id="dashboard">
  <h2>Collectibles</h2>
  ${posts.length > 0
    ? html`<ul class="card-wrapper">
        ${posts.map(postCard)}
      </ul>`
    : html`<h2>There are no items added yet.</h2>`}
</section>`;

const postCard = (post) => html` <li class="card">
  <img src=${post.imageUrl} alt="travis" />
  <p><strong>Brand: </strong><span class="brand">${post.brand}</span></p>
  <p><strong>Model: </strong><span class="model">${post.model}</span></p>
  <p><strong>Value:</strong><span class="value">${post.value}</span>$</p>
  <a class="details-btn" href="/catalog/${post._id}">Details</a>
</li>`;

export async function showCatalog(ctx) {
  const posts = await getAllPosts();
  ctx.render(catalogTemplate(posts));
}
