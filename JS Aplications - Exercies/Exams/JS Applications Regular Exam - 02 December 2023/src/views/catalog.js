import { getAll } from "../api/data.js"
import { html } from "../lib.js"

function catalogTemplate(characters) {
  return html`
    <h2>Characters</h2>
    ${characters.length > 0 ?
      html`
      <section id="characters">
        ${characters.map(characterTemplate)}
      </section>`
      : html`
      <h2>
        No added Heroes yet.
      </h2>`
    }
    `
}

function characterTemplate(character) {
  return html`<div class="character">
  <img src=${character.imageUrl} alt="example3" />
  <div class="hero-info">
    <h3 class="category">${character.category}</h3>
    <p class="description">${character.description}</p>
    <a class="details-btn" href=${`/characters/${character._id}`}>More Info</a>
  </div>
  </div>`
}

export async function showCatalog(ctx) {
  const characters = await getAll()
  console.log(characters);
  ctx.render(catalogTemplate(characters))
}