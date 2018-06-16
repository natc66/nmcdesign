"use strict";
(function () {
    window.onload = function () {
        $("open").onclick = openMenu;
    };
    
    function openMenu () {
        $("myNav").style.width = "100%";
        toggleElements();
        $("close").onclick = closeMenu;
    }
    
    function closeMenu () {
        toggleElements();
        $("myNav").style.width = "0%";
    }
    
    function toggleElements () {
        $("open").classList.toggle("hidden");
        $("footer").classList.toggle("hidden");
        $("logo").classList.toggle("hidden");
    }
    
    function $ (id) {
        return document.getElementById(id);
    }
    
}) ();
