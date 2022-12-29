function sortAnArrayByTwoCriteria(strings) {
  console.log(
    strings.sort((a, b) => a.length - b.length || a.localeCompare(b)).join("\n")
  );
}

sortAnArrayByTwoCriteria(["alpha", "beta", "gamma"]);
sortAnArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
