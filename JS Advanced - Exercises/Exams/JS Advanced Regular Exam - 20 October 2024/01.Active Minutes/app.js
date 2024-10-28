window.addEventListener("load", solve);

function solve() {
  const addButton = document.getElementById("add-activity");
  const previewList = document.getElementById('preview-activity');
  const typeInput = document.getElementById('type');
  const intensityInput = document.getElementById('intensity');
  const caloriesInput = document.getElementById('calories');
  const durationInput = document.getElementById('duration');
  const dateInput = document.getElementById('date');
  const form = document.querySelector('form')
  const tableBody = document.getElementById('activities-table');

  addButton.addEventListener('click', onAddBtnClick);

  function onAddBtnClick(e) {
    e.preventDefault();
    const type = typeInput.value;
    const intensity = intensityInput.value;
    const calories = caloriesInput.value;
    const duration = durationInput.value;
    const date = dateInput.value;

    if (type == '' || intensity == '' || calories == '' || duration == '' || date == '') {
      return;
    }

    addButton.disabled = true;
    form.reset();

    const liEl = createElement('li', '');
    const articleEl = createElement('article', '');
    liEl.appendChild(articleEl);
    const typeP = createParagraph(`Activity: ${type}`);
    const intensityP = createParagraph(`Intensity: ${intensity}`);
    const durationP = createParagraph(`Duration: ${duration} min.`);
    const dateP = createParagraph(`Date: ${date}`);
    const caloriesP = createParagraph(`Calories: ${calories} `);
    articleEl.appendChild(typeP);
    articleEl.appendChild(intensityP);
    articleEl.appendChild(durationP);
    articleEl.appendChild(dateP);
    articleEl.appendChild(caloriesP);

    const btnDiv = createElement('div', '');
    btnDiv.className = 'btn-container';
    const editBtn = createButton('Edit', 'edit-btn');
    editBtn.addEventListener('click', onEditBtnClick)
    const nextBtn = createButton('Next', 'next-btn');
    nextBtn.addEventListener('click', onNextBtnClick)
    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(nextBtn);
    liEl.appendChild(btnDiv);

    previewList.appendChild(liEl);

    function onEditBtnClick() {
      liEl.remove();
      typeInput.value = type;
      intensityInput.value = intensity;
      durationInput.value = duration;
      dateInput.value = date;
      caloriesInput.value = calories;

      addButton.disabled = false;
    }

    function onNextBtnClick() {
      addButton.disabled = false;
      liEl.remove();

      const trEl = createElement('tr', '');
      const typeTd = createTd(type, 'type-cell');
      const durationTd = createTd(duration, 'duration-cell');
      const caloriesTd = createTd(calories, 'calories-cell');
      const dateTd = createTd(date, 'date-cell');
      const intensityTd = createTd(intensity, 'intensity-cell');
      const btnTd = createTd('', 'btn-cell');
      const deleteBtn = createButton('Delete', 'delete-btn');
      deleteBtn.addEventListener('click', () => trEl.remove());

      btnTd.appendChild(deleteBtn);
      trEl.appendChild(typeTd);
      trEl.appendChild(durationTd);
      trEl.appendChild(caloriesTd);
      trEl.appendChild(dateTd);
      trEl.appendChild(intensityTd);
      trEl.appendChild(btnTd);
      tableBody.appendChild(trEl);

    }
  }

  function createElement(type, content) {
    const el = document.createElement(type);
    el.textContent = content;
    return el;
  }

  function createButton(content, className) {
    const btn = createElement('button', content);
    btn.className = className;
    return btn;
  }

  function createParagraph(content) {
    const p = createElement('p', content);
    return p;
  }

  function createTd(content, className) {
    const td = createElement('td', content)
    td.className = className;
    return td;
  }

}
