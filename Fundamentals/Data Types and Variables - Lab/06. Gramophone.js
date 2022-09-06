function gramophone(band, album, song) {
  let plateRotation = 2.5;
  let songDuration = (album.length * band.length) * song.length / 2;
  let rotationOfSong = songDuration / plateRotation;

  console.log(`The plate was rotated ${Math.ceil(rotationOfSong)} times.`);
}

gramophone("Black Sabbath", "Paranoid", "War Pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");
