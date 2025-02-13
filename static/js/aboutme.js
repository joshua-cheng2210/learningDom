function clock() {
    var datetoday = new Date();
    var currTime = datetoday.toLocaleTimeString();


    var timeParts = currTime.split(/:| /);
    var hours = timeParts[0];
    var minutes = timeParts[1];
    var seconds = timeParts[2];
    var ampm = timeParts[3];

    document.getElementById("hours").innerText = hours;
    document.getElementById("min").innerText = minutes;
    document.getElementById("sec").innerText = seconds;
    document.getElementById("x").innerText = ampm;
}

var intID = setInterval(function(){clock()},1000);