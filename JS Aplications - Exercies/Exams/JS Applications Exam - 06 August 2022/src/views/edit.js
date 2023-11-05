import { getOfferById, updateOffer } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (offer, onEdit) => html` <section id="edit">
  <div class="form" @submit=${onEdit}>
    <h2>Edit Offer</h2>
    <form class="edit-form">
      <input
        type="text"
        name="title"
        id="job-title"
        placeholder="Title"
        .value=${offer.title}
      />
      <input
        type="text"
        name="imageUrl"
        id="job-logo"
        placeholder="Company logo url"
        .value=${offer.imageUrl}
      />
      <input
        type="text"
        name="category"
        id="job-category"
        placeholder="Category"
        .value=${offer.category}
      />
      <textarea
        id="job-description"
        name="description"
        placeholder="Description"
        rows="4"
        cols="50"
        .value=${offer.description}
      ></textarea>
      <textarea
        id="job-requirements"
        name="requirements"
        placeholder="Requirements"
        rows="4"
        cols="50"
        .value=${offer.requirements}
      ></textarea>
      <input
        type="text"
        name="salary"
        id="job-salary"
        placeholder="Salary"
        .value=${offer.salary}
      />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function showEdit(ctx) {
  const offerId = ctx.params.id;
  console.log(offerId);
  const offer = await getOfferById(offerId);
  console.log(offer);

  ctx.render(editTemplate(offer, createSubmitHandler(onEdit)));

  async function onEdit({
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
      await updateOffer(offerId, {
        title,
        imageUrl,
        category,
        description,
        requirements,
        salary,
      });
      ctx.page.redirect("/catalog/" + offerId);
    } catch (err) {
      alert(err.message);
    }
  }
}
