function get_videoID_from_link(link) 
{
    const url = new URL(link);
    if (url.hostname === 'www.youtube.com' && url.searchParams.has('v')) 
    {
        return url.searchParams.get('v');
    } 
    else if (url.hostname === 'youtu.be')
    {
        return url.pathname.substr(1); // Remove the leading '/'
    } 
    else 
    {
        return null;
    }
}

function convertDurationToHMS(duration) {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = (parseInt(match[1]) || 0);
    const minutes = (parseInt(match[2]) || 0);
    const seconds = (parseInt(match[3]) || 0);

    if (hours == 0)
    {
        return `${minutes.toString()}:${seconds.toString().padStart(2, '0')}`;
    }
    else
    {
        return `${hours.toString()}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

function convert_views_format(viewCount)
{
    if (viewCount >= 1000000000)
        return (parseInt(viewCount / 100000000) / 10).toString() + "B views";
    else if (viewCount >= 1000000)
        return (parseInt(viewCount / 100000) / 10).toString() + "M views";
    else if (viewCount >= 1000)
        return (parseInt(viewCount / 100) / 10).toString() + "K views";
    else
        return viewCount.toString() + " views";
}

function convert_upload_time_format(uploadTime)
{   
    const d = new Date(uploadTime);
    const timeDiff = (Date.now() - d) / 1000;
    
    if (timeDiff >= 31536000)
    {
        const years = parseInt(timeDiff / 31536000);
        if (years > 1)
            return years + " years ago";
        else
            return years + " year ago";
    }
    else if (timeDiff >= 2592000)
    {
        const months = parseInt(timeDiff / 2592000);
        if (months > 1)
            return months + " months ago";
        else
            return months + " month ago";
    }
    else if (timeDiff >= 604800)
    {
        const weeks = parseInt(timeDiff / 604800);
        if (weeks > 1)
            return weeks + " weeks ago";
        else 
            return weeks + " week ago";
    }
    else if (timeDiff >= 86400)
    {
        const days = parseInt(timeDiff / 86400);
        if (days > 1)
            return days + " days ago";
        else 
            return days + " day ago";
    }
    else if (timeDiff >= 3600)
    {
        const hours = parseInt(timeDiff / 3600);
        if (hours > 1)
            return hours + " hours ago";
        else 
            return hours + " hour ago";
    }
    else if (timeDiff > 60)
    {
        const mins = parseInt(timeDiff / 60);
        if (mins > 1)
            return mins + " minutes ago";
        else
            return mins + " minute ago";
    }
    else
    {
        return "just now";
    }
}