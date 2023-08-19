// document.addEventListener("DOMContentLoaded", load_data());

document.getElementById("heading").addEventListener("click", shuffleVideoItems);

function load_data()
{
    const middle_dot = " <span class=\"dot\">&#183</span> ";
    const list = document.getElementById("video-list");

    for (r of data) 
    {
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
                duration.className = "duration";
                duration.innerHTML = r["duration"];
            video_item_info.className = "video-item-info";
                channel_icon.className =  "channel-icon";
                channel_icon.src = r["channelIcon"];
                video_item_texts.className = "video-item-texts";
                    video_title.className = "video-title";
                    video_title.innerHTML = r["videoTitle"];
                    additional_data.className = "video-additional-data";
                    additional_data.innerHTML = r["channelTitle"] + middle_dot + r["viewCount"] + " views" + middle_dot + r["uploadTime"];
                three_dots.className = "video-three-dots";
                three_dots.src = "../res/logos/white/three_dots_white.png";

        video_item_texts.append(video_title);
        video_item_texts.append(additional_data);
        thumb_container.append(thumbnail);
        thumb_container.append(duration);
        video_item_info.append(channel_icon);
        video_item_info.append(video_item_texts);
        video_item_info.append(three_dots);
        container.append(thumb_container);
        container.append(video_item_info);

        list.append(container);

        r["htmlItem"] = container;
    }

    document.getElementById("loading").style.display = "none";
}

function shuffleVideoItems()
{
    shuffle(data);
    const list = document.getElementById("video-list");
    list.innerHTML = "";

    for (r of data)
    {
        list.append(r["htmlItem"]);
    }
}