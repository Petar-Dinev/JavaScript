function lunchBreak(input) {
  const nameOfTVSeries = input[0];
  const episodeTime = Number(input[1]);
  const breakTime = Number(input[2]);

  const timeForLunch = (breakTime * 1) / 8;
  const timeForRest = (breakTime * 1) / 4;
  const freeTime = breakTime - timeForLunch - timeForRest;

  if (freeTime >= episodeTime) {
    const leftTime = Math.ceil(freeTime - episodeTime);
    console.log(`You have enough time to watch ${nameOfTVSeries} and left with ${leftTime} minutes free time.`);
  } else {
    const needTime = Math.ceil(episodeTime - freeTime);
    console.log(`You don't have enough time to watch ${nameOfTVSeries}, you need ${needTime} more minutes.`);
  }
}
// lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);
