const list = document.getElementById("list");
const clockface = document.getElementById("clockface");
const appMilliseconds = document.getElementById("milliseconds");
const appSeconds = document.getElementById("seconds");
const appMinutes = document.getElementById("minutes");
const startBtn = document.querySelector(".btn-start");
const resetBtn = document.querySelector(".btn-reset");
const clearBtn = document.querySelector(".btn-clear");
const saveBtn = document.querySelector(".btn-save");

// Показания секундомера
let milliseconds = "00";
let seconds = "00";
let minutes = "00";
let init = 0;

let interval;

// Функция запуска и остановки
function toStartStop() {
  if (init === 0) {
    init = 1;
    startBtn.textContent = `Stop`;
    clearInterval(interval);
    interval = setInterval(startStopwatch, 10);
  } else if (init === 1) {
    init = 0;
    clearInterval(interval);
    startBtn.textContent = `Start`;
    // createNewElement();
  }
}

// Логика секундомера
function startStopwatch() {
  milliseconds++;
  if (milliseconds <= 9) {
    appMilliseconds.innerHTML = "0" + milliseconds;
  }
  if (milliseconds > 9) {
    appMilliseconds.innerHTML = milliseconds;
  }
  if (milliseconds > 99) {
    seconds++;
    appSeconds.innerHTML = "0" + seconds;
    milliseconds = 0;
    appMilliseconds.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    minutes++;
    appMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    appSeconds.innerHTML = "0" + 0;
  }
  if (minutes > 9) {
    appMinutes.innerHTML = minutes;
  }
}

// Кнопка старта
startBtn.addEventListener("click", () => {
  toStartStop();
});

// Кнопка ресета
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  milliseconds = "00";
  seconds = "00";
  minutes = "00";
  init = 0;
  startBtn.textContent = "Start";

  appMilliseconds.innerHTML = milliseconds;
  appSeconds.innerHTML = seconds;
  appMinutes.innerHTML = seconds;
});

// function createNewElement() {
//   let li = document.createElement("li");
//   let txt = document.createElement("span");

//   txt.append(readout);

//   ol.appendChild(li).append(txt);
// }

// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toGMTString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// function deleteCookie(name) {
//   setCookie(name, "", {
//     "max-age": -1,
//   });
// }

// saveBtn.addEventListener("click", function () {
//   let listForCookie = list.innerHTML;
//   setCookie("List", listForCookie, 1);
// });

// clearBtn.addEventListener("click", function () {
//   list.innerHTML = "";
//   deleteCookie("List");
// });

// function loadTodo() {
//   list.innerHTML = getCookie("List");
// }

// loadTodo();
// console.log(loadTodo);
