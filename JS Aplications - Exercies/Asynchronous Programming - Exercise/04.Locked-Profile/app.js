async function lockedProfile() {
    let url = "http://localhost:3030/jsonstore/advanced/profiles";
    const response = await fetch(url);
    const data = await response.json();
    const mainEl = document.getElementById("main");
  
    const cards = Array.from(Object.values(data));
    const acc = createdCard(cards)
    mainEl.replaceChildren(...acc);
    mainEl.addEventListener("click", onClick);
  }
  
  function createdCard(objs) {
    const result = [];
    for(let i = 1; i <= objs.length; i++) {
    const obj = objs[i - 1];
    const divEl = document.createElement("div");
    divEl.classList.add("profile");
    divEl.innerHTML = `<img src="./iconProfile2.png" class="userIcon"/>
     <label>Lock</label>
     <input type="radio" name="user${i}Locked" value="lock" checked>
     <label>Unlock</label>
     <input type="radio" name="user${i}Locked" value="unlock"><br>
     <hr>
     <label>Username</label>
     <input type="text" name="user${i}Username" value="${obj.username}" disabled readonly/>
     <div id=${obj._id} class="hiddenInfo">
         <hr>
         <label>Email:</label>
         <input type="email" name="user${i}Email" value="${obj.email}" disabled readonly/>
         <label>Age:</label>
         <input type="email" name="user${i}Age" value="${obj.age}" disabled readonly/>
     </div>
     
     <button>Show more</button>`;
     result.push(divEl)
    }
    return result;
  }
  
  function onClick(e) {
    const lockEL = e.target.parentElement.querySelector("[value='lock']").checked;
  
    if ((e.target.tagName == "BUTTON") & !lockEL) {
      const button = e.target
      
      if (lockEL) {
        button.disabled = true;
      } else {
        button.disabled = false;
      }
  
      const divEl = e.target.parentElement.querySelector("div");
      if(divEl.className == "hiddenInfo") {
        divEl.classList.remove("hiddenInfo")
      } else {
        divEl.classList.add("hiddenInfo")
      }
      
      button.textContent =
        button.textContent == "Hide it" ? "Show more" : "Hide it";
    }
  }