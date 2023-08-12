const categories = ["Biography", "Engineering", "History", "Science", "Other"];

const sheetId = "1FaSDBetfY3wPURuIwyWQ7cNbZk5IBrZ_s4c4MKpoYtU";
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = "books";
const query = encodeURIComponent("Select *");
const url = `${base}&sheet=${sheetName}&tq=${query}`;

const data = [];

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
                    console.log(err);
                }
                try {
                    author = rowData.c[3].v;
                }
                catch(err){
                    author = "";
                    console.log(err);
                }
                try {
                    year = rowData.c[4].v;
                }
                catch(err){
                    year = "";
                    console.log(err);
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