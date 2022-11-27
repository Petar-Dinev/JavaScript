import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const root = document.getElementById("allCats");

const createCatCard = (cat, showCode) => html`
  <li>
    <img
      src="./images/${cat.imageLocation}.jpg"
      width="250"
      height="250"
      alt="Card image cap"
    />
    <div class="info">
      <button class="showBtn" @click=${showCode.bind(null, cat.id)}>Show status code</button>
      <div class="status" style="display: none" id=${cat.id}>
        <h4>Status Code: ${cat.statusCode}</h4>
        <p>Continue</p>
      </div>
    </div>
  </li>
`;

function showCode(id, e) {
    const divEl = document.getElementById(id);
    if(divEl.style.display === "none") {
       divEl.style.display = "block"
       e.target.textContent = "Hide status code"
    } else {
        divEl.style.display = "none"
        e.target.textContent = "Show status code"
    }
}

const ulEl = (cats, showCode) => html`
<ul>
    ${cats.map(el => createCatCard(el, showCode))}
</ul>`

render(ulEl(cats, showCode), root)
