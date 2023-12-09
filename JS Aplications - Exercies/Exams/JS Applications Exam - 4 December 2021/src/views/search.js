import { makeSearch } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const searchTemplate = (searchAlbums, hasUser, onSearch) => html`<section
  id="searchPage"
>
  <h1>Search by Name</h1>

  <div class="search">
    <input
      id="search-input"
      type="text"
      name="search"
      placeholder="Enter desired albums's name"
    />
    <button @click=${onSearch} class="button-list">Search</button>
  </div>

  <h2>Results:</h2>

  <!--Show after click Search button-->
  <div class="search-result">
    <!--If have matches-->
    ${searchAlbums.length > 0
      ? html`${searchAlbums.map(x => albumCard(x, hasUser))}`
      : html`<p class="no-result">No result.</p>`}
  </div>
</section>`;

const albumCard = (album, hasUser) => html`<div class="card-box">
  <img src="${album.imgUrl}" />
  <div>
    <div class="text-center">
      <p class="name">Name: ${album.name}</p>
      <p class="artist">Artist: ${album.artist}</p>
      <p class="genre">Genre: ${album.genre}</p>
      <p class="price">Price: $${album.price}</p>
      <p class="date">Release Date: ${album.releaseDate}</p>
    </div>
    ${hasUser ? html`
    <div class="btn-group">
      <a href="/catalog/${album._id}" id="details">Details</a>
    </div>` : ''}
  </div>
</div>`;

export async function showSearch(ctx) {
  let searchAlbums = [];
  const hasUser = ctx.user;
  ctx.render(searchTemplate(searchAlbums, hasUser, onSearch));

  async function onSearch(e) {
    const div = e.target.parentElement;
    const input = div.children[0]
    if(input.value == '') {
      return alert('Search cant be empty string!')
    }
    const search = input.value;
    searchAlbums = await makeSearch(search)
    console.log(search);
    console.log(searchAlbums);
    ctx.render(searchTemplate(searchAlbums, hasUser, onSearch))
  }
}
