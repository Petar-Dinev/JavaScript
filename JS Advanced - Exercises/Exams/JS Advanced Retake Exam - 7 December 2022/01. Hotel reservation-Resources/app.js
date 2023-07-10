window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const chekInInput = document.getElementById("date-in");
  const chekOutInput = document.getElementById("date-out");
  const peopleCountInput = document.getElementById("people-count");
  const nextBtn = document.getElementById("next-btn");
  const infoSectionUl = document.getElementsByClassName("info-list")[0];
  const confirmSectionUl = document.getElementsByClassName("confirm-list")[0];
  const completeSection = document.getElementById("complete-reservation");
  nextBtn.addEventListener("click", onNextBtnClick);

  function onNextBtnClick(e) {
    e.preventDefault();

    const reservationInfo = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      checkInDate: chekInInput.value,
      chekOutDate: chekOutInput.value,
      peopleCount: peopleCountInput.value,
    };
    
    if (
      reservationInfo.firstName &&
      reservationInfo.lastName &&
      reservationInfo.checkInDate &&
      reservationInfo.chekOutDate &&
      reservationInfo.peopleCount
    ) {
      const liEl = document.createElement("li");
      liEl.className = "reservation-content";
      const article = document.createElement("article");
      const h3 = document.createElement("h3");
      h3.textContent = `Name: ${reservationInfo.firstName} ${reservationInfo.lastName}`;
      const p1 = document.createElement("p");
      p1.textContent = `From date: ${reservationInfo.checkInDate}`;
      const p2 = document.createElement("p");
      p2.textContent = `To date: ${reservationInfo.chekOutDate}`;
      const p3 = document.createElement("p");
      p3.textContent = `For ${reservationInfo.peopleCount} people`;
      article.appendChild(h3);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(p3);
      liEl.appendChild(article);
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.className = "edit-btn";
      const continueBtn = document.createElement("button");
      continueBtn.textContent = "Continue";
      continueBtn.className = "continue-btn";

      liEl.appendChild(editBtn);
      liEl.appendChild(continueBtn);

      editBtn.addEventListener("click", onEdit);
      continueBtn.addEventListener("click", onContinue);

      infoSectionUl.appendChild(liEl);
      nextBtn.disabled = true;
      document.getElementsByTagName("form")[0].reset();

      function onEdit() {
        firstNameInput.value = reservationInfo.firstName;
        lastNameInput.value = reservationInfo.lastName;
        chekInInput.value = reservationInfo.checkInDate;
        chekOutInput.value = reservationInfo.chekOutDate;
        peopleCountInput.value = reservationInfo.peopleCount;
        liEl.remove();
        nextBtn.disabled = false;
      }

      const cancelBtn = document.createElement("button");
      cancelBtn.textContent = "Cancel";
      cancelBtn.className = "cancel-btn";
      const confirmBtn = document.createElement("button");
      confirmBtn.textContent = "Confirm";
      confirmBtn.className = "confirm-btn";

      function onContinue() {
        confirmSectionUl.appendChild(liEl);
        editBtn.remove();
        continueBtn.remove();
        liEl.appendChild(confirmBtn);
        liEl.appendChild(cancelBtn);
      }

      confirmBtn.addEventListener("click", onConfirm);
      cancelBtn.addEventListener("click", onCancel);
      const h1 = document.getElementById("verification");

      function onConfirm(e) {
        liEl.remove();
        nextBtn.disabled = false;
        h1.textContent = "Confirmed.";
        h1.className = "reservation-confirmed";
      }

      function onCancel(e) {
        liEl.remove();
        nextBtn.disabled = false;
        h1.textContent = "Cancelled.";
        h1.className = "reservation-cancelled";
      }
    }
  }
}
