const clockContainer = document.querySelector(".clock");
const clockTitle = clockContainer.querySelector(".clock-time");

// document.addEventListener("DOMContentLoaded", function () {
//     init();
// });

function clockInit() {
    setInterval(getTime, 1000);
}

function getTime() {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    clockTitle.innerHTML = `${fillZero(hour,2)} : ${fillZero(min,2)} : ${fillZero(sec,2)}`;
}

function fillZero(number, count) {
    const strNum = String(number);
    const numLen = strNum.length;
    return numLen < count ? new Array(count - numLen + 1).join('0') + strNum : strNum;
}

clockInit();