window.addEventListener("load", solve);

function solve() {
  const form = document.querySelector('form');
  const nameInput = document.getElementById('snowman-name');
  const heightInput = document.getElementById('snowman-height');
  const locationInput = document.getElementById('location');
  const creatorInput = document.getElementById('creator-name');
  const specialAttributeInput = document.getElementById('special-attribute');
  const addBtn = document.querySelector('.add-btn');
  const previewList = document.querySelector('.snowman-preview');
  const snowList = document.querySelector('.snow-list');

  addBtn.addEventListener('click', onAddBtnClick);

  function onAddBtnClick(e) {
    e.preventDefault()

    const snowmanName = nameInput.value;
    const snowmanHeight = heightInput.value;
    const snowmanLocation = locationInput.value;
    const creatorName = creatorInput.value;
    const specialAttribute = specialAttributeInput.value;

    if (snowmanName == '' || snowmanHeight == '' || snowmanLocation == '' || creatorName == '' || specialAttribute == '') {
      console.log('hi');
      return;
    }

    form.reset();
    const liEl = createElement('li', '');
    const article = createElement('article', '');
    const nameP = createP(`Name: ${snowmanName}`);
    const heightP = createP(`Height: ${snowmanHeight}`);
    const locationP = createP(`Location: ${snowmanLocation}`);
    const creatorP = createP(`Creator: ${creatorName}`);
    const attributeP = createP(`Attribute: ${specialAttribute}`);
    article.appendChild(nameP);
    article.appendChild(heightP);
    article.appendChild(locationP);
    article.appendChild(creatorP);
    article.appendChild(attributeP);
    liEl.appendChild(article)
    const btnsDiv = createElement('div', '', 'btn-container');
    const editBtn = createBtn('Edit', 'edit-btn');
    editBtn.addEventListener('click', onEditBtnClick)
    const nextBtn = createBtn('Next', 'next-btn');
    nextBtn.addEventListener('click', onNextBtnClick);
    btnsDiv.appendChild(editBtn);
    btnsDiv.appendChild(nextBtn);
    liEl.appendChild(btnsDiv);
    previewList.appendChild(liEl);
    addBtn.disabled = true;

    function onEditBtnClick() {
      liEl.remove();
      nameInput.value = snowmanName;
      heightInput.value = snowmanHeight;
      locationInput.value = snowmanLocation;
      creatorInput.value = creatorName;
      specialAttributeInput.value = specialAttribute;
      addBtn.disabled = false;
    }

    function onNextBtnClick() {
      snowList.appendChild(liEl);
      btnsDiv.remove();
      const sendBtn = createBtn('Send', 'send-btn');
      sendBtn.addEventListener('click', onSendBtnClick);
      article.appendChild(sendBtn);
    }

    function onSendBtnClick() {
      document.querySelector('main').remove();
      document.getElementById('back-img').hidden = false;
      const backBtn = createBtn('Back', 'back-btn');
      document.querySelector('body').appendChild(backBtn);
      backBtn.addEventListener('click', onBackBtnClick);

      function onBackBtnClick() {
        console.log('clicked');

        location.reload();
      }
    }
  }

  function createElement(type, content, className) {
    const el = document.createElement(type);
    el.textContent = content;
    if (className) {
      el.className = className;
    }
    return el;
  }

  function createP(content, className) {
    const p = createElement('p', content, className);
    return p;
  }

  function createBtn(content, className) {
    const btn = createElement('button', content, className);
    return btn;
  }
}
