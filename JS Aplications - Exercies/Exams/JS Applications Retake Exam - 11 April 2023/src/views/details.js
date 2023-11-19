import { delEvent, getOneEvent } from "../api/data.js";
import { getGoingCount, getOwnGoings, willGoing } from "../api/going.js";
import { html } from "../lib.js";

const detailsTemplate = (event, user, owner, goings, canGoing, onGoing, onDelete) => html` <section
  id="details"
>
  <div id="details-wrapper">
    <img id="details-img" src=${event.imageUrl} alt="example1" />
    <p id="details-title">${event.name}</p>
    <p id="details-category">
      Category: <span id="categories">${event.category}</span>
    </p>
    <p id="details-date">Date:<span id="date">${event.date}</span></p>
    <div id="info-wrapper">
      <div id="details-description">
        <span>${event.description}</span>
      </div>
    </div>

    <h3>Going: <span id="go">${goings}</span> times.</h3>
    ${user
      ? html`<div id="action-buttons">
          ${owner
            ? html`<a href="/edit/${event._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
                  >Delete</a
                >` : ''}
            ${!owner && !canGoing ? html`<a @click=${onGoing} href="javascript:void(0)" id="go-btn">Going</a>` : ''}
        </div>`
      : ""}
  </div>
</section>`;

export async function showDetails(ctx) {
  const user = ctx.user || '';
  const eventId = ctx.params.id;
  const event = await getOneEvent(eventId);
  const owner = user?._id == event._ownerId;
  const goings = await getGoingCount(eventId)
  const canGoing = await getOwnGoings(eventId, user?._id)
  ctx.render(detailsTemplate(event, user, owner, goings, canGoing, onGoing, onDelete));

  async function onDelete() {
    const choise = confirm("Are u sure?");

    if (choise) {
      await delEvent(eventId);
      ctx.page.redirect("/catalog");
    }
  }
  async function onGoing() {
    await willGoing(eventId)
    ctx.page.redirect('/catalog/' + eventId)
  }
}
