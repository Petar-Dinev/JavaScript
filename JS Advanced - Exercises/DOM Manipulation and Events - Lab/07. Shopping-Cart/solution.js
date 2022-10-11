function solve() {
  let addBtns = Array.from(document.getElementsByClassName("add-product"));
  for (let btn of addBtns) {
    btn.addEventListener("click", add);
  }
  let names = [];
  let totalMoney = 0;
  let textArea = document.querySelector("textarea");

  function add(e) {
    let productName =
      e.target.parentElement.parentElement.querySelector(
        ".product-title"
      ).textContent;
    if (!names.includes(productName)) {
      names.push(productName);
    }
    let money = Number(
      e.target.parentElement.parentElement.querySelector(".product-line-price")
        .textContent
    );
    textArea.textContent += `Added ${productName} for ${money.toFixed(
      2
    )} to the cart.\n`;
    totalMoney += money;
  }

  let checkoutBtn = document.getElementsByClassName("checkout")[0];
  checkoutBtn.addEventListener("click", checkout);

  function checkout(e) {
    textArea.textContent += `You bought ${names.join(
      ", "
    )} for ${totalMoney.toFixed(2)}.`;
    let allBtn = Array.from(document.querySelectorAll("button"));
    for (let button of allBtn) {
      button.disabled = true;
    }
  }
}
