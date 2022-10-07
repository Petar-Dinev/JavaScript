function histogram(input) {
  let numbersCount = Number(input[0]);

  let p1Counter = 0;
  let p2Counter = 0;
  let p3Counter = 0;
  let p4Counter = 0;
  let p5Counter = 0;

  for (let i = 1; i <= numbersCount; i++) {
    let tempNumber = Number(input[i]);

    if (tempNumber < 200) {
      p1Counter++;
    } else if (tempNumber >= 200 && tempNumber < 400) {
      p2Counter++;
    } else if (tempNumber >= 400 && tempNumber < 600) {
      p3Counter++;
    } else if (tempNumber >= 600 && tempNumber < 800) {
      p4Counter++;
    } else {
      p5Counter++;
    }
  }
  let p1CounterPro = ((p1Counter / numbersCount) * 100).toFixed(2);
  let p2CounterPro = ((p2Counter / numbersCount) * 100).toFixed(2);
  let p3CounterPro = ((p3Counter / numbersCount) * 100).toFixed(2);
  let p4CounterPro = ((p4Counter / numbersCount) * 100).toFixed(2);
  let p5CounterPro = ((p5Counter / numbersCount) * 100).toFixed(2);

  console.log(`${p1CounterPro}%`);
  console.log(`${p2CounterPro}%`);
  console.log(`${p3CounterPro}%`);
  console.log(`${p4CounterPro}%`);
  console.log(`${p5CounterPro}%`);
}
