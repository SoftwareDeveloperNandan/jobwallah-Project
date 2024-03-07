let remaingTime = 60;

function countTime() {
    
    var countDownTime = setInterval(() => {

        var minutes = Math.floor(remaingTime / 60);
        var seconds = remaingTime % 60;

        //formating minutes and seconds like MM:SS
        var timeDisplay = `${String(minutes).padStart(2, '0')}: ${String(seconds).padStart(2, '0')}`;
        document.getElementById("countingTimeInMinutes").innerHTML = timeDisplay;

            if (remaingTime > 0) {
                console.log("remaining time>>>>", remaingTime);
                remaingTime--;
            }else {
                clearInterval(countDownTime);
                document.getElementById("countingTimeInMinutes").innerHTML = "Time's Up.";
            }
    }, 1000);
}
countTime();
// Countdown hour
let remaingHour = 3600;

function hourConting() {
    var countDownHour = setInterval(() => {

        let hour = Math.floor(remaingHour / 3600);
        let minutes = Math.floor((remaingHour % 3600) / 60);
        let seconds = remaingHour % 60;

        // format hh:mm:ss
        var timeDisplay = `${String(hour).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
        document.getElementById("countHour").innerHTML = timeDisplay;

        if(remaingHour >= 0) {
            remaingHour--;
        }else {
            clearInterval(countDownHour);
            document.getElementById("countHour").innerHTML = "Time's Up.";
        }

    }, 1000)
}

hourConting();

























function questionAttemptTime() {

   let startTime = setInterval(function () {
    if (time > 0) {
        console.log("heloo", time);
        time--;
        
    }else {
        clearInterval(startTime);
    }
   }, 1000)

}
