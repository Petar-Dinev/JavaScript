import { getAllOffers } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (offers) => html` <section id="dashboard">
  <h2>Job Offers</h2>
  ${offers.length > 0
    ? offers.map(offerTemplate)
    : html`<h2>No offers yet.</h2>`}
</section>`;

const offerTemplate = (offer) => html` <div class="offer">
  <img src="${offer.imageUrl}" alt="example2" />
  <p><strong>Title: </strong><span class="title">${offer.title}</span></p>
  <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
  <a class="details-btn" href="/catalog/${offer._id}">Details</a>
</div>`;

export async function showCatalog(ctx) {
  const offers = await getAllOffers();
  console.log(offers);
  ctx.render(catalogTemplate(offers));
}
