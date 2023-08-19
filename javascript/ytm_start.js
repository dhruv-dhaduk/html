if(!isMobileDevice())
{
    // window.location.href = "youtube.html";
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
			console.log("CLK");
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

const x = [
    {
      "link": "https://youtu.be/k157GjJHvK4",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/k157GjJHvK4/maxresdefault.jpg",
      "videoTitle": "Dosti (Full Video) RRR - Amit Trivedi, MM Kreem | NTR, Ram Charan, Ajay Devgn, Alia | SS Rajamouli",
      "channelTitle": "T-Series",
      "channelLink": "https://www.youtube.com/channel/UCq-Fj5jknLsUf-MWSy4_brA",
      "viewCount": "43163552",
      "likeCount": "429260",
      "uploadTime": "2022-04-21T10:30:01Z",
      "duration": "5:17",
      "channelIcon": "https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s88-c-k-c0x00ffffff-no-rj",
      "subscriberCount": "247000000"
    },
    {
      "link": "https://youtu.be/dx4Teh-nv3A",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/dx4Teh-nv3A/maxresdefault.jpg",
      "videoTitle": "Namo Namo - Lyrical | Kedarnath | Sushant Rajput | Sara Ali Khan | Amit Trivedi | Amitabh B",
      "channelTitle": "Zee Music Company",
      "channelLink": "https://www.youtube.com/channel/UCFFbwnve3yF62-tVXkTyHqg",
      "viewCount": "515731688",
      "likeCount": "3635133",
      "uploadTime": "2020-07-09T06:13:47Z",
      "duration": "5:29",
      "channelIcon": "https://yt3.ggpht.com/5ozNNrQBUJY8TPt2BYo6fEL-07ilkWHVedWCGFjtvuHU0aYrg1Iop-LJvprodA1_9-MTv7G_YA=s88-c-k-c0x00ffffff-no-rj",
      "subscriberCount": "98400000"
    },
    {
      "link": "https://youtu.be/HN_YLO1QUPg",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/HN_YLO1QUPg/maxresdefault.jpg",
      "videoTitle": "\"है भाग्य मेरा, सौभाग्य मेरा, मैं तुमको शीश नवाता हूं और धन्य-धन्य हो जाता हूं\"",
      "channelTitle": "Bharatiya Janata Party",
      "channelLink": "https://www.youtube.com/channel/UCrwE8kVqtIUVUzKui2WVpuQ",
      "viewCount": "3617726",
      "uploadTime": "2022-01-30T14:52:51Z",
      "duration": "3:59",
      "channelIcon": "https://yt3.ggpht.com/zUIENkLHwVcF8YXnR2FOq2jmb7TopeaxmPm3nVPzjQ_a6C_9hdBJ9o1UXejThQBjfBkBNBTfSQ=s88-c-k-c0x00ffffff-no-rj",
      "subscriberCount": "4870000"
    },
    {
      "link": "https://youtu.be/ouKbrNiaPxo",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/ouKbrNiaPxo/maxresdefault.jpg",
      "videoTitle": "Komuram Bheemudo Song (Full Video) - RRR - NTR, Ram Charan | Bhairava | M M Kreem | SS Rajamouli",
      "channelTitle": "T-Series",
      "channelLink": "https://www.youtube.com/channel/UCq-Fj5jknLsUf-MWSy4_brA",
      "viewCount": "46351150",
      "likeCount": "540012",
      "uploadTime": "2022-05-06T10:30:55Z",
      "duration": "5:44",
      "channelIcon": "https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s88-c-k-c0x00ffffff-no-rj",
      "subscriberCount": "247000000"
    },
    {
      "link": "https://youtu.be/uv9Dv6fzg9w",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/uv9Dv6fzg9w/maxresdefault.jpg",
      "videoTitle": "Dholida | Full Music Video | Gangubai Kathiawadi | Sanjay Leela Bhansali | Alia Bhatt",
      "channelTitle": "Saregama Music",
      "channelLink": "https://www.youtube.com/channel/UC_A7K2dXFsTMAciGmnNxy-Q",
      "viewCount": "37739342",
      "likeCount": "159857",
      "uploadTime": "2022-04-14T03:30:08Z",
      "duration": "3:10",
      "channelIcon": "https://yt3.ggpht.com/dxED1O-r5cRS73JBlUk4VS3pZHDfiHcuRjRbFMcf6KgYhxP4NUlD7x0h4TR1XTXkl-JGjTPTYQ=s88-c-k-c0x00ffffff-no-rj",
      "subscriberCount": "36400000"
    },
    {
      "link": "https://youtu.be/sAzlWScHTc4",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/sAzlWScHTc4/maxresdefault.jpg",
      "videoTitle": "Naacho Naacho (Full Video) RRR - NTR, Ram Charan | M M Kreem | SS Rajamouli | Vishal Mishra & Rahul",
      "channelTitle": "T-Series",
      "channelLink": "https://www.youtube.com/channel/UCq-Fj5jknLsUf-MWSy4_brA",
      "viewCount": "370224976",
      "likeCount": "3146978",
      "uploadTime": "2022-04-11T10:30:13Z",
      "duration": "4:35",
      "channelIcon": "https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s88-c-k-c0x00ffffff-no-rj",
      "subscriberCount": "247000000"
    },
    {
      "link": "https://youtu.be/Tl4bQBfOtbg",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/Tl4bQBfOtbg/maxresdefault.jpg",
      "videoTitle": "Ram Siya Ram (Lyrical) Adipurush | Prabhas | Sachet-Parampara,Manoj Muntashir S |Om Raut | Bhushan K",
      "channelTitle": "T-Series",
      "channelLink": "https://www.youtube.com/channel/UCq-Fj5jknLsUf-MWSy4_brA",
      "viewCount": "48959663",
      "likeCount": "530693",
      "uploadTime": "2023-06-07T12:30:20Z",
      "duration": "4:11",
      "channelIcon": "https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s88-c-k-c0x00ffffff-no-rj",
      "subscriberCount": "247000000"
    },
    {
      "link": "https://youtu.be/VJ-o8y8JqCQ",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/VJ-o8y8JqCQ/maxresdefault.jpg",
      "videoTitle": "Jai Shri Ram (Full Video) Adipurush | Prabhas | Ajay-Atul, Manoj Muntashir S | Om Raut | Bhushan K",
      "channelTitle": "T-Series",
      "channelLink": "https://www.youtube.com/channel/UCq-Fj5jknLsUf-MWSy4_brA",
      "viewCount": "5536649",
      "likeCount": "82059",
      "uploadTime": "2023-06-25T05:30:08Z",
      "duration": "3:33",
      "channelIcon": "https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s88-c-k-c0x00ffffff-no-rj",
      "subscriberCount": "247000000"
    },
    {
      "link": "https://youtu.be/CU1tFtk_NFY",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/CU1tFtk_NFY/maxresdefault.jpg",
      "videoTitle": "Full Video:Ghoomar|Padmaavat|Deepika Padukone Shahid Kapoor Ranveer Singh|Shreya Ghoshal SwaroopKhan",
      "channelTitle": "T-Series",
      "channelLink": "https://www.youtube.com/channel/UCq-Fj5jknLsUf-MWSy4_brA",
      "viewCount": "171702080",
      "likeCount": "746981",
      "uploadTime": "2018-03-19T17:02:25Z",
      "duration": "4:36",
      "channelIcon": "https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s88-c-k-c0x00ffffff-no-rj",
      "subscriberCount": "247000000"
    },
    {
      "link": "https://youtu.be/EatzcaVJRMs",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/EatzcaVJRMs/maxresdefault.jpg",
      "videoTitle": "Full Video: Tera Yaar Hoon Main | Sonu Ke Titu Ki Sweety | Arijit Singh Rochak Kohli | Song 2018",
      "channelTitle": "T-Series",
      "channelLink": "https://www.youtube.com/channel/UCq-Fj5jknLsUf-MWSy4_brA",
      "viewCount": "330929181",
      "likeCount": "2708341",
      "uploadTime": "2018-03-07T10:19:59Z",
      "duration": "4:28",
      "channelIcon": "https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s88-c-k-c0x00ffffff-no-rj",
      "subscriberCount": "247000000"
    },
    {
      "link": "https://youtu.be/vdY5SFZBgnk",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/vdY5SFZBgnk/maxresdefault.jpg",
      "videoTitle": "Pushpa: Saami Saami - Full Video Song | Allu Arjun, Rashmika Mandanna | Sunidhi C | DSP | Sukumar",
      "channelTitle": "T-Series",
      "channelLink": "https://www.youtube.com/channel/UCq-Fj5jknLsUf-MWSy4_brA",
      "viewCount": "598903370",
      "likeCount": "3660946",
      "uploadTime": "2022-01-07T06:30:09Z",
      "duration": "3:14",
      "channelIcon": "https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s88-c-k-c0x00ffffff-no-rj",
      "subscriberCount": "247000000"
    },
    {
      "link": "https://youtu.be/ewvddSUEONQ",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/ewvddSUEONQ/maxresdefault.jpg",
      "videoTitle": "Behti Hawa Sa Tha Woh – 3 Idiots | Aamir Khan, Madhavan, Sharman J | Shaan & Shantanu M | Swanand K",
      "channelTitle": "Zee Music Company",
      "channelLink": "https://www.youtube.com/channel/UCFFbwnve3yF62-tVXkTyHqg",
      "viewCount": "59969837",
      "likeCount": "746047",
      "uploadTime": "2021-04-09T08:30:06Z",
      "duration": "5:14",
      "channelIcon": "https://yt3.ggpht.com/5ozNNrQBUJY8TPt2BYo6fEL-07ilkWHVedWCGFjtvuHU0aYrg1Iop-LJvprodA1_9-MTv7G_YA=s88-c-k-c0x00ffffff-no-rj",
      "subscriberCount": "98400000"
    },
    {
      "link": "https://youtu.be/UBBHpoW3AKA",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/UBBHpoW3AKA/maxresdefault.jpg",
      "videoTitle": "BESABRIYAAN Full Video Song | M. S. DHONI - THE UNTOLD STORY | Sushant Singh Rajput",
      "channelTitle": "T-Series",
      "channelLink": "https://www.youtube.com/channel/UCq-Fj5jknLsUf-MWSy4_brA",
      "viewCount": "65666664",
      "likeCount": "810229",
      "uploadTime": "2016-11-05T13:00:03Z",
      "duration": "3:30",
      "channelIcon": "https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s88-c-k-c0x00ffffff-no-rj",
      "subscriberCount": "247000000"
    },
    {
      "link": "https://youtu.be/-6oAZwTGD2c",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/-6oAZwTGD2c/maxresdefault.jpg",
      "videoTitle": "Ranchhod Rangila | Sabhiben Ahir, @RAJESH_AHIR | Song Of Faith | New Gujrati Song 2023",
      "channelTitle": "RAJESH AHIR",
      "channelLink": "https://www.youtube.com/channel/UCkZlu5mb0UGWoZdURaDVMKg",
      "viewCount": "33400773",
      "likeCount": "312284",
      "uploadTime": "2023-03-04T03:30:10Z",
      "duration": "4:41",
      "channelIcon": "https://yt3.ggpht.com/ytc/AOPolaQiTGp1UJWoRgLwo2snGcRJRGkqsBPsLpCBkHXwZtE=s88-c-k-c0x00ffffff-no-rj-mo",
      "subscriberCount": "209000"
    },
    {
      "link": "https://youtu.be/pGG_Zosn-qo",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/pGG_Zosn-qo/maxresdefault.jpg",
      "videoTitle": "Gori Tame Manda Lidha Mohi Raj - Umesh Barot | Ishani Dave | Saiyar Mori Re | New Gujarati Song 2022",
      "channelTitle": "Saga Music Gujarati",
      "channelLink": "https://www.youtube.com/channel/UCJ53PHcdd0sPyzZwLtRSybA",
      "viewCount": "40158147",
      "likeCount": "335965",
      "uploadTime": "2022-07-01T03:29:23Z",
      "duration": "2:51",
      "channelIcon": "https://yt3.ggpht.com/ytc/AOPolaRpvlK_f_LTNjp5amn6YR6OXECYXKVL6DPjEqDP=s88-c-k-c0x00ffffff-no-rj",
      "subscriberCount": "602000"
    },
    {
      "link": "https://youtu.be/Jv8KRwF1zQs",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/Jv8KRwF1zQs/maxresdefault.jpg",
      "videoTitle": "Moti Veraana | New Navratri Song 2020 | Songs of Faith | Amit Trivedi feat. Osman Mir | AT Azaad",
      "channelTitle": "Amit Trivedi Azaad",
      "channelLink": "https://www.youtube.com/channel/UCV-l3a6kn4443HWJxPv4pVQ",
      "viewCount": "64472537",
      "likeCount": "542977",
      "uploadTime": "2020-04-01T04:29:11Z",
      "duration": "3:59",
      "channelIcon": "https://yt3.ggpht.com/oM29Kn1CEQYScat7jJ0EN3oaSraHbUiHc0VsXmWvGtrdDr0TtJbrdSugr3CYH2DfR5CIe2s1=s88-c-k-c0x00ffffff-no-rj",
      "subscriberCount": "329000"
    },
    {
      "link": "https://youtu.be/bD5msFH9gpU",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/bD5msFH9gpU/maxresdefault.jpg",
      "videoTitle": "Bol Mari Ambe",
      "channelTitle": "Various Artists - Topic",
      "channelLink": "https://www.youtube.com/channel/UCWhkHh4tl-ktl3fsuN_zEdA",
      "viewCount": "329158",
      "likeCount": "2391",
      "uploadTime": "2022-08-19T06:00:06Z",
      "duration": "3:46",
      "channelIcon": "https://yt3.ggpht.com/ytc/AOPolaQqtqyHMx9kQUyz_RwKckcqNMHZbo4mdr8BsV1CENy-lIprZ7IPMdCxCkN0-ub2=s88-c-k-c0x00ffffff-no-rj",
      "subscriberCount": "249000"
    },
    {
      "link": "https://youtu.be/ejunflwgquc",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/ejunflwgquc/maxresdefault.jpg",
      "videoTitle": "Rajbha Gadhvi || Dwarka Na Devni To Vat J No Thay || Okho To Duniya Thi Nokho Kevay || New Song 2022",
      "channelTitle": "Rajbha Gadhvi Official",
      "channelLink": "https://www.youtube.com/channel/UCG2_tun8pm5yqCDdPDGM2NA",
      "viewCount": "23817685",
      "likeCount": "188448",
      "uploadTime": "2022-03-17T02:30:14Z",
      "duration": "3:36",
      "channelIcon": "https://yt3.ggpht.com/ytc/AOPolaTT4U89hA34hczmHpj3S3AVdqNslwUa9Om0GFP2Cg=s88-c-k-c0x00ffffff-no-rj-mo",
      "subscriberCount": "762000"
    },
    {
      "link": "https://youtu.be/1ZrZeA8j15w",
      "status": "done",
      "thumbnail": "https://i.ytimg.com/vi/1ZrZeA8j15w/maxresdefault.jpg",
      "videoTitle": "Asvaar - Hellaro | Song Promo | Aishwarya Majmudar & Mooralala Marwada | Mehul Surti",
      "channelTitle": "Harfanmaula Films",
      "channelLink": "https://www.youtube.com/channel/UC1nF8q8qGjCvmG7l6s8FH9g",
      "viewCount": "16343233",
      "likeCount": "81912",
      "uploadTime": "2019-10-22T13:09:36Z",
      "duration": "2:51",
      "channelIcon": "https://yt3.ggpht.com/hepoXpebk9XTntwdRoNxpKL_O_Ruce8Vn0mNa1zXMjnPIrYD1svJXDHnsQgUO4dvWgd8ojT9=s88-c-k-c0x00ffffff-no-rj",
      "subscriberCount": "185000"
    }
];