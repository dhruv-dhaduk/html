const sheetId = "1GzF5XAUrBLmDZLlrqnG87AVef35qDVS2LmqXhR2Co0M";
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = "songs";
const query = encodeURIComponent("Select *");
const url = `${base}&sheet=${sheetName}&tq=${query}`;

const data = [];
document.addEventListener("DOMContentLoaded", init);

function load_data()
{
    const songlist = document.querySelector(".songlist");

    var i = 0;

    for (const r of data)
    {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const p = document.createElement("p");
        const a = document.createElement("a");

        a.href = r["Link"];
        a.target = "_blank";
        img.className = "thumbnail";
        img.src  = get_yt_thumbnail_link(r["Link"]);
        p.className = "songname";
        p.innerHTML = r["Name"];
        img.addEventListener("mouseover", function(){
            typing_effect(p, r["Name"], i);
        }, false);

        img.addEventListener("touchstart", function(){
            img.classList.add("hover-effect");
            typing_effect(p, r["Name"], i);
        }, false);

        img.addEventListener("touchend", function(){
            img.classList.remove("hover-effect");
        }, false);

        a.append(img);
        li.append(a);
        li.append(p);
        if (i != data.length - 1)
        {
            const hr = document.createElement("hr");
            li.append(hr);
        }

        songlist.append(li);

        i++;
    }
}

const output = document.querySelector('.output')
function read_sheet() {
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));

            jsonData.table.rows.forEach((rowData) => {
                try
                {
                    const col0 = rowData.c[0].v;
                    const col1 = rowData.c[1].v;
                    if (col0.toLowerCase() != "name" && col0.trim().charAt(0) != '#' && col1.trim().charAt(0) != '#')
                    {
                        const r = {};
                        var i = col0.indexOf('#');
                        if (i == -1)
                            r["Name"] = col0;
                        else
                            r["Name"] = col0.substring(0, i).trim();

                        i = col1.indexOf('#');
                        if (i == -1)
                            r["Link"] = col1;
                        else 
                            r["Link"] = col1.substring(0, i).trim();

                        data.push(r);
                    }
                }
                catch(err) {
                    console.log(err)
                }
            })
        });
}

function init()
{
    read_sheet();

    var loaded = false;

    const itvID = setInterval(() => {
        if (loaded)
        {
            clearInterval(itvID);
        }
        else
        {
            load_data();
            if (data.length > 0)
                loaded = true;
        }
    })
}