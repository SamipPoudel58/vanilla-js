const meter = document.querySelector(".number");
const pointer = document.querySelector(".pointer");
const check = document.querySelector(".check");
const ANIMATION_TIME = 3;

function checkShitsGiven() {
  // in seconds

  pointer.style.animation = `rotate ${ANIMATION_TIME}s 1`;
  function generateNum() {
    let randNum = Math.random() * 100;
    meter.innerText = randNum.toFixed(0);
  }

  const intervalId = setInterval(generateNum, 80);

  setTimeout(() => {
    clearInterval(intervalId);
    meter.innerText = 0;
    pointer.style.animation = "";
  }, ANIMATION_TIME * 1000);
}

checkShitsGiven();

check.addEventListener("click", checkShitsGiven);
