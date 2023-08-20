var sheetId = "1xTdT1nE-vP_P3iG7sE1WCkGzr9U-vILrwah0D_iiEZ4";
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = "youtube";
const query = encodeURIComponent("Select *");
const url = `${base}&sheet=${sheetName}&tq=${query}`;

const API_KEY_LIST = [];

const data = [];

// document.addEventListener("DOMContentLoaded", init);

var data_length = -1;

function init()
{
    read_sheet();

    const itvID = setInterval(() => {
        if (data.length == data_length)
        {
            load_data();
            API_KEY = "";
            sheetId = "";
            while (API_KEY_LIST.length) API_KEY_LIST.pop();
            clearInterval(itvID);
        }
    });
}

function read_sheet()
{
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
            data_length = jsonData.table.rows.length;

            jsonData.table.rows.forEach((rowData) => {
                var key = "";
                try {
                    key = rowData.c[2].v;
                }
                catch(err){ }
                if (key != "")
                    API_KEY_LIST.push(key);
            });

            jsonData.table.rows.forEach((rowData) => {
                var timestamp, link;
                link = rowData.c[1].v;
                try {
                    timestamp = rowData.c[0].v;
                }
                catch(err){
                    timestamp = "";
                }
                if (timestamp.toLowerCase() != "timestamp")
                {
                    const r = {};
                    r["link"] = link;
                    var key_index = 0;
                    var key = "";
                    if (key_index < API_KEY_LIST.length)
                    {
                        key = API_KEY_LIST[key_index];
                        r["status"] = "fetching";
                        fetch_yt_video_data(link, r, key);
                    }
                    else
                    {
                        r["status"] = "keyerror";
                        data.push(r);
                        return;
                    }

                    const itvID = setInterval(() => {
                        if (r["status"] == "done" || r["status"] == "failed")
                        {
                            data.push(r);
                            clearInterval(itvID);
                        }
                        else if (r["status"] == "keyerror")
                        {
                            key_index++;
                            if (key_index < API_KEY_LIST.length)
                            {
                                key = API_KEY_LIST[key_index];
                                r["status"] = "fetching";
                                fetch_yt_video_data(link, r, key);
                            }
                            else
                            {
                                r["status"] = "keyerror";
                                data.push(r);
                                clearInterval(itvID);
                            }
                        }
                    }, 100);
                }
            })
        });
}

function fetch_yt_video_data(link, videoDataRet, API_KEY)
{
    // Extract video ID from the link
    const videoId = get_videoID_from_link(link);

    // Construct the API endpoint URL
    const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet,contentDetails&id=${videoId}&key=${API_KEY}`;

    videoDataRet["apiKey"] = API_KEY;

    fetch(videoUrl)
    .then(response => {
        if (response.status != 200)
            return null;
        return response.json();
    })
    .then(videoData => {
        if (videoData == null)
        {
            videoDataRet["status"] = "keyerror";
            return null;
        }
        const video = videoData.items[0];
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
        .then(response => {
            if (response.status != 200)
                return null;
            return response.json();
        })
        .then(channelData => {
            if (channelData == null)
            {
                videoDataRet["status"] = "keyerror";
                return null;
            }
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
