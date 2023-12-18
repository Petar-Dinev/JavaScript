import { deleteTheater, getTheaterById } from "../api/data.js";
import { getMyLikes, getTheaterLikes, makeLike } from "../api/likes.js";
import { html } from "../lib.js";

const detailsTemplate = (
  theater,
  likes,
  hasUser,
  isOwner,
  canLike,
  onMakeLike,
  onDelete
) => html`<section id="detailsPage">
  <div id="detailsBox">
    <div class="detailsInfo">
      <h1>Title: ${theater.title}</h1>
      <div>
        <img src="${theater.imageUrl}" />
      </div>
    </div>

    <div class="details">
      <h3>Theater Description</h3>
      <p>${theater.description}</p>
      <h4>Date: ${theater.date}</h4>
      <h4>Author: ${theater.author}</h4>
      ${hasUser
        ? html` <div class="buttons">
            ${isOwner
              ? html` <a
                    class="btn-delete"
                    href="javascript:void(0)"
                    @click=${onDelete}
                    >Delete</a
                  >
                  <a class="btn-edit" href="/${theater._id}/edit">Edit</a>`
              : html`
                  ${canLike
                    ? html`<a
                        class="btn-like"
                        href="javascript:void(0)"
                        @click=${onMakeLike}
                        >Like</a
                      >`
                    : ""}
                `}
          </div>`
        : ""}
      <p class="likes">Likes: ${likes}</p>
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  const theaterId = ctx.params.id;
  const hasUser = ctx.user;
  const userId = ctx.user?._id;
  const theater = await getTheaterById(theaterId);
  const likes = await getTheaterLikes(theaterId);
  const isOwner = theater._ownerId == userId;
  const canLike = !(await getMyLikes(theaterId, userId));

  console.log(hasUser);
  console.log(likes);
  console.log(isOwner);
  console.log(canLike);

  ctx.render(
    detailsTemplate(
      theater,
      likes,
      hasUser,
      isOwner,
      canLike,
      onMakeLike,
      onDelete
    )
  );

  async function onDelete() {
    const choice = confirm("Are u sure?");
    if (choice) {
      try {
        await deleteTheater(theaterId);
        ctx.page.redirect("/profile");
      } catch (err) {
        alert(err);
      }
    }
  }

  async function onMakeLike() {
    try {
      await makeLike(theaterId);
      ctx.page.redirect("/" + theaterId);
    } catch (err) {
      alert(err);
    }
  }
}
