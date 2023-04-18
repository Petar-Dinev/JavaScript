function solve() {
   const firstOption = document.createElement('option');
   const secontOption = document.createElement('option');
   firstOption.value = 'binary';
   firstOption.textContent = 'Binary';
   secontOption.value = 'hexadecimal';
   secontOption.textContent = 'Hexadecimal';
   const menuTo = document.getElementById('selectMenuTo');
   menuTo.appendChild(firstOption)
   menuTo.appendChild(secontOption)

   document.querySelector('button').addEventListener('click', onClick)

   function onClick() {
    const input = document.getElementById('input');
    const resultEl = document.getElementById('result')
    const inputValue = Number(input.value);
    if(menuTo.value === 'binary') {
        resultEl.value = inputValue.toString(2);
    } else if(menuTo.value === 'hexadecimal'){
        console.log(inputValue);
        resultEl.value = inputValue.toString(16).toUpperCase()
        console.log(inputValue);
    }
   }

}