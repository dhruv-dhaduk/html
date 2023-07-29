let redirected = false;

function changeContent(e)
{
    if (redirected)
        return;

    let msg = "तुम अपने मार्ग से भटक रहे हो वत्स | ";
    e.innerHTML = "";

    const total_time =  3000;

    const delay_per_char = total_time / msg.length;

    let i = 0;
    setInterval(() => {
        if (i < msg.length)
        {
            e.innerHTML += msg.charAt(i);
            i++;
        }
        else
        {
            clearInterval();
        }
    }, delay_per_char);

    setTimeout(() => {
        let link = "";
        // window.open(link, "_blank");
    }, total_time + 500);

    redirected = true;
}