import { getAllAlbums } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (albums, hasUser) => html`<section id="catalogPage">
  <h1>All Albums</h1>

  ${albums.length > 0
    ? html`${albums.map((a) => albumTemplate(a, hasUser))}`
    : html`<p>No Albums in Catalog!</p> `}
</section>`;

const albumTemplate = (album, hasUser) => html`<div class="card-box">
  <img src="${album.imgUrl}" />
  <div>
    <div class="text-center">
      <p class="name">Name: ${album.name}</p>
      <p class="artist">Artist: ${album.artist}</p>
      <p class="genre">Genre: ${album.genre}</p>
      <p class="price">Price: $${album.price}</p>
      <p class="date">Release Date: ${album.date}</p>
    </div>
    ${hasUser
      ? html` <div class="btn-group">
          <a href="/catalog/${album._id}" id="details">Details</a>
        </div>`
      : ""}
  </div>
</div>`;

export async function showCatalog(ctx) {
  const albums = await getAllAlbums();
  console.log(albums);
  const hasUser = ctx.user;
  ctx.render(catalogTemplate(albums, hasUser));
}
