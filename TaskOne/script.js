const today = new Date();

const options = { weekday: "long" };

const dayName = today.toLocaleDateString("en-US", options);

function displayTime() {
  const utcTimeMilliseconds = Date.now();
  document.querySelector(
    "[data-testid = currentUTCTime]"
  ).innerHTML = `${utcTimeMilliseconds}`;
}

document.querySelector(
  "[data-testid = currentDayOfTheWeek]"
).innerHTML = `Today: ${dayName}`;

setInterval(() => {
  displayTime();
}, 1000);
