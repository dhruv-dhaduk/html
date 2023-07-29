/*
    * Key Codes :
    * Enter = 13
    * Slash = 191
*/

function search()
{
    let q = document.getElementById("q");
    let value = q.value;

    if (value.length == 0)
        return;

    let link = "https://www.google.com/search?q=" + value;

    window.open(link, "_blank");

    q.value = null;

}

function checkForEnter(event)
{
    if (event.which == 13)
    {
        search();
    }
}

function focus_searchbar()
{
    setTimeout(() => {
        document.getElementById("q").focus();
    }, 1);
}

function focus_searchbar_keyevent(event)
{
    if (event.which == 191)
    {
        focus_searchbar();
    }
}