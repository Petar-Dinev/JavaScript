import { getOne, remove } from "../api/data.js";
import { getAllLikes, getOwnLikes, makeLike } from "../api/likes.js";
import { html } from "../lib.js"

function detailsTemplate(character, likes, user, isOwner, canLike, onDelete, onLikeMake) {
  return html`<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${character.imageUrl} alt="example1" />
      <div>
      <p id="details-category">${character.category}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="description">${character.description}</p>
          <p id ="more-info">${character.moreInfo}</p>
        </div>
      </div>
        <h3>Is This Useful:<span id="likes">${likes}</span></h3>
       ${user ? html`
         <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
          ${isOwner ? html`
         <a href=${"/characters/" + character._id + '/edit'} id="edit-btn">Edit</a>
         <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` :
        html`
         <!--Bonus - Only for logged-in users ( not authors )-->
         ${!canLike ? html`
         <a @click=${onLikeMake} href="javascript:void(0)" id="like-btn">Like</a>` : ''} `}
    
       </div>`: ''}
      </div>
  </div>
</section>`
}

export async function showDetails(ctx) {
  const characterId = ctx.params.id;
  const character = await getOne(characterId)
  const user = ctx.user;
  const isOwner = user?._id === character._ownerId
  const likes = await getAllLikes(characterId)
  console.log(likes);
  const canLike = await getOwnLikes(characterId, user?._id)
  ctx.render(detailsTemplate(character, likes, user, isOwner, canLike, onDelete, onLikeMake))

  async function onDelete() {
    const choice = confirm('Are you sure?')
    if (choice) {
      try {
        await remove(characterId)
        ctx.page.redirect('/characters')
      } catch (err) {
        return alert(err.message)
      }
    }
  }

  async function onLikeMake() {
    console.log('like');
    try {
      await makeLike(characterId)
      ctx.page.redirect('/characters/' + characterId)
    } catch (err) {
      return alert(err)
    }
  }
}