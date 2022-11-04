function walking(input) {
  let endGoal = 10000;
  let index = 0;
  let command = input[index];
  index++;

  while (endGoal > 0) {
    if (command === "Going home") {
      let stepsToHome = Number(input[index]);
      index++;
      endGoal -= stepsToHome;
      if (endGoal > 0) {
        console.log(`${Math.abs(endGoal)} more steps to reach goal.`);
      } else {
        console.log(`Goal reached! Good job!`);
        console.log(`${Math.abs(endGoal)} steps over the goal!`);
      }
      break;
    }
    let currentSteps = Number(command);
    endGoal -= currentSteps;
    command = input[index];
    index++;
  }
  if (command !== "Going home") {
    console.log(`Goal reached! Good job!`);
    console.log(`${Math.abs(endGoal)} steps over the goal!`);
  }
}
