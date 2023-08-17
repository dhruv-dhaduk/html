ismobile = isMobileDevice()

bdy = document.getElementsByTagName('body')

if (ismobile)
{
    bdy[0].innerHTML = "This is a mobile.";
}
else
{
    bdy[0].innerHTML = "This is a PC/laptop device.";
}