import { getOneById, updateGame } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../utils.js";


const editTemplate = (game, onEdit) => html`<section id="edit-page" class="auth">
<form id="edit" @submit=${onEdit}>
    <div class="container">

        <h1>Edit Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" .value=${game.title} >

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" value=${game.category} >

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" value=${game.maxLevel} >

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" value=${game.imageUrl} >

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary" .value=${game.summary} ></textarea>
        <input class="btn submit" type="submit" value="Edit Game">

    </div>
</form>
</section>`

export async function showEdit(ctx) {
    const gameId = ctx.params.id;
    const game = await getOneById(gameId)

    ctx.render(editTemplate(game, createSubmitHandler(onEdit)))

    async function onEdit({ title, category, maxLevel, imageUrl, summary }) {
        if (
          title == "" ||
          category == "" ||
          maxLevel == "" ||
          imageUrl == "" ||
          summary == ""
        ) {
          return alert("All fields are require!");
        }
        try {
          await updateGame(gameId, { title, category, maxLevel, imageUrl, summary });
          ctx.page.redirect("/catalog/" + gameId);
        } catch (err) {
          alert(err.message);
        }
      }
}