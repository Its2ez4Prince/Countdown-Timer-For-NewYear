const daysEl= document.getElementById('days');
const hoursEl= document.getElementById('hours');
const secondsEl= document.getElementById('sec');
const minutesEl= document.getElementById('minutes');

const newYear= "01 jan 2024"
function countdown(){
    const newyeardate= new Date(newYear);
    const currentDate= new Date();
    const seconds= (newyeardate-currentDate) /1000;
    const days= Math.floor(seconds/3600/24);
    const hours= Math.floor(seconds/3600) %24;
    const minutes= Math.floor(seconds/60)%60;
    const sec= Math.floor(seconds) %60;
    console.log(days, hours, minutes, sec);

     daysEl.innerHTML= formattime(days);
     hoursEl.innerHTML= formattime(hours);
     secondsEl.innerHTML= formattime(sec);
     minutesEl.innerHTML= formattime(minutes);
}

function formattime(time){
    return time<10 ?(`0${time}`): time;
}
countdown();
setInterval(countdown,1000);

