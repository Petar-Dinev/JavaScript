import { getAllApplicationsOnOffer, getMyApplications, makeApplication } from "../api/applications.js";
import { deleteOffer, getOfferById } from "../api/data.js";
import { html } from "../lib.js";

const detailsTemplate = (offer, user, owner, offerApps, canDoApplication, onDelete, onApplicationClick) => html` <section
  id="details"
>
  <div id="details-wrapper">
    <img id="details-img" src="${offer.imageUrl}" alt="example1" />
    <p id="details-title">${offer.title}</p>
    <p id="details-category">
      Category: <span id="categories">${offer.category}</span>
    </p>
    <p id="details-salary">
      Salary: <span id="salary-number">${offer.salary}</span>
    </p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Description</h4>
        <span>${offer.description}</span>
      </div>
      <div id="details-requirements">
        <h4>Requirements</h4>
        <span>${offer.requirements}</span>
      </div>
    </div>
    <p>Applications: <strong id="applications">${offerApps}</strong></p>

    ${user
      ? html` <div id="action-buttons">
          ${owner
            ? html` <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
                  >Delete</a
                >`
            : html`${!canDoApplication ? html`<a @click=${onApplicationClick} href="javascript:void(0)" id="apply-btn">Apply</a>`: ''}`}
        </div>`
      : ""}
  </div>
</section>`;

export async function showDetails(ctx) {
  const offerId = ctx.params.id;
  const offer = await getOfferById(offerId);
  const user = ctx.user;
  const owner = user?._id === offer._ownerId;
  const offerApps = await getAllApplicationsOnOffer(offerId)
  let canDoApplication;
  if(user) {
    canDoApplication = await getMyApplications(offerId, user._id)
  }
  ctx.render(detailsTemplate(offer, user, owner, offerApps, canDoApplication, onDelete, onApplicationClick));

  async function onDelete() {
    const choice = confirm("Are u sure?");
    if (choice) {
      await deleteOffer(offerId);
      ctx.page.redirect("/catalog");
    }
  }

  async function onApplicationClick() {
    await makeApplication(offerId)
    ctx.page.redirect('/catalog/' + offerId)
  }
}
