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

	setTimeout(() => {
		document.getElementById("heading").addEventListener("click",function() {
			clear_video();
			refreshVideoList(true);
		});
		refreshVideoList(false);
	}, 500);
}

function clear_video()
{
	document.getElementById("video-feed").style.height = "calc(100vh - 3rem)";
	document.getElementById("videoplayer-container").innerHTML = "";
}