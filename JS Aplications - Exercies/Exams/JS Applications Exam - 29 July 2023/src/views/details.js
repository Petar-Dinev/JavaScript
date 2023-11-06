import { getOwnLikes, getPostLikes, makeLike } from "../api/likes.js";
import { deletePost, getOnePost } from "../api/post.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (post, user, owner, likes, canLike, onLike, onDelete) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${post.imageUrl} alt="example1" />
      <p id="details-category">${post.category}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="description">${post.description}</p>
          <p id="more-info">${post.moreInfo}</p>
        </div>

        <h3>Likes:<span id="likes">${likes}</span></h3>
        <!--Edit and Delete are only for creator-->
        ${user ? html`
        <div id="action-buttons">
          ${owner
            ? html`
                <a href=${"/edit/" + post._id} id="edit-btn">Edit</a>
                <a href="javascript:void(0)" @click=${onDelete} id="delete-btn"
                  >Delete</a
                >
              `
            : ""}
          <!--Bonus - Only for logged-in users ( not authors )-->
          ${!owner && canLike ? html`<a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>` : ''}` : ""}
        </div>
      </div>
    </div>
  </section>
`;
export async function detailsView(ctx) {
  const postId = ctx.params.id;
  const post = await getOnePost(postId);
  const user = getUserData() || '';
  const owner = user?._id == post._ownerId;
  const likes = await getPostLikes(postId)
  const ownLikes = await getOwnLikes(postId, user._id)
  const canLike = !ownLikes
console.log(likes);
console.log(canLike);
  ctx.render(detailsTemplate(post, user, owner, likes, canLike, onLike, onDelete));

  async function onDelete() {
    const choise = confirm("Are u sure?");
    if (choise) {
      await deletePost(postId);
      ctx.page.redirect("/catalog");
    }
  }

  async function onLike() {
    console.log('like');
    await makeLike(postId)
    ctx.page.redirect('/catalog/' + postId)
  }
}
