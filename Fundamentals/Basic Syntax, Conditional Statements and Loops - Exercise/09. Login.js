function login(input) {
  let userName = input.shift();
  let pass = "";
  for (let i = userName.length - 1; i >= 0; i--) {
    pass += userName[i];
  }
  let incorrectPasswords = 0;
  let index = 0;
  let currentPass = input[index];
  while (pass != currentPass && currentPass != undefined) {
    incorrectPasswords++;
    if (incorrectPasswords > 3) {
      console.log(`User ${userName} blocked!`);
      break;
    }
    console.log("Incorrect password. Try again.");
    index++;
    currentPass = input[index];
  }
  if (currentPass == pass) {
    console.log(`User ${userName} logged in.`);
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
login(["momo", "omom"]);
