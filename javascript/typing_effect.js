var in_effect = false;
var interval_id;
var e_ineffect;
var text_ineffect;

function typing_effect(e, text)
{   
    if (in_effect)
    {
        clearInterval(interval_id);
        e_ineffect.innerHTML = text_ineffect;
        console.log("forced end : " + text_ineffect);
    }
    
    in_effect = true;

    e_ineffect = e;
    text_ineffect = text;
    
    console.log("start effect : " + text);
    const l = text.length;
    if (l < 1)
        return;

    e.innerHTML = text.charAt(0);

    const interval_time = 35;

    var i = 1;
    clearInterval(interval_id);
    interval_id = setInterval(() => {
        if (i < l)
        {
            e.innerHTML += text.charAt(i);
            i++;
        }
        else
        {
            clearInterval(interval_id);
            console.log("end effect : " + text + ", index : " + i);
            in_effect = false;
        }
    }, interval_time);
}