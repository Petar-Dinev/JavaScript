function movies(input) {
  let result = [];

  for (let data of input) {
    if (data.includes("addMovie")) {
      let tokens = data.split(" ");
      tokens.shift();
      let obj = { name: tokens.join(" ") };
      result.push(obj);
    } else if (data.includes("directedBy")) {
      let [name, director] = data.split(" directedBy ");
      for (let obj of result) {
        if (obj.name == name) {
          obj.director = director;
        }
      }
    } else {
      let [name, date] = data.split(" onDate ");
      for (let obj of result) {
        if (obj.name == name) {
          obj.date = date;
        }
      }
    }
  }
  for (let obj of result) {
    if (obj.name && obj.director && obj.date) {
      console.log(JSON.stringify(obj));
    }
  }
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
