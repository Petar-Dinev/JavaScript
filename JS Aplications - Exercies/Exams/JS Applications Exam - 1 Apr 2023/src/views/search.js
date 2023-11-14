import { makeSearch } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmithandler } from "../util.js";

const serachTemplate = (result, onSearch) => html`<section id="search">
  <div class="form">
    <h2>Search</h2>
    <form class="search-form" @submit=${onSearch} >
      <input type="text" name="search" id="search-input" />
      <button class="button-list">Search</button>
    </form>
  </div>
  <h4>Results:</h4>
  <div class="search-result">
    ${result.length > 0 ? result.map(fruitCard) : html`
    <p class="no-result">No result.</p>`}
    <!--If there are matches display a div with information about every fruit-->
    
  </div>
</section>`;

const fruitCard = (fruit) => html`<div class="fruit">
<img src="${fruit.imageUrl}" alt="example1" />
<h3 class="title">${fruit.name}</h3>
<p class="description">${fruit.description}
</p>
<a class="details-btn" href="/catalog/${fruit._id}">More Info</a>
</div>`

export async function showSearch(ctx) {
  let result = "";
  ctx.render(serachTemplate(result, createSubmithandler(onSearch)));

  async function onSearch({ search }) {
    console.log(search);
    result = await makeSearch(search);
    console.log(result);
    ctx.render(serachTemplate(result, createSubmithandler(onSearch)));
  }
}
