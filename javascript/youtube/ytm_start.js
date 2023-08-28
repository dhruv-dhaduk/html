if(!isMobileDevice())
{
    window.location.href = "youtube.html";
}

var playingVideoData;

function play_video(videoData)
{
	const videoFeed = document.getElementById("video-feed");
	const playerParent = document.getElementById("videoplayer-container");
	playerParent.innerHTML = "";

	const videoPlayerHTML = "<iframe class=\"videoplayer\" id=\"videoplayer\" src=\"https://www.youtube.com/embed/" + videoData["id"] + "?autoplay=1&mute=1&rel=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"autoplay; picture-in-picture;\" allowfullscreen></iframe>";

	playerParent.innerHTML = videoPlayerHTML;
	videoFeed.style.height = "calc(100vh - 3rem - 0.5625*100vw)";
	document.getElementById("videoplay-info").style.display = "block";
	document.getElementById("videoplay-title").innerHTML = videoData["videoTitle"];
	document.getElementById("videoplay-views").innerHTML = convert_number_format(videoData["viewCount"], "views");
	document.getElementById("videoplay-uploaded").innerHTML = convert_upload_time_format(videoData["uploadTime"]);
	document.getElementById("videoplay-channelIcon").src = videoData["channelIcon"];
	document.getElementById("videoplay-channelTitle").innerHTML = videoData["channelTitle"];
	document.getElementById("videoplay-subscribers").innerHTML = convert_number_format(videoData["subscriberCount"], "");
	document.getElementById("videoplay-likes").innerHTML = convert_number_format(videoData["likeCount"], "");

	if (playingVideoData != undefined)
		playingVideoData["htmlItem"].style.display = "block";

	videoData["htmlItem"].style.display = "none";
	playingVideoData = videoData;

	const old_share = document.getElementById("shareBtn");
	const new_share = old_share.cloneNode(true);
	old_share.replaceWith(new_share);
	new_share.addEventListener("click", function() {
		navigator.share({
			title: videoData["videoTitle"],
			url: videoData["link"]
		});
	});

	const old_subscribe = document.getElementById("subscribeBtn");
	const new_subscribe = old_subscribe.cloneNode(true);
	old_subscribe.replaceWith(new_subscribe);
	new_subscribe.addEventListener("click", function() {
		window.open(videoData["channelLink"], "_blank");
	});

	setTimeout(() => {
		refreshVideoList(false);
	}, 500);
}

function clear_video()
{
	document.getElementById("video-feed").style.height = "calc(100vh - 3rem)";
	document.getElementById("videoplayer-container").innerHTML = "";
	document.getElementById("videoplay-info").style.display = "none";

	if (playingVideoData != undefined)
		playingVideoData["htmlItem"].style.display = "block";
}