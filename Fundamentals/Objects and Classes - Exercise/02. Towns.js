function towns(input) {
  // "Town", "Latitude" and "Longitude".
  let result = [];

  for (let el of input) {
    let [town, latitude, longitude] = el.split(" | ");
    let obj = {
      town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };
    result.push(obj);
  }

  for (let obj of result) {
    console.log(obj);
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
