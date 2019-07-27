setInterval(setTime, 1000);

function setTime(hours, minds, seconds) {
  setSeconds();
  setHours();
  setMinutes();
}

function setSeconds(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondHand = document.querySelector('.second-hand');
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

function setMinutes() {
  const now = new Date();
  const mins = now.getMinutes();
  const minHand = document.querySelector('.min-hand');
  const minsDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
}

function setHours() {
  const now = new Date();
  const hours = now.getHours();
  const hourHand = document.querySelector('.hour-hand');
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`; 
}