function get_yt_thumbnail_link(link)
{
    const index = link.lastIndexOf('/');
    const videoID = link.substring(index + 1);

    const thumbnail = "https://img.youtube.com/vi/" + videoID + "/mqdefault.jpg";
    
    return thumbnail;
}

var in_effect = false;
var interval_id;
var p_ineffect;
var name_ineffect;

function typing_effect(p, name, index)
{   
    if (in_effect)
    {
        clearInterval(interval_id);
        p_ineffect.innerHTML = name_ineffect;
        console.log("forced end : " + name_ineffect);
    }
    
    in_effect = true;

    p_ineffect = p;
    name_ineffect = name;
    
    console.log("start effect : " + name);
    const l = name.length;
    if (l < 1)
        return;

    p.innerHTML = name.charAt(0);

    const interval_time = 35;

    var i = 1;
    clearInterval(interval_id);
    interval_id = setInterval(() => {
        if (i < l)
        {
            p.innerHTML += name.charAt(i);
            i++;
        }
        else
        {
            clearInterval(interval_id);
            console.log("end effect : " + name + ", index : " + i);
            in_effect = false;
        }
    }, interval_time);
}