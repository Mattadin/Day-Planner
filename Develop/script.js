var timeDisplayEl = $("#currentDay");
const saveBtn = document.getElementById("saveBtn");
let textInfo = document.getElementById("nine-am");

saveBtn.addEventListener("click", saveFnc());


function displayTime() {
    var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    timeDisplayEl.text(rightNow)
}

function nineAm() {
    var currentTime = moment().format("HH");
    var nineAmBg = document.getElementById("nine-am");

    if (currentTime >= 10) {
        nineAmBg.classList.add("past")
    }else if(currentTime <= 8) {
        nineAmBg.classList.add("future")
    } else {
        nineAmBg.classList.add("present")
    }
}

function tenAm() {
    var currentTime = moment().format("HH");
    var nineAmBg = document.getElementById("ten-am");
    if (currentTime >= 11) {
        nineAmBg.classList.add("past")
    }else if(currentTime <= 9) {
        nineAmBg.classList.add("future")
    } else {
        nineAmBg.classList.add("present")
    }
}

function elevenAm() {
    var currentTime = moment().format("HH");
    var nineAmBg = document.getElementById("eleven-am");
    if (currentTime >= 12) {
        nineAmBg.classList.add("past")
    }else if(currentTime <= 10) {
        nineAmBg.classList.add("future")
    } else {
        nineAmBg.classList.add("present")
    }
}

function twelvePm() {
    var currentTime = moment().format("HH");
    var nineAmBg = document.getElementById("twelve-pm");
    if (currentTime >= 13) {
        nineAmBg.classList.add("past")
    }else if(currentTime <= 11) {
        nineAmBg.classList.add("future")
    } else {
        nineAmBg.classList.add("present")
    }
}

function onePm() {
    var currentTime = moment().format("HH");
    var nineAmBg = document.getElementById("one-pm");
    if (currentTime >= 14) {
        nineAmBg.classList.add("past")
    }else if(currentTime <= 12) {
        nineAmBg.classList.add("future")
    } else {
        nineAmBg.classList.add("present")
    }
}

function twoPm() {
    var currentTime = moment().format("HH");
    var nineAmBg = document.getElementById("two-pm");
    if (currentTime >= 15) {
        nineAmBg.classList.add("past")
    }else if(currentTime <= 13) {
        nineAmBg.classList.add("future")
    } else {
        nineAmBg.classList.add("present")
    }
}

function threePm() {
    var currentTime = moment().format("HH");
    var nineAmBg = document.getElementById("three-pm");
    if (currentTime >= 16) {
        nineAmBg.classList.add("past")
    }else if(currentTime <= 14) {
        nineAmBg.classList.add("future")
    } else {
        nineAmBg.classList.add("present")
    }
}

function fourPm() {
    var currentTime = moment().format("HH");
    var nineAmBg = document.getElementById("four-pm");
    if (currentTime >= 17) {
        nineAmBg.classList.add("past")
    }else if(currentTime <= 15) {
        nineAmBg.classList.add("future")
    } else {
        nineAmBg.classList.add("present")
    }
}

function fivePm() {
    var currentTime = moment().format("HH");
    var nineAmBg = document.getElementById("five-pm");
    if (currentTime >= 18) {
        nineAmBg.classList.add("past")
    }else if(currentTime <= 16) {
        nineAmBg.classList.add("future")
    } else {
        nineAmBg.classList.add("present")
    }
}

function saveFnc() {
    localStorage.setItem("textInfo", textInfo);
}

// Hero running
displayTime();
setInterval(displayTime, 1000);

// Time Blocks running
nineAm();
tenAm();
elevenAm();
twelvePm();
onePm();
twoPm();
threePm();
fourPm();
fivePm();