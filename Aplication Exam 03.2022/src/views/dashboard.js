import { getAllAlbums } from "../api/data.js";
import { html } from "../lib.js";

const albumCardTemplate = (album) => html`
  <li class="card">
    <img src=${album.imageUrl} alt="travis" />
    <p>
      <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
    </p>
    <p>
      <strong>Album name: </strong><span class="album">${album.album}</span>
    </p>
    <p>
      <strong>Sales:</strong
      ><span class="sales">${album.sales}</span>
    </p>
    <a class="details-btn" href="/dashboard/${album._id}">Details</a>
  </li>
`;

const dashboardTemplate = (albums) => html`
  <section id="dashboard">
    <h2>Albums</h2>
    ${albums.length != 0
      ? html` <ul class="card-wrapper">
          ${albums.map(albumCardTemplate)}
        </ul>`
      : html`<h2>There are no albums added yet.</h2>`}
  </section>
`;

export async function showDashboard(ctx) {
  const albums = await getAllAlbums();
  ctx.render(dashboardTemplate(albums));
}
