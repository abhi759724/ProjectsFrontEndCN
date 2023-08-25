let hour = document.getElementById("hours");
let second = document.getElementById("seconds");
let minute = document.getElementById("minutes");
let milisecond = document.getElementById("miliSecond");
let pause = document.getElementById("stop");
let play = document.getElementById("play");
let reset = document.getElementById("reset");
let hours = 0;
let mins = 0;
let secs = 0;
let ms = 0;
let timer = null;

function start() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(startTimer, 10);
}

function startTimer() {
  ms++;
  if (ms == 100) {
    ms = 0;
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
      if (mins == 60) {
        mins = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = mins < 10 ? "0" + mins : mins;
  let s = secs < 10 ? "0" + secs : secs;
  let m_s = ms;
  if (m_s < 10) {
    m_s = "0" + ms;
  } else {
    m_s = ms;
  }
  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
  milisecond.innerText = m_s;
}
function pauseClock() {
  clearInterval(timer);
}
function resetClock() {
  clearInterval(timer);
  hours = 0;
  mins = 0;
  secs = 0;
  hour.innerHTML = "00";
  minute.innerHTML = "00";
  second.innerHTML = "00";
  milisecond.innerHTML = "00";
}
play.addEventListener("click", start);
pause.addEventListener("click", pauseClock);
reset.addEventListener("click", resetClock);
