function townsToJson(arr) {
  let result = [];
  let props = arr.shift().split(" | ");
  let firstProp = props[0].split(" ")[1];
  let secondProp = props[1];
  let thirdProp = props[2].split(" ")[0];

  for (let el of arr) {
    let tokens = el.split(" | ");
    let firstPropDatas = tokens[0].split(" ");
    let firstPropData = "";
    for (let i = 1; i < firstPropDatas.length; i++) {
      firstPropData += `${firstPropDatas[i]} `;
    }
    firstPropData = firstPropData.trim();
    let secondPropData = Number(tokens[1]).toFixed(2);
    let thirdPropData = Number(tokens[2].split(" ")[0]).toFixed(2);
    let obj = {};
    obj[firstProp] = firstPropData;
    obj[secondProp] = Number(secondPropData);
    obj[thirdProp] = Number(thirdPropData);
    result.push(obj);
  }

  console.log(JSON.stringify(result));
}

townsToJson([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);

townsToJson([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
