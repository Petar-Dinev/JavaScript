function attachEventsListeners() {
  const daysInput = document.getElementById("days");
  const hoursInput = document.getElementById("hours");
  const minutesInput = document.getElementById("minutes");
  const secondsInput = document.getElementById("seconds");

  const arrButtons = Array.from(
    document.querySelectorAll('input[type="button"]')
  );
  arrButtons.forEach((b) => b.addEventListener("click", onClick));

  const ratios = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };

  function onClick(e) {
    let parent = e.target.parentElement;
    let currentInput = parent.querySelector('input[type="text"]');
    let timeInDays = Number(currentInput.value) / ratios[currentInput.id];
    daysInput.value = timeInDays;
    hoursInput.value = timeInDays * ratios['hours'];
    debugger
    minutesInput.value = timeInDays * ratios['minutes'];
    secondsInput.value = timeInDays * ratios['seconds'];
  }
}
