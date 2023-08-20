if(!isMobileDevice())
{
    window.location.href = "youtube.html";
}

function play_video(videoData)
{
	const videoFeed = document.getElementById("video-feed");
	const playerParent = document.getElementById("videoplayer-container");
	playerParent.innerHTML = "";

	const videoPlayerHTML = "<iframe class=\"videoplayer\" id=\"videoplayer\" src=\"https://www.youtube.com/embed/" + get_videoID_from_link(videoData["link"]) + "?autoplay=1&mute=1&rel=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"autoplay; picture-in-picture;\" allowfullscreen></iframe>";

	playerParent.innerHTML = videoPlayerHTML;
	videoFeed.style.height = "calc(100vh - 3rem - 0.5625*100vw)";
	document.getElementById("videoplay-info").style.display = "block";
	document.getElementById("videoplay-title").innerHTML = videoData["videoTitle"];
	document.getElementById("videoplay-views").innerHTML = convert_views_format(videoData["viewCount"]);
	document.getElementById("videoplay-uploaded").innerHTML = convert_upload_time_format(videoData["uploadTime"]);
	document.getElementById("videoplay-channelIcon").src = videoData["channelIcon"];
	document.getElementById("videoplay-channelTitle").innerHTML = videoData["channelTitle"];
	document.getElementById("videoplay-subscribers").innerHTML = videoData["subscriberCount"];
	document.getElementById("videoplay-likes").innerHTML = videoData["likeCount"];

	setTimeout(() => {
		refreshVideoList(false);
	}, 500);
}

function clear_video()
{
	document.getElementById("video-feed").style.height = "calc(100vh - 3rem)";
	document.getElementById("videoplayer-container").innerHTML = "";
	document.getElementById("videoplay-info").style.display = "none";
}