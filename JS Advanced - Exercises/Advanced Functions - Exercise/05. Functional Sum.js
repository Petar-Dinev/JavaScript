function sum(num) {
  const inner = function (a) {
    num += Number(a);
    return inner;
  };

  inner.toString = function () {
    return num;
  };

  return inner;
}

console.log(sum(3)(5).toString());
