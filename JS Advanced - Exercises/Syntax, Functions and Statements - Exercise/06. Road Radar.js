function roadRadar(speed, area) {
  let areas = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };
  let areaLimit = areas[area];
  let diffInSpeed = speed - areaLimit;

  let status = "";
  if (speed <= areaLimit) {
    console.log(`Driving ${speed} km/h in a ${areaLimit} zone`);
  } else {
    if (diffInSpeed <= 20) {
      status = "speeding";
    } else if (diffInSpeed <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }
    console.log(
      `The speed is ${diffInSpeed} km/h faster than the allowed speed of ${areaLimit} - ${status}`
    );
  }
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");

// //•	On the motorway, the limit is 130 km/h
// •	On the interstate, the limit is 90 km/h
// •	In the city, the limit is 50 km/h
// •	Within a residential area, the limit is 20 km/h
// //
