// digital clock start


function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0) {
        h = 12; //12 hour format

    }


    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("tp").innerHTML = h;
    document.getElementById("tq").innerHTML = m;
    document.getElementById("tr").innerHTML = s;
    document.getElementById("am").innerHTML = session;

    setTimeout(showTime, 1000);

}
showTime();



const welcomeMsggreet = document.querySelector(".welcomeMsg");
const partyTime = document.querySelector(".partyTime");
// const welcomeMsgbox = document.querySelector('.welcomeMsg');
const changePic = document.getElementById("imageChange");
const msgUpdate = document.querySelector(".pic").childNodes;

const wakeupNow = document.getElementById("wakeUpTime");
const afterNoon = document.getElementById("lunchTime");
const night = document.getElementById("napTime");
const h = new Date().getHours();


function partyA() {
    partyTime.innerHTML = " Party Time ";
    changePic.src = "./assets/images/undraw_Developer_activity_re_39tg.svg";
    changePic.style.height = "300px";
    msgUpdate[3].innerHTML = "Let's Grind!!";
    welcomeMsggreet.innerHTML = "Eat-Sleep-Code-Repeat !!";
}

function wakeupA() {
    if (h == wakeupNow.value) {
        changePic.src = "./assets/images/Sunny day-bro.svg";
        msgUpdate[3].innerHTML = "Wake Up !!";
        welcomeMsggreet.innerHTML = "Good Morning !!";
    } else {
        partyA();
    }
}

function lunchA() {
    if (h == afterNoon.value) {
        changePic.src = "./assets/images/Pizza sharing-cuate.svg";
        msgUpdate[3].innerHTML = "Let's have some lunch !!";
        welcomeMsggreet.innerHTML = "Good Afternoon !!";
    } else {
        partyA();
    }
}


function eveningA() {
    if (h == night.value) {
        changePic.src = "./assets/images/Sleep analysis-cuate.svg";
        msgUpdate[3].innerHTML = "Take a break and sleep !!";
        welcomeMsggreet.innerHTML = "Good Night !!";
    } else {
        partyA();
    }
}

wakeupNow.addEventListener("change", wakeupA);
afterNoon.addEventListener("change", lunchA);
night.addEventListener("change", eveningA);


//party event

let partyChange = true;
partyTime.addEventListener("click", change);
function change() {
    if (partyChange) {
        partyTime.innerHTML = "Party is over !!"
        changePic.src = "./assets/images/party.svg";
        changePic.style.height = "300px";
        msgUpdate[3].innerHTML = "I've got the moves like Jagger!!";
        welcomeMsggreet.innerHTML = "Good Night !!";
    } else {
        partyA();
    }
    partyChange = !partyChange;
}

console.log(msgUpdate);




