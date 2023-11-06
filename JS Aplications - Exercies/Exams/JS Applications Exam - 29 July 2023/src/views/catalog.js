import { getAllPosts } from "../api/post.js";
import { html } from "../lib.js";

const catalogTemplate = (posts) => html` <h2>Fun Facts</h2>
  ${posts.length > 0 ? 
    html`<section id="dashboard">
    ${posts.map(postTemplate)}
  </section>`
  : html`<h2>No Fun Facts yet.</h2>`}`;

export async function catalogView(ctx) {
  const posts = await getAllPosts()
  ctx.render(catalogTemplate(posts));
}

const postTemplate = (post) => html`
<div class="fact">
      <img src=${post.imageUrl} alt="example2" />
      <h3 class="category">${post.category}</h3>
      <p class="description">${post.description}
      </p>
      <a class="details-btn" href=${`/catalog/` + post._id}>More Info</a>
    </div>`
