import { getCarsByYear } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const searchTemplate = (cars, onSearch) => html`<section id="search-cars">
  <h1>Filter by year</h1>

  <div class="container">
    <input
      id="search-input"
      type="text"
      name="search"
      placeholder="Enter desired production year"
    />
    <button @click=${onSearch} class="button-list">Search</button>
  </div>

  <h2>Results:</h2>
  <div class="listings">
    <!-- Display all records -->
    ${cars.length > 0
      ? html` ${cars.map(carTemplate)}`
      : html` <p class="no-cars">No results.</p>`}
  </div>
</section>`;

const carTemplate = (car) => html` <div class="listing">
  <div class="preview">
    <img src="${car.imageUrl}" />
  </div>
  <h2>${`${car.brand} ${car.model}`}</h2>
  <div class="info">
    <div class="data-info">
      <h3>Year: ${car.year}</h3>
      <h3>Price: ${car.price} $</h3>
    </div>
    <div class="data-buttons">
      <a href="/catalog/${car._id}" class="button-carDetails">Details</a>
    </div>
  </div>
</div>`;

export function showSearch(ctx) {
  let cars = [];

  ctx.render(searchTemplate(cars, onSearch));

  async function onSearch(e) {
    console.log(e.target.parentElement.children[0].value);
    const search = e.target.parentElement.children[0].value;
    try {
      cars = await getCarsByYear(search);
      console.log(cars);
      ctx.render(searchTemplate(cars, onSearch));
    } catch (err) {
      alert(err.message);
    }
  }
}
