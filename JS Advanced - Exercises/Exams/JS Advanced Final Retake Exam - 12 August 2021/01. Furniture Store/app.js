window.addEventListener("load", solve);

function solve() {
  document.getElementById("add").addEventListener("click", onAdd);
  const tbodyEl = document.getElementById("furniture-list");
  const totalEl = document.getElementsByClassName("total-price")[0];
  function onAdd(e) {
    e.preventDefault();

    const furniture = {
      model: document.getElementById("model").value,
      year: Number(document.getElementById("year").value),
      description: document.getElementById("description").value,
      price: Number(document.getElementById("price").value),
    };

    if (
      furniture.model == "" ||
      furniture.description == "" ||
      furniture.year < 0 ||
      furniture.price < 0
    ) {
      return;
    }
    const tr = document.createElement("tr");
    tr.className = "info";
    const modelTd = createElement("td", furniture.model);
    const priceTd = createElement("td", `${furniture.price.toFixed(2)}`);
    const moreBtn = createElement("button", "More Info");
    const buyBtn = createElement("button", "Buy it");
    const actionTd = createElement("td", "");
    moreBtn.className = "moreBtn";
    buyBtn.className = "buyBtn";
    actionTd.appendChild(moreBtn);
    actionTd.appendChild(buyBtn);
    tr.appendChild(modelTd);
    tr.appendChild(priceTd);
    tr.appendChild(actionTd);
    tbodyEl.appendChild(tr);
    const moreInfoTr = document.createElement("tr");
    moreInfoTr.className = "hide";
    const yearTd = createElement("td", `Year: ${furniture.year}`);
    const descriptionTd = createElement(
      "td",
      `Description: ${furniture.description}`
    );
    descriptionTd.colSpan = '3';
    moreBtn.addEventListener("click", moreInfo);
    moreInfoTr.appendChild(yearTd);
    moreInfoTr.appendChild(descriptionTd);
    tbodyEl.appendChild(moreInfoTr);

    function moreInfo() {
      if (moreBtn.textContent == "More Info") {
        moreBtn.textContent = "Less Info";
        moreInfoTr.style.display = "contents";
      } else {
        moreBtn.textContent = "More Info";
        moreInfoTr.style.display = "none";
      }
    }
    buyBtn.addEventListener("click", onBuy);

    function onBuy() {
      tr.remove();
      moreInfoTr.remove();
      const currentValue = Number(totalEl.textContent);
      totalEl.textContent = (currentValue + furniture.price).toFixed(2);
    }
  }

  function createElement(type, content) {
    const el = document.createElement(type);
    el.textContent = content;
    return el;
  }
}
