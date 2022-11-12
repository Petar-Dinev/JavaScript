function attachEvents() {
    document.getElementById("btnLoad").addEventListener("click", onLoad);
    document.getElementById("btnCreate").addEventListener("click", createContact)
}

async function onLoad() {
    const list = document.getElementById("phonebook");
    const response = await fetch("http://localhost:3030/jsonstore/phonebook");
    const data = await response.json();
    const contacts = Array.from(Object.values(data))
    list.replaceChildren(...contacts.map(createLiEl))
}

async function createContact() {
   const personInput = document.getElementById("person");
   const phoneInput = document.getElementById("phone");
   const person = personInput.value;
   const phone = phoneInput.value;

   const response = await fetch("http://localhost:3030/jsonstore/phonebook", {
    method: "post",
    headers: {
        "Content-Type": "aplication/json",
    },
    body: JSON.stringify({person, phone})
   })

   personInput.value = "";
   phoneInput.value = "";
   onLoad()
}

function createLiEl(obj) {
    const liEl = document.createElement("li");
    liEl.textContent = `${obj.person}: ${obj.phone}`
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete"
    deleteBtn.addEventListener("click", onDelete)
    liEl.appendChild(deleteBtn);
    liEl.id = obj._id;
    return liEl;
}

async function onDelete(e) {
   const id = e.target.parentElement.id

   const response = await fetch("http://localhost:3030/jsonstore/phonebook" + id, {
    method: "delete",
   })
}

attachEvents();