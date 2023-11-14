import { createFruit } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmithandler } from "../util.js";

const createTemplate = (onCreate) => html`<section id="create">
  <div class="form">
    <h2>Add Fruit</h2>
    <form class="create-form" @submit=${onCreate}>
      <input type="text" name="name" id="name" placeholder="Fruit Name" />
      <input
        type="text"
        name="imageUrl"
        id="Fruit-image"
        placeholder="Fruit Image"
      />
      <textarea
        id="fruit-description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      ></textarea>
      <textarea
        id="fruit-nutrition"
        name="nutrition"
        placeholder="Nutrition"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Add Fruit</button>
    </form>
  </div>
</section>`;

export async function showCreate(ctx) {
  ctx.render(createTemplate(createSubmithandler(onCreate)));

  async function onCreate({ name, imageUrl, description, nutrition }) {
    if (name == "" || imageUrl == "" || description == "" || nutrition == "") {
      return alert("All fields are required!");
    }
    await createFruit({
      name,
      imageUrl,
      description,
      nutrition,
    });
    ctx.page.redirect("/catalog");
  }
}
