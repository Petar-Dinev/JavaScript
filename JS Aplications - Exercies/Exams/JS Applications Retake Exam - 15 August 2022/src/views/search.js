import { getSearch } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmithandler } from "../util.js";

const searchTemplate = (posts, user, onSearch) => html`<section id="search">
  <h2>Search by Brand</h2>

  <form class="search-wrapper cf" @submit=${onSearch}>
    <input
      id="#search-input"
      type="text"
      name="search"
      placeholder="Search here..."
      required
    />
    <button type="submit">Search</button>
  </form>

  <h3>Results:</h3>

  <div id="search-container">
    ${posts.length > 0
      ? html`<ul class="card-wrapper">
          ${posts.map(x => postCard(x, user))}
        </ul>`
      : html`<h2>There are no results found.</h2>`}
  </div>
</section>`;

const postCard = (post, user) => html`<li class="card">
  <img src="${post.imageUrl}" alt="travis" />
  <p><strong>Brand: </strong><span class="brand">${post.brand}</span></p>
  <p>
    <strong>Model: </strong><span class="model">${post.model}</span>
  </p>
  <p><strong>Value:</strong><span class="value">${post.value}</span>$</p>
  ${user ? html`<a class="details-btn" href="/catalog/${post._id}">Details</a>` : ''}
</li>`;

export function showSearch(ctx) {
  const user = ctx.user
  let posts = [];
  ctx.render(searchTemplate(posts, user, createSubmithandler(onSearch)));

  async function onSearch({ search }) {
    posts = await getSearch(search);
    ctx.render(searchTemplate(posts, user, createSubmithandler(onSearch)));
  }
}
