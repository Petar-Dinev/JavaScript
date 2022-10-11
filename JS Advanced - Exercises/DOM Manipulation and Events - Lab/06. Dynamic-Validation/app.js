function validate() {
  let input = document.getElementById("email");
  input.addEventListener("change", onChange);

  function onChange(e) {
    let value = input.value;
    let patern = /[a-z]+@[a-z]+.[a-z]+/gm
    let match = patern.exec(value);

    console.log(match);
    if (match == null || match[0] !== value) {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  }
}
