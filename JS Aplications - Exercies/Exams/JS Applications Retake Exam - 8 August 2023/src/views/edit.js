import { getOne, update } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmithandler } from "../util.js";

const editTemplate = (post, onEdit) => html`<section id="edit">
  <h2>Edit Motorcycle</h2>
  <div class="form">
    <h2>Edit Motorcycle</h2>
    <form class="edit-form" @submit=${onEdit} >
      <input
        type="text"
        name="model"
        id="model"
        placeholder="Model"
        .value=${post.model}
      />
      <input
        type="text"
        name="imageUrl"
        id="moto-image"
        placeholder="Moto Image"
        .value=${post.imageUrl}
      />
      <input
        type="number"
        name="year"
        id="year"
        placeholder="Year"
        .value=${post.year}
      />
      <input
        type="number"
        name="mileage"
        id="mileage"
        placeholder="mileage"
        .value=${post.mileage}
      />
      <input
        type="number"
        name="contact"
        id="contact"
        placeholder="contact"
        .value=${post.contact}
      />
      <textarea
        id="about"
        name="about"
        placeholder="about"
        rows="10"
        cols="50"
        .value=${post.about}
      ></textarea>
      <button type="submit">Edit Motorcycle</button>
    </form>
  </div>
</section>`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const post = await getOne(id);
  ctx.render(editTemplate(post, createSubmithandler(onEdit)));

  async function onEdit({ model, imageUrl, year, mileage, contact, about }) {
    if (
      model == "" ||
      imageUrl == "" ||
      year == "" ||
      mileage == "" ||
      contact == "" ||
      about == ""
    ) {
      return alert("All fields are required!");
    }

    await update(id, { model, imageUrl, year, mileage, contact, about });
    ctx.page.redirect("/catalog/" + id);
  }
}
