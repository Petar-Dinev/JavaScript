import { deleteCar, getOneCar } from "../api/data.js";
import { html } from "../lib.js";

const detailsTemplate = (car, owner, onDelete) => html`<section
  id="listing-details"
>
  <h1>Details</h1>
  <div class="details-info">
    <img src="${car.imageUrl}" />
    <hr />
    <ul class="listing-props">
      <li><span>Brand:</span>${car.brand}</li>
      <li><span>Model:</span>${car.model}</li>
      <li><span>Year:</span>${car.year}</li>
      <li><span>Price:</span>${car.price}$</li>
    </ul>

    <p class="description-para">${car.description}</p>
    ${owner
      ? html` <div class="listings-buttons">
          <a href="/edit/${car._id}" class="button-list">Edit</a>
          <a @click=${onDelete} href="javascript:void(0)" class="button-list"
            >Delete</a
          >
        </div>`
      : ""}
  </div>
</section>`;

export async function showDetails(ctx) {
  const carId = ctx.params.id;
  const car = await getOneCar(carId);
  const userId = ctx.user?._id;
  const owner = userId == car._ownerId;
  ctx.render(detailsTemplate(car, owner, onDelete));

  async function onDelete() {
    const choice = confirm("Are u sure?");
    if (choice) {
      try {
        await deleteCar(carId);
        ctx.page.redirect("/catalog");
      } catch (err) {
        return alert(err.message);
      }
    }
  }
}
