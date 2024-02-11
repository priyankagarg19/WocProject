var rows = 3;
var col = 3;

var piece1;
var piece2;
var turn =0;
var besttime = 0;
var starttime = 0;
var timeinterval;
var currenttime = 0;
var displaytime = document.getElementById("Time");
var displaybesttime = document.getElementById("besttime");


function timer() {
    currenttime++;
    var min = Math.floor((currenttime)/60);
    var sec = currenttime % 60;
    displaytime.textContent= timeformat(min) + ":" + timeformat(sec);
   

}
function timeformat(t) {
    return (t < 10 ? "0" : "") + t;
}


function besttimer() {
    if(besttime ==0 || besttime>currenttime){
        besttime = currenttime;
        displaybesttime.textContent = displaytime.textContent;

    }
    
}





