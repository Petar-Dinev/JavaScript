function solution(str = "") {
  return { append, removeStart, removeEnd, print };

  function append(arg) {
    str = str + arg;
  }

  function removeStart(num) {
    str = str.slice(num);
  }

  function removeEnd(num) {
    str = str.slice(0, -num);
  }

  function print() {
    console.log(str);
  }
}

let firstZeroTest = solution();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
