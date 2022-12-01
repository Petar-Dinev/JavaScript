import {html, render} from "./node_modules/lit-html/lit-html.js"
const url = "http://localhost:3030/jsonstore/advanced/dropdown"

const optionRoot = document.getElementById("menu");
const form = document.querySelector("form");
form.addEventListener("submit", addItem)

onLoad()

async function onLoad() {
   const response = await fetch(url);
   const data = await response.json();
   const result = Object.values(data).map(createOptionTemplate)
   render(result, optionRoot)
}

const createOptionTemplate = (option) => html`
<option value=${option._id}>${option.text}</option>
`


async function updateSelectMenu(text) {
    const response = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({text})
    })
}


function addItem(e) {
    e.preventDefault()
    const inputField = document.getElementById("itemText");
    const text = inputField.value;
    text && updateSelectMenu(text)
    form.reset()
    onLoad()
}