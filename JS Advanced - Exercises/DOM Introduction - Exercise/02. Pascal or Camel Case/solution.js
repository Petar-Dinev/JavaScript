function solve() {
  let text = document.getElementById("text").value;
  let currentCase = document.getElementById("naming-convention").value;
  let textArr = text.split(" ");

  let res = "";

  switch (currentCase) {
    case "Camel Case":
      textArr.forEach((el, i) => {
        el = el.toLowerCase();
        if (i == 0) {
          return (res += el);
        }
        return (res += el[0].toUpperCase() + el.substring(1));
      });
      break;
    case "Pascal Case":
      textArr.forEach((el) => {
        el = el.toLowerCase();
        return (res += el[0].toUpperCase() + el.substring(1));
      });
      break;
    default:
      res += "Error!";
      break;
  }

  document.getElementById("result").innerText = res;
}
