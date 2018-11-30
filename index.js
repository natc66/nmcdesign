"use strict";
(function () {
    window.onload = function () {
        $("open").onclick = openMenu;
        $("seeAll").onclick = showMore;
        $("seeAll").onmouseover = highlight;
        $("seeAll").onmouseout = reset;
    //    window.onscroll = stickyNav;
    };
    
    function reset () {
        $("seeAll").style.color = "#707070";
        $("seeAll").style.cursor = "default";
    }
    function highlight () {
        $("seeAll").style.cursor = "pointer";
        $("seeAll").style.color = "#EF180F";
        
    }
    
    function showMore () {
        //Change it so that instead of just hiding it changes to "show less" and will hide the new projects
        $("seeAll").textContent = "See Less";
        $("seeAll").onclick = showLess;
        createLink("eventbrite.html", "Eventbrite Usability Testing", "covers/eventbrite.png");
        createLink ("reallyBot.html", "reallyBot Code", "covers/reallyBot.png");
        createLink("squac.html", "SQUAC UI Design", "covers/squacCover.png");
        createLink ("womenInSSB.html", "Women in SSB Research", "covers/womengaming.png");
        createLink ("transformingCouch.html", "Transforming Couch Design", "covers/couch.png");
    }
    
    function createLink (link, name, image) {
        let div = document.createElement("div");
        div.classList.add("container");
        
        let a = document.createElement("a");
        a.href = link;
        
        let img = document.createElement("img");
        img.src = image;
        img.alt = name;
        img.classList.add("image");
        
        let div2 = document.createElement("div");
        div2.classList.add("overlay");
        
        let h1 = document.createElement("h1");
        h1.textContent = name;
        h1.classList.add("text");
        
        div2.appendChild(h1);
        a.appendChild(img);
        a.appendChild(div2);
        div.appendChild(a);
        $("showMore").appendChild(div);
    }
    
    function showLess () {
        $("seeAll").textContent = "See More";
        $("seeAll").onclick = showMore2;
        $("showMore").classList.add("hide");
    }
    
    function showMore2 () {
        $("seeAll").textContent = "See Less";
        $("seeAll").onclick = showLess;
        $("showMore").classList.remove("hide");
    }
    
}) ();
