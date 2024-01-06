import { createCar } from "../api/cars.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const createTemplate = (onCreate) => html` <section id="create">
  <div class="form form-auto">
    <h2>Share Your Car</h2>
    <form class="create-form" @submit=${onCreate} >
      <input type="text" name="model" id="model" placeholder="Model" />
      <input
        type="text"
        name="imageUrl"
        id="car-image"
        placeholder="Your Car Image URL"
      />
      <input type="text" name="price" id="price" placeholder="Price in Euro" />
      <input
        type="number"
        name="weight"
        id="weight"
        placeholder="Weight in Kg"
      />
      <input
        type="text"
        name="speed"
        id="speed"
        placeholder="Top Speed in Kmh"
      />
      <textarea
        id="about"
        name="about"
        placeholder="More About The Car"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Add</button>
    </form>
  </div>
</section>`;

export function createView(ctx) {
  ctx.render(createTemplate(createSubmitHandler(onCreate)));

  async function onCreate({ model, imageUrl, price, weight, speed, about }) {
    if (
      model == "" ||
      imageUrl == "" ||
      price == "" ||
      weight == "" ||
      speed == "" ||
      about == ""
    ) {
      return alert("All fields are required!");
    }

    try {
      await createCar({
        model,
        imageUrl,
        price,
        weight,
        speed,
        about,
      });
      ctx.page.redirect("/catalog");
    } catch (err) {
      alert(err.message);
    }
  }
}
