// document.addEventListener("DOMContentLoaded", load_data());

document.getElementById("heading").addEventListener("click",function() {
    clear_video();
    refreshVideoList(true);
});

const imgs = document.getElementsByTagName("img");
for (ele of imgs)
{
    ele.addEventListener("contextmenu", function(e) { e.preventDefault(); });
}

function load_data()
{
    // for (r of hardCodedData)
    // {
    //     data.push(r);
    // }

    const middle_dot = " <span class=\"dot\">&#183</span> ";
    const list = document.getElementById("video-list");

    for (const r of data) 
    {
        r["apiKey"] = "";
        if (r["status"] != "done"){
            continue;
        }

        const container = document.createElement("div");
            const thumb_container = document.createElement("div");
                const thumbnail = document.createElement("img");
                const duration = document.createElement("p");
            const video_item_info = document.createElement("div");
                const channel_icon = document.createElement("img");
                const video_item_texts = document.createElement("div");
                    const video_title = document.createElement("p");
                    const additional_data = document.createElement("p");
                const three_dots = document.createElement("img");

        container.className = "video-item";
            thumb_container.className = "thumbnail-container";
                thumbnail.className = "thumbnail-img";
                thumbnail.src = r["thumbnail"];
                thumbnail.addEventListener("contextmenu", function(e) { e.preventDefault(); }); 
                thumbnail.addEventListener("click", function() { play_video(r); });
                duration.className = "duration";
                duration.innerHTML = r["duration"];
            video_item_info.className = "video-item-info";
                channel_icon.className =  "channel-icon";
                channel_icon.src = r["channelIcon"];
                channel_icon.addEventListener("contextmenu",function(e) { e.preventDefault(); });
                channel_icon.addEventListener("click", function() { window.open(r["channelLink"], "_blank"); });
                video_item_texts.className = "video-item-texts";
                    video_title.className = "video-title";
                    video_title.innerHTML = r["videoTitle"];
                    additional_data.className = "video-additional-data";
                    additional_data.innerHTML = r["channelTitle"] + middle_dot + convert_views_format(r["viewCount"]) + middle_dot + convert_upload_time_format(r["uploadTime"]);
                three_dots.className = "video-three-dots";
                three_dots.src = "../res/logos/white/three_dots_white.png";
                three_dots.addEventListener("contextmenu", function(e) { e.preventDefault(); });
                three_dots.addEventListener("click", function() { window.open(r["link"], "_blank"); });

        video_item_texts.append(video_title);
        video_item_texts.append(additional_data);
        thumb_container.append(thumbnail);
        thumb_container.append(duration);
        video_item_info.append(channel_icon);
        video_item_info.append(video_item_texts);
        video_item_info.append(three_dots);
        container.append(thumb_container);
        container.append(video_item_info);

        r["htmlItem"] = container;
    }

    
    document.getElementById("loading").style.display = "none";
    refreshVideoList(true);
}

var shuffleITV;

function refreshVideoList(doShuffle)
{
    if (doShuffle)
        shuffle(data);
    const list = document.getElementById("video-list");
    list.innerHTML = "";

    clearInterval(shuffleITV);
    var i = 0;
    shuffleITV = setInterval(() => {
        if (i >= data.length){
            clearInterval(shuffleITV);
            return;
        }
        if (data[i]["status"] == "done")
            list.append(data[i]["htmlItem"]);
        i++;
    }, 200);
}