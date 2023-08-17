function isMobileDevice()
{
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    return regexp.test(details);

}