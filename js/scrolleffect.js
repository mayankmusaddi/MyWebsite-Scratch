window.onscroll = function() {changenb()};

function changenb()
{
    var nb = document.getElementById("nav");
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) 
        nb.className = "scrolled";
    else
        nb.className = "navbar";

    var navlength=document.getElementById('nav').clientHeight;
    var imglength=document.getElementById('bgimg').clientHeight;
    var abstart=imglength-navlength;

    var abContentLength=document.getElementById('rightab').clientHeight;
    var abLeftLength=document.getElementById('leftab').clientHeight;
    var abend=imglength+abContentLength-abLeftLength-navlength;

    var ab = document.getElementById("leftab");
    if ( document.documentElement.scrollTop > abstart && document.documentElement.scrollTop < abend)
    {
        ab.style.position = "fixed";
        ab.style.width = 50+"%";
        ab.style.top=navlength+"px";
    } 
    else 
    {
        ab.style.position = "absolute";
        ab.style.width = 100+"%";
        ab.style.top=0+"px";
        if ( document.documentElement.scrollTop > abend )
            ab.style.top=(abContentLength-abLeftLength)+"px";
    }

    var wkstart=imglength+abContentLength-navlength;

    var wkContentLength=document.getElementById('rightwk').clientHeight;
    var wkLeftLength=document.getElementById('leftwk').clientHeight;
    var wkend=imglength+abContentLength+wkContentLength-wkLeftLength;

    var wk = document.getElementById("leftwk");
    if ( document.documentElement.scrollTop > wkstart && document.documentElement.scrollTop < wkend )
    {
        wk.style.position = "fixed";
        wk.style.width = 50+"%";
        wk.style.top=navlength+"px";
    } 
    else 
    {
        wk.style.position = "absolute";
        wk.style.width = 100+"%";
        if ( document.documentElement.scrollTop > wkend )
           wk.style.top=(wkContentLength-wkLeftLength)+"px";
    }
}