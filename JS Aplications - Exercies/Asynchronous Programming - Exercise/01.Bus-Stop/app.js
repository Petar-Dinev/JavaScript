async function getInfo() {
  const busId = document.getElementById("stopId");
  const ulEl = document.getElementById("buses");
  const divEl = document.getElementById("stopName");

  try {
    const url = `http://localhost:3030/jsonstore/bus/businfo/${busId.value}`;
    const response = await fetch(url);
    const data = await response.json();

    divEl.textContent = data.name;
    ulEl.innerHTML = "";
    for (let [key, value] of Object.entries(data.buses)) {
      const li = document.createElement("li");
      li.textContent = `Bus ${key} arrives in ${value} minutes`;
      ulEl.appendChild(li);
    }
  } catch (error) {
    ulEl.innerHTML = "";
    divEl.textContent = "Error";
  }
}
