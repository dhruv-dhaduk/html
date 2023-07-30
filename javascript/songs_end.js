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

    for (const r of data)
    {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const p = document.createElement("p");
        const a = document.createElement("a");

        a.href = r["Link"];
        a.target = "_blank";
        img.className = "thumbnail";
        img.src = get_yt_thumbnail_link(r["Link"]);
        p.className = "songname";
        p.innerHTML = r["Name"];

        a.append(img);
        li.append(a);
        li.append(p);

        songlist.append(li);

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
                if (rowData.c[0].v != "Name")
                {
                    const r = {};
                    r["Name"] = rowData.c[0].v;
                    r["Link"] = rowData.c[1].v;
                    data.push(r);
                }
            })
        });
}

function init()
{
    read_sheet();

    var loaded = false;

    setInterval(() => {
        if (loaded)
        {
            clearInterval();
        }
        else
        {
            load_data();
            if (data.length > 0)
                loaded = true;
        }
    })
}