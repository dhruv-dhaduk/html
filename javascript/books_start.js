function gdrive_file_thumbnail(link)
{
    var i = link.lastIndexOf('/');
    link = link.substring(0, i);
    i = link.lastIndexOf('/');
    const fileid = link.substring(i + 1);

    return "https://lh3.googleusercontent.com/d/" + fileid;
}