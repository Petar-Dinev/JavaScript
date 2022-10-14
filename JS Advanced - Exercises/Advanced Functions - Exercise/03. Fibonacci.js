function fibonacci() {
  let currentNum = 0;
  let nextNum = 1;

  return () => {
    let sum = currentNum + nextNum;
    currentNum = nextNum;
    nextNum = sum;
    return currentNum;
  };
}

let fib = fibonacci();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
