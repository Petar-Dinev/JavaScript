function songs(array) {
  class Songs {
    constructor(type, name, time) {
      (this.type = type), (this.name = name), (this.time = time);
    }
  }
  let songs = [];

  let numberOfsong = array.shift();
  let typeOfSongs = array.pop();

  for (const data of array) {
    let dataInfo = data.split("_");
    let name = dataInfo[1];
    let type = dataInfo[0];
    let time = dataInfo[2];
    let song = new Songs(type, name, time);
    songs.push(song);
  }

  if (typeOfSongs === "all") {
    // for (const obj of songs) {
    //     console.log(obj.name);
    // }
    songs.forEach((obj) => console.log(obj.name));
  } else {
    let filtered = songs.filter((obj) => obj.type === typeOfSongs);
    filtered.forEach((obj) => console.log(obj.name));
  }
}
