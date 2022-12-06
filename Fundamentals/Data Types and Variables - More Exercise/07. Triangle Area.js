function triangleArea(num1, num2, num3) {
  // A = √[s(s-a)(s-b)(s-c)]
  let perimeter = (num1 + num2 + num3) / 2;
  let area = Math.sqrt(
    perimeter * (perimeter - num1) * (perimeter - num2) * (perimeter - num3)
  );
  console.log(area);
}

triangleArea(2, 3.5, 4);
