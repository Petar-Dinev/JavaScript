function timeToWalk(steps, footPrint, speedInKmH) {
  let distanceInMeters = steps * footPrint;
  let restTimeInSec = Math.floor(distanceInMeters / 500) * 60;
  let speedInMeters = (speedInKmH * 1000) / 60;
  let speedInSecond = speedInMeters / 60;
  let travelTimeInSec = distanceInMeters / speedInSecond + restTimeInSec;

  let hours = Math.floor(travelTimeInSec / 3600);
  let minutes = Math.floor((travelTimeInSec - hours * 3600) / 60);
  let seconds = Math.ceil(travelTimeInSec - hours * 3600 - minutes * 60);

  let formatedHours = hours < 10 ? `0${hours}` : hours;
  let formatedMins = minutes < 10 ? `0${minutes}` : minutes;
  let formatedSec = seconds < 10 ? `0${seconds}` : seconds;

  console.log(`${formatedHours}:${formatedMins}:${formatedSec}`);
}

timeToWalk(4000, 0.6, 5);
console.log("------------");
timeToWalk(2564, 0.7, 5.5);
