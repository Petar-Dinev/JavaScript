import { deleteFruit, getOneFruit } from "../api/data.js";
import { html } from "../lib.js";

const detailsTemplate = (fruit, owner, onDelete) => html`<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${fruit.imageUrl}" alt="example1" />
    <p id="details-title">${fruit.name}</p>
    <div id="info-wrapper">
      <div id="details-description">
        <p>${fruit.description}</p>
        <p id="nutrition">Nutrition</p>
        <p id="details-nutrition">${fruit.nutrition}</p>
      </div>
      ${owner
        ? html`<div id="action-buttons">
            <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
              >Delete</a
            >
          </div>`
        : ""}
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  const fruitId = ctx.params.id;
  const fruit = await getOneFruit(fruitId);
  const user = ctx.user;
  const owner = user?._id == fruit._ownerId;
  ctx.render(detailsTemplate(fruit, owner, onDelete));

  async function onDelete() {
    const choise = confirm("Are u sure?");
    if (choise) {
      await deleteFruit(fruitId);
      ctx.page.redirect("/catalog");
    }
  }
}
