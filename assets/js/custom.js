let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let hrs = document.querySelector(".hrs");

setInterval(function () {
  let time = new Date();
  let nowSec = time.getSeconds();
  let nowMin = time.getMinutes();
  let nowHrs = time.getHours();

 
  sec.style.transform = `rotate(${(360 / 60) * nowSec}deg)`;
  min.style.transform = `rotate(${(360 / 60) * nowMin}deg)`;
  hrs.style.transform = `rotate(${(360 / 12) * nowHrs}deg)`;




}, 1000);
