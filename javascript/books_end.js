const categories = ["Biography", "Engineering", "History", "Science", "Other"];

const sheetId = "1FaSDBetfY3wPURuIwyWQ7cNbZk5IBrZ_s4c4MKpoYtU";
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = "books";
const query = encodeURIComponent("Select *");
const url = `${base}&sheet=${sheetName}&tq=${query}`;

const data = [];

document.addEventListener("DOMContentLoaded", init);

function read_sheet()
{
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));

            jsonData.table.rows.forEach((rowData) => {
                var timestamp, category, name, author, year, link;
                category = rowData.c[1].v;
                name = rowData.c[2].v;
                link = rowData.c[5].v;
                try {
                    timestamp = rowData.c[0].v;
                }
                catch(err){
                    timestamp = "";
                }
                try {
                    author = rowData.c[3].v;
                }
                catch(err){
                    author = "";
                }
                try {
                    year = rowData.c[4].v;
                }
                catch(err){
                    year = "";
                }
                if (timestamp.toLowerCase() != "timestamp")
                {
                    const r = {};
                    r["category"] = category;
                    r["name"] = name;
                    r["author"] = author;
                    r["year"] = year;
                    r["link"] = link;

                    data.push(r);
                }
            })
        });
}

const biographylist = document.getElementById("biographylist");
const engineeringlist = document.getElementById("engineeringlist");
const historylist = document.getElementById("historylist");
const sciencelist = document.getElementById("sciencelist");
const otherlist = document.getElementById("otherlist");

function load_data()
{
    for (const r of data)
    {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const ulbookdata = document.createElement("ul");
        const liauthor = document.createElement("li");
        const liyear = document.createElement("li");
        const lilink = document.createElement("li");
        const a = document.createElement("a");

        li.className = "book";
        img.className = "thumbnail";
        img.src = gdrive_file_thumbnail(r["link"]);
        h3.className = "bookname";
        h3.innerHTML = r["name"];
        ulbookdata.className = "bookdata";
        liauthor.innerHTML = "<b>Author</b> : " + r["author"];
        liyear.innerHTML = "<b>Publication Year</b> : " + r["year"];
        a.className = "download";
        a.innerHTML = "Download";
        a.href = r["link"];
        a.target = "_blank";

        img.addEventListener("mouseenter", function() {
            img.classList.add("hover-effect");
            typing_effect(h3, r["name"]);
        })
        img.addEventListener("mouseleave", function() {
            img.classList.remove("hover-effect");
        })
        img.addEventListener("touchstart", function() {
            img.classList.add("hover-effect");
            typing_effect(h3, r["name"]);
        });
        img.addEventListener("touchend", function() {
            img.classList.remove("hover-effect");
        })
        img.addEventListener("click", function() {
            window.open(r["link"], "_blank");
        });
        img.addEventListener("error", function() {
            img.src = "https://dhruv-dhaduk.github.io/assets/images/document.png";
            var new_img = img.cloneNode(true);
            img.parentNode.replaceChild(new_img, img);
            new_img.addEventListener("click", function() {
                window.open(r["link"], "_blank");
            });
            new_img.addEventListener("mouseenter", function() {
                typing_effect(h3, r["name"]);
            });
            new_img.addEventListener("touchstart", function() {
                typing_effect(h3, r["name"]);
            });
        });
        

        lilink.append(a);
        ulbookdata.append(liauthor);
        ulbookdata.append(liyear);
        ulbookdata.append(lilink);
        li.append(img);
        li.append(h3);
        li.append(ulbookdata);

        get_list(r["category"]).append(li);
    }
}

function get_list(category)
{
    switch (category) {
        case "Biography" :
            return biographylist;
        case "Engineering" : 
            return engineeringlist;
        case "History" :
            return historylist;
        case "Science" :
            return sciencelist;
        case "Other" :
            return otherlist;
        default:
            return null;
    }
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