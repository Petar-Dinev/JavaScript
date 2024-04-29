window.addEventListener("load", solve);

function solve() {
  const carModelInput = document.getElementById("car-model");
  const carYearInput = document.getElementById("car-year");
  const carPartNameInput = document.getElementById("part-name");
  const carPartNumberInput = document.getElementById("part-number");
  const carConditionInput = document.getElementById("condition");
  const nextBtn = document.getElementById("next-btn");
  const infoList = document.querySelector(".info-list");
  const confirmList = document.querySelector(".confirm-list");
  const completeImage = document.getElementById("complete-img");
  const completeP = document.getElementById("complete-text");
  nextBtn.addEventListener("click", onNextBtnClick);

  function onNextBtnClick(e) {
    e.preventDefault();
    console.log("hello");

    const carInfo = {
      model: carModelInput.value,
      year: carYearInput.value,
      partName: carPartNameInput.value,
      partNumber: carPartNumberInput.value,
      condition: carConditionInput.value,
    };
    console.log(carInfo);

    if (
      carInfo.model == "" ||
      carInfo.year == "" ||
      carInfo.partName == "" ||
      carInfo.partNumber == "" ||
      carInfo.condition == "" ||
      carInfo.year < 1980 ||
      carInfo.year > 2023
    ) {
      return;
    }

    completeP.textContent = "";
    completeImage.style.visibility = "hidden";

    const li = document.createElement("li");
    li.className = "part-content";
    const article = document.createElement("article");
    const modelP = document.createElement("p");
    modelP.textContent = `Car Model: ${carInfo.model}`;
    const yearP = document.createElement("p");
    yearP.textContent = `Car Year: ${carInfo.year}`;
    const partNameP = document.createElement("p");
    partNameP.textContent = `Part Name: ${carInfo.partName}`;
    const partNumberP = document.createElement("p");
    partNumberP.textContent = `Part Number: ${carInfo.partNumber}`;
    const conditionP = document.createElement("p");
    conditionP.textContent = `Condition: ${carInfo.condition}`;

    article.appendChild(modelP);
    article.appendChild(yearP);
    article.appendChild(partNameP);
    article.appendChild(partNumberP);
    article.appendChild(conditionP);

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";
    const continueBtn = document.createElement("button");
    continueBtn.className = "continue-btn";
    continueBtn.textContent = "Continue";

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);

    editBtn.addEventListener("click", onEdit);
    continueBtn.addEventListener("click", onContinue);

    nextBtn.disabled = true;


    carModelInput.value = "";
    carYearInput.value = "";
    carPartNameInput.value = "";
    carPartNumberInput.value = "";
    carConditionInput.value = "";
    infoList.appendChild(li);

    function onEdit() {
      li.remove();
      nextBtn.disabled = false;
      carModelInput.value = carInfo.model;
      carYearInput.value = carInfo.year;
      carPartNameInput.value = carInfo.partName;
      carPartNumberInput.value = carInfo.partNumber;
      carConditionInput.value = carInfo.condition;
    }

    function onContinue() {
      const confirmBtn = document.createElement("button");
      confirmBtn.className = "confirm-btn";
      confirmBtn.textContent = "Confirm";
      const cancelBtn = document.createElement("button");
      cancelBtn.className = "cancel-btn";
      cancelBtn.textContent = "Cancel";
      confirmBtn.addEventListener("click", onConfirm);
      cancelBtn.addEventListener("click", onCancel);
      editBtn.remove();
      continueBtn.remove();
      li.appendChild(confirmBtn);
      li.appendChild(cancelBtn);
      confirmList.append(li);
    }

    function onConfirm() {
      nextBtn.disabled = false;
      li.remove();
      completeImage.style.visibility = "visible";
      completeP.textContent = "Part is Ordered!";
    }

    function onCancel() {
      li.remove();
      nextBtn.disabled = false;
    }
  }
}
