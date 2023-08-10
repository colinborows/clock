
const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const allHands = document.querySelectorAll('.hand');
const clock = document.querySelector('.clock');
const percent = document.querySelector('.percent');
const insertPercent = document.querySelector('.insert-percent');

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const hours = now.getHours();
  const mins = now.getMinutes();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const hoursDegrees = ((hours/12) * 360) + 90;
  const minsDegrees = ((mins/60) * 360) + 90;
  const percentage = (((hours * 3600 + mins * 60 + seconds) / 86400) * 100);

  // clock.style.filter = `hue-rotate(${secondsDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  percent.style.width = `${percentage}%`;
  insertPercent.innerHTML = `${percentage.toFixed(2)}%`

  if(secondsDegrees === 90){
    allHands.forEach(hand => (hand.style.transition = "none"))
  } else {
    allHands.forEach(hand => (hand.style.transition = ""))
  }
}

setInterval(setDate, 1000);