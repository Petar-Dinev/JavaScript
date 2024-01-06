import { searchCar } from "../api/cars.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const searchTemplate = (cars, onSearch) => html`<section id="search">
  <div class="form">
    <h4>Search</h4>
    <form class="search-form" @submit=${onSearch}>
      <input type="text" name="search" id="search-input" />
      <button class="button-list">Search</button>
    </form>
  </div>
  <div class="search-result">
    ${cars.length == 0 ? html`<h2 class="no-avaliable">No result.</h2>` : ""}
    <!--If there are matches display a div with information about every motorcycle-->
    ${cars.map(car => carTemplate(car))}
  </div>
</section>`;

const carTemplate = (car) => html`<div class="car">
<img src="${car.imageUrl}" alt="example1" />
<h3 class="model">${car.model}</h3>
<a class="details-btn" href="/catalog/${car._id}">More Info</a>
</div>`

export function searchView(ctx) {
  let cars = [];
  ctx.render(searchTemplate(cars, createSubmitHandler(onSearch)));

  async function onSearch({ search }) {
    cars = await searchCar(search);
    ctx.render(searchTemplate(cars, createSubmitHandler(onSearch)))
  }
}
