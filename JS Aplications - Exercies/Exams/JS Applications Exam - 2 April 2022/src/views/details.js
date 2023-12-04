import { deletePet, getOnePet } from "../api/data.js";
import { getAllDonations, getOwnDonate, makeDonate } from "../api/donations.js";
import { html } from "../lib.js";

const detailsTemplate = (
  pet,
  petControl,
  user,
  owner,
  donations,
  canDonate,
  onDelete,
  onDonate
) => html`<section id="detailsPage">
  <div class="details">
    <div class="animalPic">
      <img src=${pet.image} />
    </div>
    <div>
      <div class="animalInfo">
        <h1>Name: ${pet.name}</h1>
        <h3>Breed: ${pet.breed}</h3>
        <h4>Age: ${pet.age}</h4>
        <h4>Weight: ${pet.weight}</h4>
        <h4 class="donation">Donation: ${donations * 100}$</h4>
      </div>
      ${petControl(pet, user, owner, canDonate, onDelete, onDonate)}
    </div>
  </div>
</section>`;

function petControl(pet, user, owner, canDonate, onDelete, onDonate) {
  if (!user) {
    return null;
  }
  if (owner) {
    return html` <div class="actionBtn">
      <a href=${"/edit/" + pet._id} class="edit">Edit</a>
      <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
    </div>`;
  }
  if (user && !canDonate) {
    return html`<div class="actionBtn">
      <a @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>
    </div>`;
  }
}

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const pet = await getOnePet(id);
    const user = ctx.user;
    const owner = user && user._id == pet._ownerId;
    const requests = [getAllDonations(id)]
    if(user) {
        requests.push(getOwnDonate(id, user._id))
    }
  const [donations, canDonate] = await Promise.all(requests)
  console.log(canDonate);
  console.log(donations);
  ctx.render(
    detailsTemplate(pet, petControl, user, owner, donations, canDonate, onDelete, onDonate)
  );

  async function onDelete() {
    const choice = confirm("Are u sure u want delete this pet?");
    if (choice) {
      await deletePet(id);
      ctx.page.redirect("/catalog");
    }
  }

  async function onDonate() {
    await makeDonate(id)
    ctx.page.redirect('/catalog/' + id)
  }
}
