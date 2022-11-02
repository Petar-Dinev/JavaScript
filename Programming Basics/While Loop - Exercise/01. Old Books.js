function oldBooks(input) {
  let index = 0;
  const searchedBook = input[index];
  index++;
  let command = input[index];
  index++;
  let checkedBook = 0;
  let isFound = false;

  while (command !== "No More Books") {
    if (command === searchedBook) {
      console.log(`You checked ${checkedBook} books and found it.`);
      isFound = true;
      break;
    }
    checkedBook++;
    command = input[index];
    index++;
  }
  if (!isFound) {
    console.log("The book you search is not here!");
    console.log(`You checked ${checkedBook} books.`);
  }
}
