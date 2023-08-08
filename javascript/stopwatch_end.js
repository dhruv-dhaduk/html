const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const mills = document.getElementById("mills");

var mills_value = 0;
var seconds_value = 0;
var minutes_value = 0;

var starting_time_mills = Date.now();

function add_timeframe() 
{
    mills_value = Date.now() - starting_time_mills;
    seconds_value = parseInt(mills_value / 1000);
    mills_value = mills_value % 1000;
    mills_value = parseInt(mills_value / 10);

    minutes_value = parseInt(seconds_value / 60);
    seconds_value = seconds_value % 60;


    if (minutes_value < 10)
        minutes.innerHTML = "0" + minutes_value;
    else
        minutes.innerHTML = minutes_value;

    if (seconds_value < 10)
        seconds.innerHTML = "0" + seconds_value;
    else
        seconds.innerHTML = seconds_value;

    if (mills_value < 10)
        mills.innerHTML = "0" + mills_value;
    else
        mills.innerHTML = mills_value;
}

var interval_id;
starting_time_mills = Date.now();
interval_id = setInterval(add_timeframe, 10);