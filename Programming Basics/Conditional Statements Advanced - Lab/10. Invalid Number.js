function invalidNumber(input) {
  const num = Number(input[0]);
  let isValid = false;
  if ((num >= 100 && num <= 200) || num == 0) {
    isValid = true;
  }

  if (!isValid) {
    console.log("invalid");
  }
}

invalidNumber([0]);
invalidNumber([150]);
invalidNumber([10]);
invalidNumber([201]);
