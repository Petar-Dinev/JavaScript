import { getAllProducts } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (products) => html` <h2>Products</h2>
  ${products.length > 0
    ? html`<section id="dashboard">${products.map(productTemplate)}</section>`
    : html`<h2>No products yet.</h2>`}`;

const productTemplate = (product) => html` <div class="product">
  <img src="${product.imageUrl}" alt="example1" />
  <p class="title">${product.name}</p>
  <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
  <a class="details-btn" href="/catalog/${product._id}">Details</a>
</div>`;

export async function showCatalog(ctx) {
  const products = await getAllProducts();
  ctx.render(catalogTemplate(products));
}
