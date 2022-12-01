import { html, render } from "./node_modules/lit-html/lit-html.js";

const url = "http://localhost:3030/jsonstore/advanced/table";

const root = document.querySelector("tbody");
const inputField = document.getElementById("searchField");

solve();

function solve() {
  onLoad();

  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    onLoad();
   
  }

  async function onLoad() {
    const response = await fetch(url);
    const data = await response.json();
    const result = [];
    for(let value of Object.values(data)) {
      let obj = {
        name: `${value.firstName} ${value.lastName}`,
        email: value.email,
        course: value.course
      }
      result.push(obj)
    }
  
    const trTemplate = (student, foundMatch) => html`
      <tr class=${foundMatch(student) ? "select" : ""}>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.course}</td>
      </tr>
    `;
  
    render(result.map((el) => trTemplate(el, foundMatch)), root)
  
    function foundMatch(obj) {
     let match = inputField.value;
  
      for (let value of Object.values(obj)) {
        value = value.toLowerCase()
        match = match.toLowerCase()
        console.log(match)

        if (value.includes(match) && match) {
          return true;
        }
      }
      return false;
    }
  
     inputField.value = "";
  }

}


