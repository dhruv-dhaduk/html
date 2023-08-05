function get_yt_thumbnail_link(link)
{
    const index = link.lastIndexOf('/');
    const videoID = link.substring(index + 1);

    const thumbnail = "https://img.youtube.com/vi/" + videoID + "/mqdefault.jpg";
    
    return thumbnail;
}

var in_effect = false;

function typing_effect(p, name, index)
{   
    if (in_effect)
        return;
    
    in_effect = true;
    
    console.log("start effect : " + name);
    const l = name.length;
    if (l < 1)
        return;

    p.innerHTML = name.charAt(0);

    const interval_time = 35;

    var i = 1;
    const itv = setInterval(() => {
        if (i < l)
        {
            p.innerHTML += name.charAt(i);
            i++;
        }
        else
        {
            clearInterval(itv);
            console.log("end effect : " + name + ", index : " + i);
            in_effect = false;
        }
    }, interval_time);
}