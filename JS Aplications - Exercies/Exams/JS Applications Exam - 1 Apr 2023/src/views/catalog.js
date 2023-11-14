import { getAllFruits } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (fruits) => html`<h2>Fruits</h2>
  ${fruits.length == 0
    ? html`<h2>No fruit info yet.</h2>`
    : html`<section id="dashboard">${fruits.map(fruitCard)}</section>`}`;

const fruitCard = (fruit) => html`<div class="fruit">
  <img src="${fruit.imageUrl}" alt="example1" />
  <h3 class="title">${fruit.name}</h3>
  <p class="description">${fruit.description}</p>
  <a class="details-btn" href="/catalog/${fruit._id}">More Info</a>
</div>`;

export async function showCatalog(ctx) {
  const fruits = await getAllFruits();

  ctx.render(catalogTemplate(fruits));
}
