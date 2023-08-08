const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const mills = document.getElementById("mills");
const startstop = document.getElementById("startstop");
const reset = document.getElementById("reset");

startstop.addEventListener("click", start_stopwatch);
reset.addEventListener("click", reset_stopwatch);

var mills_value = 0;
var seconds_value = 0;
var minutes_value = 0;

var starting_time_mills;

var is_running = false;

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
// starting_time_mills = Date.now();
// interval_id = setInterval(add_timeframe, 10);

function start_stopwatch()
{
    if (is_running == true)
    {
        return;
    }

    clearInterval(interval_id);

    const current_time = Date.now();
    const mills_on_watch = parseInt(mills.innerHTML) * 10 + parseInt(seconds.innerHTML) * 1000 + parseInt(minutes.innerHTML) * 60000;
    starting_time_mills = current_time - mills_on_watch;

    interval_id = setInterval(add_timeframe, 10);
    
    startstop.innerHTML = "STOP";
    is_running = true;
    startstop.removeEventListener("click", start_stopwatch);;
    startstop.addEventListener("click", stop_stopwatch);
}

function stop_stopwatch()
{
    if (is_running == false)
    {
        return;
    }

    clearInterval(interval_id);

    startstop.innerHTML = "START";
    is_running = false;
    startstop.removeEventListener("click", stop_stopwatch);
    startstop.addEventListener("click", start_stopwatch);
}

function reset_stopwatch()
{
    mills.innerHTML = "00";
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";

    starting_time_mills = Date.now();
}