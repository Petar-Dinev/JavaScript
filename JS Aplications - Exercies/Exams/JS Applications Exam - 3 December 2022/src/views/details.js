import { deleteById, getAllAlbums, getById } from "../api/data.js";
import { getOwnLikes, getPostLikes, makeLike } from "../api/likes.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (album, likes, hasUser, isOwner, canLike, onLike, onDelete) => html`
  <section id="details">
    <div id="details-wrapper">
      <p id="details-title">Album Details</p>
      <div id="img-wrapper">
        <img src=${album.imageUrl} alt="example1" />
      </div>
      <div id="info-wrapper">
        <p>
          <strong>Band:</strong><span id="details-singer">${album.singer}</span>
        </p>
        <p>
          <strong>Album name:</strong
          ><span id="details-album">${album.album}</span>
        </p>
        <p>
          <strong>Release date:</strong
          ><span id="details-release">${album.release}</span>
        </p>
        <p>
          <strong>Label:</strong><span id="details-label">${album.label}</span>
        </p>
        <p>
          <strong>Sales:</strong><span id="details-sales">${album.sales}</span>
        </p>
      </div>
      <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

      ${hasUser
        ? html` <div id="action-buttons">
            ${isOwner
              ? html` <a href="/edit/${album._id}" id="edit-btn">Edit</a>
                  <a
                    @click=${onDelete}
                    href="javascript:void(0)"
                    id="delete-btn"
                    >Delete</a
                  >`
              : html`${!canLike ? html`<a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>` : ''}`}
          </div>`
        : nothing}
    </div>
  </section>
`;

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const album = await getById(id);
  const hasUser = Boolean(ctx.user);
  const isOwner = hasUser && ctx.user._id == album._ownerId;
  const likes = await getPostLikes(id)
  let canLike = 0;
  if(hasUser) {
    canLike = await getOwnLikes(id, ctx.user._id)
  }
  console.log(id);
  console.log(album);
  console.log(hasUser);
  console.log(isOwner);
  console.log(likes);
  console.log(canLike);
  ctx.render(detailsTemplate(album, likes, hasUser, isOwner,canLike, onLike, onDelete));

  async function onDelete() {
    const choise = confirm("Are u sure u want to delete this album?");
    if (choise) {
      await deleteById(id);
      ctx.page.redirect("/dashboard");
    }
  }

  async function onLike() {
    await makeLike(id);
    ctx.page.redirect('/dashboard/' + id)
  }
}
