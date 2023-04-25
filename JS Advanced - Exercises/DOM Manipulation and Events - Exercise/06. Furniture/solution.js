function solve() {
   const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
   generateBtn.addEventListener('click', onGenerate);
   buyBtn.addEventListener('click', onBuy);
   const textarea = document.querySelector('textarea');

   function onGenerate() {
      const input = JSON.parse(textarea.value);
      input.forEach(el => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const img = document.createElement('img');
        img.src = el.img;
        td.appendChild(img);
        const td1 = document.createElement('td');
        const p1 = document.createElement('p');
        p1.textContent = el.name;
        td1.appendChild(p1);
        const td2 = document.createElement('td');
        const p2 = document.createElement('p');
        p2.textContent = el.price;
        td2.appendChild(p2);
        const td3 = document.createElement('td');
        const p3 = document.createElement('p');
        p3.textContent = el.decFactor;
        td3.appendChild(p3);
        const td4 = document.createElement('td');
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox'
        td4.appendChild(checkBox);
        tr.appendChild(td)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        document.querySelector('tbody').appendChild(tr)
      });
   }

   function onBuy() {
    const checkBoxesArr = Array.from(document.querySelectorAll('input[type="checkbox"]')).filter(x => x.checked);
    let bought = [];
    let price = 0;
    let avgDecFactor = 0;
    checkBoxesArr.forEach(x => {
      const parent = x.parentElement.parentElement;
      const [nameP, priceP, decFactorP] = Array.from(parent.querySelectorAll('p'));
      bought.push(nameP.textContent);
      price += Number(priceP.textContent);
      avgDecFactor += Number(decFactorP.textContent);
    })
     const resultArea = document.querySelectorAll('textarea')[1];
     let result = '';
     result += `Bought furniture: ${bought.join(', ')}\n`;
     result += `Total price: ${price.toFixed(2)}\n`;
     result += `Average decoration factor: ${avgDecFactor / checkBoxesArr.length}`
     resultArea.value = result;
   }
}