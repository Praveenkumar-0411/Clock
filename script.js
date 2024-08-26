
const hours = document.getElementById("hours");
const days = document.getElementById("days");


function myTimer() {
  const time = new Date();
  hours.innerHTML = time.toLocaleTimeString();

}
myTimer();
setInterval(myTimer, 1000);

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
days.innerHTML = day;





