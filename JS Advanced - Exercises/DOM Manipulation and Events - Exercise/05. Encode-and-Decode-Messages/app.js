function encodeAndDecodeMessages() {
  let textAreas = Array.from(document.getElementsByTagName("textarea"));
  let buttons = Array.from(document.getElementsByTagName("button"));

  for (let button of buttons) {
    button.addEventListener("click", onClick);
  }

  function onClick(e) {
    let input = textAreas[0].value;
    let output = "";
    if (e.target == buttons[0]) {
      for (let i = 0; i < input.length; i++) {
        output += String.fromCharCode(input[i].charCodeAt(0) + 1);
      }
      textAreas[1].value = output;
      textAreas[0].value = "";
    }
    let newInput = textAreas[1].value;
    let result = "";
    if (e.target == buttons[1]) {
      for (let i = 0; i < newInput.length; i++) {
        result += String.fromCharCode(newInput[i].charCodeAt(0) - 1);
      }
      textAreas[1].value = result;
    }
  }
}
