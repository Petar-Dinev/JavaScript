function solve() {
  let inputField = document.getElementById("input");
  let outputDiv = document.getElementById("output");
  let sentencesArr = inputField.value.split(".");
  let text = "";
  let sentenceCount = 0;
  outputDiv.innerHTML = '';
  for (let el of sentencesArr) {
    if (el) {
      text += `${el}.`;
      sentenceCount++;
    }
    if (sentenceCount == 3) {
      let p = document.createElement('p')
      p.textContent = text;
      outputDiv.appendChild(p);
      sentenceCount = 0;
      text = "";
    }
  }
  if (sentenceCount > 0 && sentenceCount < 3) {
    let p = document.createElement('p')
    p.textContent = text;
    outputDiv.appendChild(p);
  }
}
