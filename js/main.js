// Start Begin CountWidth
let ourSkill = document.getElementById("our-skills");
let progresSpan = document.querySelectorAll(".skill .theprogress span");

// Start Counter For Stats
let stats = document.getElementById("stats");
let infoSpan = document.querySelectorAll(".box .info .amount");
let started = false;
window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop) {
    if (!started) {
      infoSpan.forEach((num) => startedCount(num));
    }
    started = true;
    
  }
  if ((window.scrollY >= ourSkill.offsetTop)) {
    progresSpan.forEach(function (span) {
      span.style.width = span.dataset.width;
    });
  }  
};
function startedCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(function () {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// Start CountDown From Event

let currentDate = new Date("Dec 31, 2022 20:33:59");
let countDown = setInterval(function () {
  let dateNow = new Date().getTime();
  let dateDiff = currentDate - dateNow;
  let dateDay = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minut = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".times .unit .day").innerHTML = dateDay;
  document.querySelector(".times .unit .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".times .unit .minute").innerHTML =
    minut < 10 ? `0${minut}` : minut;
  document.querySelector(".times .unit .second").innerHTML =
    second < 10 ? `0${second}` : second;

  if (dateDiff < 0) {
    clearInterval(countDown);
    document.querySelector(".times .unit .day").innerHTML = 0;
    document.querySelector(".times .unit .hours").innerHTML = 0;
    document.querySelector(".times .unit .minute").innerHTML = 0;
    document.querySelector(".times .unit .second").innerHTML =0;  
  }
}, 1000);

// Start Maxlenght Form Form
let input = document.querySelector(".content .name");
let progrss = document.querySelector(".content .progress");
let maxLength = input.getAttribute("maxlength");
input.oninput = function () {
  progrss.style.width = `${(input.value.length * 100) / maxLength}%`;
  input.value.length == maxLength
    ? progrss.classList.add("red")
    : progrss.classList.remove("red");
};
