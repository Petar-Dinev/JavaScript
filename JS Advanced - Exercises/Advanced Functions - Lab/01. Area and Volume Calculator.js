function solve(area, vol, input) {
  input = JSON.parse(input);
  let result = [];
  for (let el of input) {
    let obj = el;
    obj.vol = vol;
    obj.area = area;

    result.push({ area: obj.area(), volume: obj.vol() });
  }
  return result;
}

solve(
  area,
  vol,
  `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

function area() {
  return Math.abs(this.x * this.y);
}
