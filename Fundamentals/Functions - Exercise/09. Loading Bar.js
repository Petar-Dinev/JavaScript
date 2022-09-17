function loadingBar(num) {
  let dotCount = ".".repeat(10 - num / 10);
  let percentCount = "%".repeat(num / 10);
  if (num < 100) {
    console.log(`${num}% [${percentCount}${dotCount}]`);
    console.log("Still loading...");
  } else if (num == 100) {
    console.log("100% Complete!");
    console.log(`[${percentCount}]`);
  }
}

loadingBar(100);
