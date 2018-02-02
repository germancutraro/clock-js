const secondHand = document.querySelector('.second-hand'),
  minsHand = document.querySelector('.min-hand'),
  hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date(),
    seconds = now.getSeconds(),
    secondsDegrees = ((seconds / 60) * 360) + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes(),
    minsDegress = ((mins / 60) * 360) + 90;

  minsHand.style.transform = `rotate(${minsDegress}deg)`;

  const hour = now.getHours(),
    hourDegress = ((mins / 12) * 360) + 90;

  hourDegress.style.transform = `rotate(${hourDegress}deg)`;

}

setInterval(setDate, 1000);