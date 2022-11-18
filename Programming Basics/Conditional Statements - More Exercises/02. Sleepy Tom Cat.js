function sleepyTomCat(input) {
    let playTimeNormOfTom = 30000;
    let restDayOfTomOwner = Number(input[0]);
    let daysInYear = 365;
    let workDays = daysInYear - restDayOfTomOwner;
    let restDayPlayTime = 127;
    let workDayPlayTime = 63;

    let totalPlayTime = workDayPlayTime * workDays + restDayOfTomOwner * restDayPlayTime;
    let extraPlayTime = Math.abs(totalPlayTime - playTimeNormOfTom);
    if(totalPlayTime > playTimeNormOfTom) {
        console.log(`Tom will run away`);
        let extraHoursPlaying = Math.floor(extraPlayTime / 60);
        let extraMinutesPlaying = extraPlayTime % 60;
        console.log(`${extraHoursPlaying} hours and ${extraMinutesPlaying} minutes more for play`);
    } else {
        console.log(`Tom sleeps well`);
        let leftHoursForPlay = Math.floor(extraPlayTime / 60);
        let leftMinutesForPlay = extraPlayTime % 60;
        console.log(`${leftHoursForPlay} hours and ${leftMinutesForPlay} minutes less for play`);
    }

}

sleepyTomCat(["20"])