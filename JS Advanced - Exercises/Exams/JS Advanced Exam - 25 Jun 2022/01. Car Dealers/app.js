window.addEventListener("load", solve);

function solve() {
  const makeInput = document.getElementById("make");
  const modelInput = document.getElementById("model");
  const productionYearInput = document.getElementById("year");
  const fuelTypeInput = document.getElementById("fuel");
  const originalCostInput = document.getElementById("original-cost");
  const sellingPriceInput = document.getElementById("selling-price");
  const form = document.querySelector("form");
  const tableBody = document.getElementById("table-body");
  const ulEl = document.getElementById('cars-list');
  const profitEl = document.getElementById('profit')

  document.getElementById("publish").addEventListener("click", createOffer);

  function createOffer(e) {
    e.preventDefault();
    if (
      !makeInput.value ||
      !modelInput.value ||
      !productionYearInput.value ||
      !fuelTypeInput.value ||
      !originalCostInput.value ||
      !sellingPriceInput.value ||
      originalCostInput.value > sellingPriceInput.value
    ) {
      return;
    }
    
    const offer = {
       make: makeInput.value,
       model: modelInput.value,
       year: productionYearInput.value,
       fuel: fuelTypeInput.value,
       price: Number(originalCostInput.value),
       newPrice: Number(sellingPriceInput.value),
    }

    const tr = document.createElement("tr");
    const makeTd = createTd(offer.make);
    const modelTd = createTd(offer.model);
    const yearTd = createTd(offer.year);
    const fuelTd = createTd(offer.fuel);
    const priceTd = createTd(offer.price);
    const newPriceTd = createTd(offer.newPrice);
    const buttonsTd = document.createElement('td');
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'action-btn edit'
    const sellBtn = document.createElement('button');
    sellBtn.textContent = 'Sell';
    sellBtn.className = 'action-btn sell'
    tr.className = 'row';
    tr.appendChild(makeTd);
    tr.appendChild(modelTd);
    tr.appendChild(yearTd);
    tr.appendChild(fuelTd);
    tr.appendChild(priceTd);
    tr.appendChild(newPriceTd);
    buttonsTd.appendChild(editBtn);
    buttonsTd.appendChild(sellBtn);
    tr.appendChild(buttonsTd)

    tableBody.appendChild(tr);
    sellBtn.addEventListener('click', sell)
    editBtn.addEventListener('click', edit)

    makeInput.value = ''
    modelInput.value = ''
    productionYearInput.value = ''
    fuelTypeInput.value = ''
    originalCostInput.value = ''
    sellingPriceInput.value = ''

    function createTd(content) {
      const td = document.createElement("td");
      td.textContent = content;
      return td;
    }

    function edit() {
       tr.remove()
       makeInput.value = offer.make;
       productionYearInput.value = offer.year;
       fuelTypeInput.value = offer.fuel;
       modelInput.value = offer.model;
       originalCostInput.value = offer.price;
       sellingPriceInput.value = offer.newPrice;
    }

    function sell() {
      const liEl = document.createElement('li');
      const span1 = document.createElement('span');
      span1.textContent = `${offer.make} ${offer.model}`;
      const span2 = document.createElement('span');
      span2.textContent = offer.year;
      const span3 = document.createElement('span');
      span3.textContent = offer.newPrice - offer.price;
      liEl.className = 'each-list'
      liEl.appendChild(span1)
      liEl.appendChild(span2)
      liEl.appendChild(span3)
      ulEl.appendChild(liEl)
      tr.remove()

      profitEl.textContent = (Number(profitEl.textContent) + (offer.newPrice - offer.price)).toFixed(2)
    }
  }
}
