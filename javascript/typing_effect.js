var in_effect = false;
var interval_id;
var e_ineffect;
var name_ineffect;

function typing_effect(e, name)
{   
    if (in_effect)
    {
        clearInterval(interval_id);
        e_ineffect.innerHTML = name_ineffect;
        console.log("forced end : " + name_ineffect);
    }
    
    in_effect = true;

    e_ineffect = e;
    name_ineffect = name;
    
    console.log("start effect : " + name);
    const l = name.length;
    if (l < 1)
        return;

    e.innerHTML = name.charAt(0);

    const interval_time = 35;

    var i = 1;
    clearInterval(interval_id);
    interval_id = setInterval(() => {
        if (i < l)
        {
            e.innerHTML += name.charAt(i);
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