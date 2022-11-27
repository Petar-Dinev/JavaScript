import { html, render } from "./node_modules/lit-html/lit-html.js";

const root = document.getElementById("root");
const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);


function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {towns} = Object.fromEntries(formData)
    const townsAsArr = towns.split(", ");
    render(ulEl(townsAsArr), root)
    form.reset()
}

const ulEl = (data) => html`
<ul>
  ${data.map(liEl)}
</ul>`

const liEl = (town) => html`
<li>${town}</li>`

render(ulEl(data), root)