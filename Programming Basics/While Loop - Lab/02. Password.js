function password(input) {
  let index = 0;
  let userName = input[index];
  index++;
  let pass = input[index];
  index++;
  let currentPass = input[index];
  index++;

  while (currentPass !== pass) {
    currentPass = input[index];
    index++;
  }
  console.log(`Welcome ${userName}!`);
}
