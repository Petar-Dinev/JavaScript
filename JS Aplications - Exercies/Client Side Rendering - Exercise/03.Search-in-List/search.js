import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

const townsRoot = document.getElementById("towns");
const resultRoot = document.getElementById("result");
const inputField = document.getElementById("searchText");
document.querySelector("button").addEventListener("click", search);

const townTemplate = (town, match) => html`
  <li class=${match && town.includes(match) ? "active" : ""}>${town}</li>
`;

const townsTemplate = (data, match) => html`
  <ul>
    ${data.map((el) => townTemplate(el, match))}
  </ul>
`;
function update(match) {
  render(townsTemplate(towns, match), townsRoot);
}

update();

function search() {
  const match = inputField.value;
  match && update(match);
  const count = document.querySelectorAll(".active").length;
  resultRoot.textContent = `${count} matches found`;
  inputField.value = "";
}
