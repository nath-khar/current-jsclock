const currentTimeEl = document.querySelector(".currentTime");
const dayEl = document.querySelectorAll(".days p");
const currentDay = new Date().getDay();
const currentDateEl = document.querySelector(".currentDate");
let showTwelveHour = true;

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
 ];

const replaceDate = () => {
    let date = new Date(),
    mo = months[date.getMonth()],
    d = date.getDate(),
    y = date.getFullYear();

    currentDateEl.innerText = mo + " " + d + "," + " " + y;
};

replaceDate();

const twelveHourBtn = document.querySelector('.twelveHour');

twelveHourBtn.addEventListener('click', () =>{
    showTwelveHour = true;
    document.querySelector('.active').classList.remove('active');
    twelveHourBtn.classList.add('active');

    currentTimeEl.innerText += "PM";
});

const twenty4HourBtn = document.querySelector('.twenty4Hour');

twenty4HourBtn.addEventListener('click', () =>{
    showTwelveHour = false;
    document.querySelector('.active').classList.remove('active');
    twenty4HourBtn.classList.add('active');
});

dayEl[currentDay].classList.add("activeDay");
console.log(currentDay);    

const replaceTime = () => {
    let today = new Date(),
        h = today.getHours(),
        m = today.getMinutes(),
        s = today.getSeconds();

    if (showTwelveHour && h > 12) {
        h = h - 12;
    }

    if(s < 10) {
        s = "0" + s;
    }

    if(m < 10) {
        m = "0" + m;
    }

    if(h < 10) {
        h = "0" + h;
    }

    
    currentTimeEl.innerText = h + ":" + m + ":" + s;
    console.log ("running");
};

setInterval(replaceTime, 1000);
replaceTime();

