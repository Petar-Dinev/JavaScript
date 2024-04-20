import { create } from "../api/data.js"
import { html } from "../lib.js"
import { createSubmitHandler } from "../utils.js"


function createTemplate(onCreate) {
  return html`<section id="create">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Add Character</h2>
      <form class="create-form" @submit=${onCreate}>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Character Type"
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
        />
        <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="2"
        cols="10"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="2"
        cols="10"
      ></textarea>
        <button type="submit">Add Character</button>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>`
}

export function showCreate(ctx) {
  ctx.render(createTemplate(createSubmitHandler(onCreate)))
  async function onCreate({ category, "image-url": imageUrl, description, "additional-info": moreInfo }) {
    const characterData = {
      category,
      imageUrl,
      description,
      moreInfo
    }
    if ([...Object.values(characterData)].some(v => !v)) {
      return alert('All fields are required!')
    }
    try {
      await create(characterData)
      ctx.page.redirect('/characters')
    } catch (err) {
      return alert(err.message)
    }
  }
}