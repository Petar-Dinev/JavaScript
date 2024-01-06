import { deleteCar, getCarById } from "../api/cars.js";
import { html } from "../lib.js";

const detailsTemplate = (car, isOwner, onDelete) => html`<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${car.imageUrl}" alt="example1" />
    <p id="details-title">${car.model}</p>
    <div id="info-wrapper">
      <div id="details-description">
        <p class="price">Price: €${car.price}</p>
        <p class="weight">Weight: ${car.weight} kg</p>
        <p class="top-speed">Top Speed: ${car.speed} kph</p>
        <p id="car-description">${car.about}</p>
      </div>
      <!--Edit and Delete are only for creator-->
      ${isOwner
        ? html` <div id="action-buttons">
            <a href="/edit/${car._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
              >Delete</a
            >
          </div>`
        : ""}
    </div>
  </div>
</section>`;
export async function detailsView(ctx) {
  const carId = ctx.params.id;
  const car = await getCarById(carId);
  const isOwner = car._ownerId == ctx.user?._id;
  ctx.render(detailsTemplate(car, isOwner, onDelete));

  async function onDelete() {
    const choice = confirm("Are u sure?");
    if (choice) {
      try {
        await deleteCar(carId);
        ctx.page.redirect("/catalog");
      } catch (err) {
        alert(err.message);
      }
    }
  }
}
