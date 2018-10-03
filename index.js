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
        $("seeAll").classList.add("hidden");
        createLink("emote.html", "Emote UI Design", "covers/emoteCover.png")
        createLink ("reallyBot.html", "reallyBot Code", "covers/reallyBot.png");
        createLink ("myndful.html", "Myndful UI Design", "covers/myndful.png");
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
}) ();

