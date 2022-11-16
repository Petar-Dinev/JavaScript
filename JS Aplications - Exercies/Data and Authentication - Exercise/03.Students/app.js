const form = document.getElementById("form");
form.addEventListener("submit", onSubmit);
const tBody = document.querySelector("tbody");

function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  const student = createTr(data);
  createStudent(data);
  tBody.appendChild(student);
}

async function createStudent(data) {
  const response = await fetch(
    "http://localhost:3030/jsonstore/collections/students",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
}

async function onload() {
  const response = await fetch(
    "http://localhost:3030/jsonstore/collections/students"
  );
  const data = await response.json();
  const students = Array.from(Object.values(data));
  students.forEach((obj) => {
    tBody.appendChild(createTr(obj));
  });
}

function createTr(obj) {
  const trEl = document.createElement("tr");
  trEl.innerHTML = `<td>${obj.firstName}</td>
<td>${obj.lastName}</td>
<td>${obj.facultyNumber}</td>
<td>${obj.grade}</td>`;

  return trEl;
}

onload();
