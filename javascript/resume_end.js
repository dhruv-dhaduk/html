function resizePage()
{
    w = visualViewport.width;
    h = visualViewport.height;
    minWH = Math.min(w, h);

    widthStr = minWH.toString().concat("px");
    document.body.style.width = (minWH - pxOf(2)).toString().concat("px");

    fontSize = (minWH / 45).toString().concat("px");

    document.getElementById("page").style.fontSize = fontSize;
}

resizePage();

window.addEventListener("resize", resizePage);