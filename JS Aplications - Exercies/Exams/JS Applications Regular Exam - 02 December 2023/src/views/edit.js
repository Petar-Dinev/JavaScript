import { edit, getOne } from "../api/data.js"
import { html } from "../lib.js"
import { createSubmitHandler } from "../utils.js"

function editTemplate(character, onEdit) {
  return html`<section id="edit">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Edit Character</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Character Type"
        .value=${character.category}
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value=${character.imageUrl}
      />
      <textarea
      id="description"
      name="description"
      placeholder="Description"
      rows="2"
      cols="10"
    >${character.description}</textarea>
    <textarea
      id="additional-info"
      name="additional-info"
      placeholder="Additional Info"
      rows="2"
      cols="10"
    >${character.moreInfo}</textarea>
        <button type="submit">Edit</button>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>`
}

export async function showEdit(ctx) {
  const characterId = ctx.params.id;
  const character = await getOne(characterId)
  ctx.render(editTemplate(character, createSubmitHandler(onEdit)))

  async function onEdit({ category, "image-url": imageUrl, description, "additional-info": moreInfo }) {
    const editInfo = {
      category,
      imageUrl,
      description,
      moreInfo
    }
    if (Object.values(editInfo).some(v => !v)) {
      return alert('All fields are required!')
    }

    try {
      await edit(characterId, editInfo)
      ctx.page.redirect('/characters/' + characterId)
    } catch (err) {
      return alert(err.message)
    }
  }
}