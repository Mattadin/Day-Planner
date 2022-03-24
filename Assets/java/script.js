var timeDisplayEl = $("#currentDay");
var saveBtn = document.getElementById("saveBtn");
let textInfoNine = document.getElementById("nine-am");
let textInfoTen = document.getElementById("ten-am");
let textInfoEleven = document.getElementById("eleven-am");
let textInfoTwelve = document.getElementById("twelve-pm");
let textInfoOne = document.getElementById("one-pm");
let textInfoTwo = document.getElementById("two-pm");
let textInfoThree = document.getElementById("three-pm");
let textInfoFour = document.getElementById("four-pm");
let textInfoFive = document.getElementById("five-pm");

// Hero clock functionality
function displayTime() {
    var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    timeDisplayEl.text(rightNow)
}

// Time block functionalities for dynamic bgcolor changes
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

// Saves items placed in time blocks for future use
function saveFnc() {
    console.log('saveFnc fired!');
    localStorage.setItem("textInfoNine", textInfoNine.value);
    localStorage.setItem("textInfoTen", textInfoTen.value)
    localStorage.setItem("textInfoEleven", textInfoEleven.value)
    localStorage.setItem("textInfoTwelve", textInfoTwelve.value)
    localStorage.setItem("textInfoOne", textInfoOne.value)
    localStorage.setItem("textInfoTwo", textInfoTwo.value)
    localStorage.setItem("textInfoThree", textInfoThree.value)
    localStorage.setItem("textInfoFour", textInfoFour.value)
    localStorage.setItem("textInfoFive", textInfoFive.value)

}

// populates time block fields from local storage
function getSaves() {
    textInfoNine.textContent = localStorage.getItem("textInfoNine", textInfoNine.value);
    textInfoTen.textContent = localStorage.getItem("textInfoTen", textInfoTen.value);
    textInfoEleven.textContent = localStorage.getItem("textInfoEleven", textInfoEleven.value);
    textInfoTwelve.textContent = localStorage.getItem("textInfoTwelve", textInfoTwelve.value);
    textInfoOne.textContent = localStorage.getItem("textInfoOne", textInfoOne.value);
    textInfoTwo.textContent = localStorage.getItem("textInfoTwo", textInfoTwo.value);
    textInfoThree.textContent = localStorage.getItem("textInfoThree", textInfoThree.value);
    textInfoFour.textContent = localStorage.getItem("textInfoFour", textInfoFour.value);
    textInfoFive.textContent = localStorage.getItem("textInfoFive", textInfoFive.value);
}

saveBtn.addEventListener("click", saveFnc);

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
// populate fields if content exists in local storage
getSaves();