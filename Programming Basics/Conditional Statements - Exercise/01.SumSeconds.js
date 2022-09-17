function sumSeconds(input) {
  const firstTime = Number(input[0]);
  const secondTime = Number(input[1]);
  const trirdTime = Number(input[2]);
  let minutes = 0;
  let seconds = 0;

  let totalTime = firstTime + secondTime + trirdTime;
  if (totalTime >= 120) {
    minutes = 2;
    seconds = totalTime - 120;
  } else if (totalTime >= 60) {
    minutes = 1;
    seconds = totalTime - 60;
  } else {
    minutes = 0;
    seconds = totalTime;
  }

  //   let minutes = Math.floor(totalTime / 60);
  //   let seconds = totalTime % 60;

  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}

sumSeconds(["55", "45", "30"]);
