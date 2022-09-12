function passwordValidator(pass) {
  let isValid = true;
  if (pass.length < 6 || pass.length > 10) {
    isValid = false;
    console.log("Password must be between 6 and 10 characters");
  }
  let digitCount = 0;
  for (let i = 0; i < pass.length; i++) {
    let curentChar = pass[i].charCodeAt();
    if (
      (curentChar > 47 && curentChar) ||
      (curentChar > 64 && curentChar < 91) ||
      (curentChar > 96 && curentChar < 123)
    ) {
    } else {
      isValid = false;
      console.log("Password must consist only of letters and digits");
      break;
    }
    if (curentChar > 47 && curentChar < 58) {
      digitCount++;
    }
  }
  if (digitCount < 2) {
    isValid = false;
    console.log("Password must have at least 2 digits");
  }

  if (isValid) {
    console.log("Password is valid");
  }
}
passwordValidator("logIn");
console.log("-----------");
passwordValidator("MyPass123");
console.log("------------");
passwordValidator("Pa$s$s");
