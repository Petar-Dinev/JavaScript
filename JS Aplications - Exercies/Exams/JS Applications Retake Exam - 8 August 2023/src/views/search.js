import { getSearch } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmithandler } from "../util.js";

const searchTemplate = (result, onSearch) => html`<section id="search">
  <div class="form">
    <h4>Search</h4>
    <form class="search-form" @submit=${onSearch}>
      <input type="text" name="search" id="search-input" />
      <button class="button-list">Search</button>
    </form>
  </div>
  <h4 id="result-heading">Results:</h4>
  <div class="search-result">
    ${result.length == 0 ? html`<h2 class="no-avaliable">No result.</h2>`
    : result.map(divCard) }
  </div>
</section>`;

const divCard = (motor) => html`<div class="motorcycle">
<img src="./images/Honda Hornet.png" alt="example1" />
<h3 class="model">${motor.model}</h3>
<a class="details-btn" href="/catalog/${motor._id}">More Info</a>
</div>`

export function showSearch(ctx) {
  let result = [];
  console.log(result);
  ctx.render(searchTemplate(result, createSubmithandler(onSearch)));

  async function onSearch({ search }) {
    console.log(search);
    result = await getSearch(search);
    console.log(result);
    ctx.render(searchTemplate(result, createSubmithandler(onSearch)));
  }
}
