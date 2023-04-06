var $ = (String) => document.querySelector(String);
var $$ = (String) => document.querySelectorAll(String);

var btnStart = $(".btn.btn--start");
var btnStop = $(".btn.btn--stop");
var btnReset = $(".btn.btn--reset");
var watch = $(".watch__time");
var watchParent = $(".watch")
var hour = 0;
var minute = 0;
var second = 0;
var interval;
var minutet = "";
var secondt = "";

btnStart.onclick = function() {
    interval = setInterval(() => {
        second++;
        if(second == 60) {
            minute ++;
            second = 0;
        }
        if(minute == 60) {
            hour++;
            minute = 0;
        }
        if(hour == 24) {
            hour = 0
        }
        var hourt = "";

        if(hour <= 9) hourt = "0" + hour;
        else hourt = hour + "";
        if(minute <= 9) minutet = "0" + minute;
        else minutet = minute + "";
        if(second <= 9) secondt = "0" + second;
        else secondt = second + "";
        watch.innerHTML = `${hourt}:${minutet}:${secondt}`;
    }, 1000);
    watchParent.classList.add("start");
    watchParent.classList.remove("stop");
}

btnStop.onclick = function() {
    clearInterval(interval);
    watchParent.classList.remove("start");
    watchParent.classList.add("stop");
}

btnReset.onclick = function() {
    hour = 0;
    minute = 0;
    second = 0;
    if(hour <= 9) hourt = "0" + hour;
        else hourt = hour + "";
        if(minute <= 9) minutet = "0" + minute;
        else minutet = minute + "";
        if(second <= 9) secondt = "0" + second;
        else secondt = second + "";
        watch.innerHTML = `${hourt}:${minutet}:${secondt}`;
}

