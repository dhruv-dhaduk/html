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
    return uploadTime.toString();
}