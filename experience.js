"use strict";
(function() {
    let current = "Lowe's Companies Inc.";
    let menu= "lowes";
    
    window.onload = function() {
        checkClicks();
        $("open").onclick = openMenu;
    };
    
    function checkClicks() {
        let aside = document.querySelector("aside");
        let h4 = aside.querySelectorAll("h4");
        for (let i=0; i<h4.length ; i++) {
            h4[i].onclick = changeTab;
        }
    }
    
    function changeTab () {
        let next = this.innerText;
        $(current).classList.add("hide");
        $(next).classList.remove("hide");
        $(menu).classList.remove("selected");
        this.classList.add("selected");
        menu = this.id;
        current = next;
    }
    
    function $(id) {
        return document.getElementById(id);
    }
}) ();
