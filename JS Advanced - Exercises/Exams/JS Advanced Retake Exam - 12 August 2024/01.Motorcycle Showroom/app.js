window.addEventListener("load", solve);

function solve() {
  const testRideBtn = document.getElementById('test-ride-btn');
  testRideBtn.addEventListener('click', onTestBtnClick);
  const form = document.querySelector('form');
  const colorInput = document.getElementById('colors');
  const modelInput = document.getElementById('motorcycles');
  const dateInput = document.getElementById('datetime');
  const nameInput = document.getElementById('full-name');
  const emailInput = document.getElementById('email');
  const previewList = document.getElementById('preview-list');
  const completeList = document.getElementById('complete-list');
  const dataViewDiv = document.querySelector('.data-view');

  function onTestBtnClick(e) {
    e.preventDefault()
    const color = colorInput.value;
    const model = modelInput.value;
    const date = dateInput.value;
    const name = nameInput.value;
    const email = emailInput.value;

    if (color == '' || model == '' || date == '' || name == '' || email == '') {
      console.log('Invalid data');
      return;
    };

    const liEl = createElement('li', '');
    const articleEl = createElement('article', '');
    const colorP = createP(`Color: ${color}`);
    const modelP = createP(`Model: ${model}`);
    const nameP = createP(`For: ${name}`);
    const emailP = createP(`Contact: ${email}`);
    const dateP = createP(`Test Ride On: ${date}`);
    const btnsDiv = createElement('div', '', 'btn-container');
    const editBtn = createBtn('Edit', 'edit-btn');
    const nextBtn = createBtn('Next', 'next-btn');
    const completeBtn = createBtn('Complete', 'complete-btn');
    const confirmBtn = createBtn('Your Ride is Confirmed', 'confirm-btn');

    editBtn.addEventListener('click', onEditBtnClick);
    nextBtn.addEventListener('click', onNextBtnClick);
    completeBtn.addEventListener('click', onCompleteBtnClick);
    confirmBtn.addEventListener('click', onConfirmBtnClick);

    articleEl.appendChild(colorP);
    articleEl.appendChild(modelP);
    articleEl.appendChild(nameP);
    articleEl.appendChild(emailP);
    articleEl.appendChild(dateP);
    btnsDiv.appendChild(editBtn);
    btnsDiv.appendChild(nextBtn);
    liEl.appendChild(articleEl);
    liEl.appendChild(btnsDiv);
    previewList.appendChild(liEl);

    form.reset();
    testRideBtn.disabled = true;

    function onEditBtnClick() {
      colorInput.value = color;
      modelInput.value = model;
      dateInput.value = date;
      nameInput.value = name;
      emailInput.value = email;

      testRideBtn.disabled = false;
      liEl.remove();
    }

    function onNextBtnClick() {
      btnsDiv.remove();
      articleEl.appendChild(completeBtn);
      completeList.appendChild(liEl);
    };

    function onCompleteBtnClick() {
      liEl.remove();
      dataViewDiv.append(confirmBtn);
    };

    function onConfirmBtnClick() {
      location.reload();
    };
  };

  function createElement(type, content, className) {
    const el = document.createElement(type);
    el.textContent = content;
    if (className) {
      el.className = className;
    }
    return el;
  };

  function createP(content) {
    return createElement('p', content);
  };

  function createBtn(content, className) {
    return createElement('button', content, className);
  };
}
