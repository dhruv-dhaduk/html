if(!isMobileDevice())
{
    window.location.href = "youtube.html";
}

function play_video(videoData)
{
	var videoPlayer = document.getElementById("videoplayer");
	const videoFeed = document.getElementById("video-feed");
	const playerParent = document.getElementById("header");
	if (videoPlayer != null)
		playerParent.removeChild(videoPlayer);

	videoPlayer = null;
	const videoPlayerHTML = "<iframe class=\"videoplayer\" id=\"videoplayer\" src=\"https://www.youtube.com/embed/" + get_videoID_from_link(videoData["link"]) + "?autoplay=1&mute=1&rel=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"autoplay; picture-in-picture;\" allowfullscreen></iframe>";

	playerParent.innerHTML += videoPlayerHTML;
	videoFeed.style.height = "calc(100vh - 3rem - 0.5625*100vw)";

	setTimeout(() => {
		document.getElementById("heading").addEventListener("click",function() {
			clear_video();
			shuffleVideoItems();
		});
	}, 500);
}

function clear_video()
{
	document.getElementById("video-feed").style.height = "calc(100vh - 3rem)";
	const videoPlayer = document.getElementById("videoplayer");
	if (videoPlayer == null)
		return;
	document.getElementById("header").removeChild(document.getElementById("videoplayer"));
}