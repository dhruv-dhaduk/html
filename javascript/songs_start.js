function get_yt_thumbnail_link(link)
{
    const index = link.lastIndexOf('/');
    const videoID = link.substring(index + 1);

    const thumbnail = "https://img.youtube.com/vi/" + videoID + "/hqdefault.jpg";
    
    return thumbnail;
}