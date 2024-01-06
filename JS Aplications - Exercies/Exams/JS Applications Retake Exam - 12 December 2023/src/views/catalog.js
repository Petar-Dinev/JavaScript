import { getAllCars } from "../api/cars.js";
import { html } from "../lib.js";

const catalogTemplate = (cars) => html`<h3 class="heading">Our Cars</h3>
  <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${cars.length > 0
      ? html`${cars.map(carTemplate)}
  </section>`
      : html` <!-- Display an h2 if there are no posts -->
          <h3 class="nothing">Nothing to see yet</h3>`}
  </section>`;

const carTemplate = (car) => html` <div class="car">
  <img src=${car.imageUrl} alt="example1" />
  <h3 class="model">${car.model}</h3>
  <div class="specs">
    <p class="price">Price: €${car.price}</p>
    <p class="weight">Weight: ${car.weight} kg</p>
    <p class="top-speed">Top Speed: ${car.speed} kph</p>
  </div>
  <a class="details-btn" href="/catalog/${car._id}">More Info</a>
</div>`;

export async function catalogView(ctx) {
  const cars = await getAllCars();
  console.log(cars);
  ctx.render(catalogTemplate(cars));
}
