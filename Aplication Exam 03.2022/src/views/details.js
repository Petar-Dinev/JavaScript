import { deleteById, getAllAlbums, getById } from "../api/data.js";
import { html, nothing } from "../lib.js";


const detailsTemplate = (album, hasUser, isOwner, onDelete) => html`
 <section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src=${album.imageUrl} alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">0</span></div>

          ${hasUser ? html`
          <div id="action-buttons">
            ${isOwner ? html`
            <a href="/edit/${album._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
            : html` <a href="" id="like-btn">Like</a>`}           
          </div>` : nothing }
          
        </div>
      </section>
`

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const album = await getById(id)
  const hasUser = Boolean(ctx.user)
  const isOwner = hasUser && ctx.user._id == album._ownerId
  ctx.render(detailsTemplate(album, hasUser, isOwner, onDelete))


  async function onDelete() {
     const choise = confirm("Are u sure u want to delete this album?");
     if(choise) {
      await deleteById(id)
      ctx.page.redirect("/dashboard")
     }
  }
}