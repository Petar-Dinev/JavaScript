import { createOffer } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const createTemplate = (onCreate) => html` <section id="create">
  <div class="form" @submit=${onCreate}>
    <h2>Create Offer</h2>
    <form class="create-form">
      <input type="text" name="title" id="job-title" placeholder="Title" />
      <input
        type="text"
        name="imageUrl"
        id="job-logo"
        placeholder="Company logo url"
      />
      <input
        type="text"
        name="category"
        id="job-category"
        placeholder="Category"
      />
      <textarea
        id="job-description"
        name="description"
        placeholder="Description"
        rows="4"
        cols="50"
      ></textarea>
      <textarea
        id="job-requirements"
        name="requirements"
        placeholder="Requirements"
        rows="4"
        cols="50"
      ></textarea>
      <input type="text" name="salary" id="job-salary" placeholder="Salary" />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export function showCreate(ctx) {
  ctx.render(createTemplate(createSubmitHandler(onCreate)));

  async function onCreate({
    title,
    imageUrl,
    category,
    description,
    requirements,
    salary,
  }) {
    if (
      title == "" ||
      imageUrl == "" ||
      category == "" ||
      description == "" ||
      requirements == "" ||
      salary == ""
    ) {
      return alert("All fields are required!");
    }
    try {
      await createOffer({
        title,
        imageUrl,
        category,
        description,
        requirements,
        salary,
      });
      ctx.page.redirect("/catalog");
    } catch (err) {
      alert(err.message);
    }
  }
}
