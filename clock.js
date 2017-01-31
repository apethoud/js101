var secondHand = document.querySelector(".second-hand");
var minHand = document.querySelector(".min-hand");
var hourHand = document.querySelector(".hour-hand");

function setDate() {
  var now = new Date();

  var seconds = now.getSeconds();
  console.log(seconds);
  var secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  var minutes = now.getMinutes();
  console.log(minutes);
  var minutesDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  var hours = now.getHours();
  console.log(hours);
  var hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
