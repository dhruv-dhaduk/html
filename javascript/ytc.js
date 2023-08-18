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