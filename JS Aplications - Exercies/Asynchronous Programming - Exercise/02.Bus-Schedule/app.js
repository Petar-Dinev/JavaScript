function solve() {
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  const spanEl = document.getElementsByClassName("info")[0];
  let currentStop = "depot";
  let nextStop = "";

  async function depart() {
    try {
      const response = await fetch(
        `http://localhost:3030/jsonstore/bus/schedule/${currentStop}`
      );
      const data = await response.json();

      spanEl.textContent = `Next stop ${data.name}`;
      currentStop = data.name;
      nextStop = data.next;
      arriveBtn.disabled = false;
      departBtn.disabled = true;
    } catch (er) {
      spanEl.textContent = "Error";
      departBtn.disabled = true;
      arriveBtn.disabled = true;
    }
  }

  function arrive() {
    spanEl.textContent = `Arrived at ${currentStop}`;
    departBtn.disabled = false;
    arriveBtn.disabled = true;
    currentStop = nextStop;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
