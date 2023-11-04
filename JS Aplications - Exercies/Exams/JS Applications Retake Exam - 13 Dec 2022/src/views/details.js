import { getAllBuys, getOwnBuys, makeBuy } from "../api/bonus.js";
import { deleteProduct, getProductById } from "../api/data.js";
import { html } from "../lib.js";

const detailsTemplate = (
  product,
  buys,
  user,
  owner,
  canBuy,
  onDelete,
  onBuy
) => html`<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${product.imageUrl}" alt="example1" />
    <p id="details-title">${product.name}</p>
    <p id="details-category">
      Category: <span id="categories">${product.category}</span>
    </p>
    <p id="details-price">
      Price: <span id="price-number">${product.price}</span>$
    </p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Bought: <span id="buys">${buys}</span> times.</h4>
        <span>${product.description}</span>
      </div>
    </div>
    ${user
      ? html` <div id="action-buttons">
          ${owner
            ? html` <a href="/edit/${product._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
                  >Delete</a
                >`
            : html`${!canBuy
                ? html`<a @click=${onBuy} href="javascript:void(0)" id="buy-btn"
                    >Buy</a
                  >`
                : ""}`}
        </div>`
      : ""}
  </div>
</section>`;

export async function showDetails(ctx) {
  const productId = ctx.params.id;
  const requests = [getProductById(productId), getAllBuys(productId)];
  const user = ctx.user;
  let canBuy = 1;
  if (user) {
    canBuy = await getOwnBuys(productId, user._id);
  }
  const [product, buys] = await Promise.all(requests);
  const owner = user._id === product._ownerId;
  ctx.render(
    detailsTemplate(product, buys, user, owner, canBuy, onDelete, onBuy)
  );

  async function onDelete() {
    const choice = confirm("Are u sure?");
    if (choice) {
      await deleteProduct(productId);
      ctx.page.redirect("/catalog");
    }
  }

  async function onBuy() {
    await makeBuy(productId);
    ctx.page.redirect("/catalog/" + productId);
  }
}
