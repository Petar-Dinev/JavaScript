import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (posts) => html` <h2>Available Motorcycles</h2>
  ${posts.length > 0
    ? html`<section id="dashboard">
        ${posts.map(postCard)}
      </section>`
    : html` <h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}`;

const postCard = (post) => html`<div class="motorcycle">
  <img src="${post.imageUrl}" alt="example1" />
  <h3 class="model">${post.model}</h3>
  <p class="year">Year: ${post.year}</p>
  <p class="mileage">Mileage: ${post.mileage} km.</p>
  <p class="contact">Contact Number: ${post.contact}</p>
  <a class="details-btn" href="/catalog/${post._id}">More Info</a>
</div>`;

export async function showCatalog(ctx) {
  const posts = await getAll()
  ctx.render(catalogTemplate(posts));
}
