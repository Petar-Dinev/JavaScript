import { getGameComments, makeComment } from "../api/comments.js";
import { deleteGame, getOneById } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const detailsTemplate = (
  game,
  comments,
  user,
  owner,
  onComment,
  onDelete
) => html`<section id="game-details">
  <h1>Game Details</h1>
  <div class="info-section">
    <div class="game-header">
      <img class="game-img" src="${game.imageUrl}" />
      <h1>${game.title}</h1>
      <span class="levels">MaxLevel: ${game.maxLevel}</span>
      <p class="type">${game.category}</p>
    </div>

    <p class="text">${game.summary}</p>

    <!-- Bonus ( for Guests and Users ) -->
    <div class="details-comments">
      <h2>Comments:</h2>
      ${comments.length > 0
        ? html` <ul>
            ${comments.map(
              (c) => html`<li class="comment">
                <p>Content: ${c.comment}</p>
              </li>`
            )}
          </ul>`
        : html` <p class="no-comment">No comments.</p>`}
    </div>

    ${owner? html`
    <div class="buttons">
      <a href="/edit/${game._id}" class="button">Edit</a>
      <a @click=${onDelete} href="javascirpt:void(0)" class="button">Delete</a>
    </div>`: ''}
  </div>

 ${user && !owner ? html`
  <article class="create-comment">
    <label>Add new comment:</label>
    <form class="form" @submit=${onComment}>
      <textarea name="comment" placeholder="Comment......"></textarea>
      <input class="btn submit" type="submit" value="Add Comment" />
    </form>
  </article>`: ''}
</section> `;

export async function showDetails(ctx) {
  const gameId = ctx.params.id;
  const game = await getOneById(gameId);
  const user = ctx.user;
  const owner = user?._id == game._ownerId;
  const comments = await getGameComments(gameId);

  ctx.render(
    detailsTemplate(
      game,
      comments,
      user,
      owner,
      createSubmitHandler(onComment),
      onDelete
    )
  );

  async function onDelete() {
    const choice = confirm("Are u sure?");
    if (choice) {
      await deleteGame(gameId);
      ctx.page.redirect("/");
    }
  }

  async function onComment({ comment }) {
    try {
      if (comment == "") {
        return alert("Can't comment empty string!");
      }
      await makeComment(gameId, comment);
      ctx.page.redirect("/catalog/" + gameId);
    } catch (err) {
      alert(err.message);
    }
  }
}
