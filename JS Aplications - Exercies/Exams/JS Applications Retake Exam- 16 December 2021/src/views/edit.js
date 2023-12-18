import { editTheater, getTheaterById } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (theater, onEdit) => html`<section id="editPage">
  <form class="theater-form" @submit=${onEdit} >
    <h1>Edit Theater</h1>
    <div>
      <label for="title">Title:</label>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Theater name"
        .value="${theater.title}"
      />
    </div>
    <div>
      <label for="date">Date:</label>
      <input
        id="date"
        name="date"
        type="text"
        placeholder="Month Day, Year"
        .value="${theater.date}"
      />
    </div>
    <div>
      <label for="author">Author:</label>
      <input
        id="author"
        name="author"
        type="text"
        placeholder="Author"
        .value="${theater.author}"
      />
    </div>
    <div>
      <label for="description">Theater Description:</label>
      <textarea id="description" name="description" placeholder="Description">
${theater.description}</textarea
      >
    </div>
    <div>
      <label for="imageUrl">Image url:</label>
      <input
        id="imageUrl"
        name="imageUrl"
        type="text"
        placeholder="Image Url"
        value="${theater.imageUrl}"
      />
    </div>
    <button class="btn" type="submit">Submit</button>
  </form>
</section>`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const theater = await getTheaterById(id);

  ctx.render(editTemplate(theater, createSubmitHandler(onEdit)));

  async function onEdit({ title, date, author, description, imageUrl }) {
    if (
      title == "" ||
      date == "" ||
      author == "" ||
      description == "" ||
      imageUrl == ""
    ) {
      console.log('hi');
      return alert("All fields are required!");
    }

    try {
      await editTheater(id, { title, date, author, description, imageUrl });
      ctx.page.redirect("/" + id);
    } catch (err) {
      alert(err.message);
    }
  }
}
