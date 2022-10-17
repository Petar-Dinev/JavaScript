function personalTitles(input) {
  const age = Number(input[0]);
  const type = input[1];

  switch (type) {
    case "m":
      if (age >= 16) {
        console.log("Mr.");
      } else {
        console.log("Master");
      }
      break;
    case "f":
      if (age >= 16) {
        console.log("Ms.");
      } else {
        console.log("Miss");
      }
      break;
  }
}
