var countDownDate = new Date("Nov 25, 2024 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  var weeks = Math.floor(distance / (1000 * 60 * 60 * 24*7));
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var totalHours = Math.floor(distance / (1000 * 60 * 60));

  document.getElementById("months").innerText = months;
  document.getElementById("weeks").innerText = weeks;
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
  document.getElementById("total-hours").innerText = totalHours;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("months").innerText = 00;
    document.getElementById("weeks").innerText = 00;
    document.getElementById("days").innerText = 00;
    document.getElementById("hours").innerText = 00;
    document.getElementById("minutes").innerText = 00;
    document.getElementById("seconds").innerText = 00;
    document.getElementById("total-hours").innerText = 00;
  }
}, 1000);