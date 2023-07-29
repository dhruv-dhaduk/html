pagebtns = document.getElementsByClassName("pagebtn");

for (let i = 0; i < pagebtns.length; i++)
{
    pagebtns[i].addEventListener("click", function() {redirect(pagebtns[i])});
}