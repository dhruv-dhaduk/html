function get_videoID_from_link(link) 
{
    var url;
    try {
        url = new URL(link);
    }
    catch(err) {
        return null;
    }

    const vid = {};

    if (url.hostname === 'www.youtube.com' && url.searchParams.has('v'))
    {
        vid["type"] = "video";
        vid["id"] = url.searchParams.get('v');
        return vid;
    }
    else if (url.hostname === 'youtu.be')
    {
        vid["type"] = "video";
        vid["id"] = url.pathname.substr(1);
        return vid;
    }
    else if (url.pathname.startsWith("/shorts/"))
    {
        vid["type"] = "short";
        vid["id"] = url.pathname.substring(url.pathname.indexOf('/', 1) + 1);
        return vid;
    }
    else
    { 
        console.log("LINK ERROR");
        return null;
    }
}

function convertDurationToHMS(duration) {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = (parseInt(match[1]) || 0);
    const minutes = (parseInt(match[2]) || 0);
    const seconds = (parseInt(match[3]) || 0);

    if (hours == 0)
        return `${minutes.toString()}:${seconds.toString().padStart(2, '0')}`;
    else
        return `${hours.toString()}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function convert_number_format(n, suffix)
{
    if (n == undefined)
        return "N/A " + suffix;

    if (n >= 1000000000)
        return (parseInt(n / 100000000) / 10).toString() + "B " + suffix;
    else if (n >= 1000000)
        return (parseInt(n / 100000) / 10).toString() + "M " + suffix;
    else if (n >= 1000)
        return (parseInt(n / 100) / 10).toString() + "K " + suffix;
    else
        return n.toString() + " " + suffix;
}

function convert_upload_time_format(uploadTime)
{   
    if (uploadTime == undefined)
        return "N/A";

    const d = new Date(uploadTime);
    const timeDiff = (Date.now() - d) / 1000;
    
    if (timeDiff >= 31536000)
        return time_relative_to(timeDiff, 31536000, "year");
    else if (timeDiff >= 2592000)
        return time_relative_to(timeDiff, 2592000, "month");
    else if (timeDiff >= 604800)
        return time_relative_to(timeDiff, 604800, "week");
    else if (timeDiff >= 86400)
        return time_relative_to(timeDiff, 86400, "day");
    else if (timeDiff >= 3600)
        return time_relative_to(timeDiff, 3600, "hour");
    else if (timeDiff > 60)
        return time_relative_to(timeDiff, 60, "minute");
    else
        return "just now";
}

function time_relative_to(timediff, unitTime, label)
{
    const x = parseInt(timediff / unitTime);

    if (x > 1)
        return x + " " + label + "s ago";
    else
        return x + " " + label + " ago";
}