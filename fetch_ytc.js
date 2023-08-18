function fetch_yt_video_data(link, videoDataRet)
{
    const API_KEY = "AIzaSyAXbzu0tUOtxNQwTKEaRFzkLZcE31Cu84s";

    // Extract video ID from the link
    const videoId = get_videoID_from_link(link);

    // Construct the API endpoint URL
    const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet,contentDetails&id=${videoId}&key=${API_KEY}`;

    fetch(videoUrl)
    .then(response => response.json())
    .then(videoData => {
        const video = videoData.items[0];
        // console.log(video.contentDetails);
        const snippet = video.snippet;
        const statistics = video.statistics;

        const thumbnail = snippet.thumbnails.maxres.url;
        const videoTitle = snippet.title;
        const channelTitle = snippet.channelTitle;
        const channelId = snippet.channelId;
        const viewCount = statistics.viewCount;
        const likeCount = statistics.likeCount;
        const uploadTime = snippet.publishedAt;
        // const duration = convertISO8601ToTime(video.contentDetails.duration);
        const duration = video.contentDetails.duration;

        videoDataRet["thumbnail"] = thumbnail;
        videoDataRet["videoTitle"] = videoTitle;
        videoDataRet["channelTitle"] = channelTitle;
        videoDataRet["channelLink"] = `https://www.youtube.com/channel/${channelId}`;
        videoDataRet["viewCount"] = viewCount;
        videoDataRet["likeCount"] = likeCount;
        videoDataRet["uploadTime"] = uploadTime;
        videoDataRet["duration"] = convertDurationToHMS(duration);

        // Construct the API endpoint URL for channel details
        const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`;

        // Make the API request for channel details
        fetch(channelUrl)
        .then(response => response.json())
        .then(channelData => {
            const channel = channelData.items[0];
            const channelIcon = channel.snippet.thumbnails.default.url;
            const subscriberCount = channel.statistics.subscriberCount;

            videoDataRet["channelIcon"] = channelIcon;
            videoDataRet["subscriberCount"] = subscriberCount;
            videoDataRet["status"] = "done";
        })
        .catch(error => {
            console.error("Error fetching channel details:", error);
            videoDataRet["status"] = "failed";
        });
    })
    .catch(error => {
        console.error("Error fetching video details:", error);
        videoDataRet["status"] = "failed";
    });
}
