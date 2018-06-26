"use strict";
(function () {
    let currentTab = "graphic";
    let currentContent = "graphicDesign"
    
    window.onload = function () {
        $("open").onclick = openMenu;
        $("graphic").onclick = function () {
            changeTab("graphicDesign", "graphic");
        };
        $("art").onclick = function () {
            changeTab("artwork", "art");
        };
        $("photo").onclick = function () {
            changeTab("photography", "photo");
        };
    };
    
    function changeTab (content, tab) {
        $(currentContent).classList.add("hide");
        $(content).classList.remove("hide");

        $(currentTab).classList.remove("selected");
        $(tab).classList.add("selected");
        $(currentTab).classList.add("not");
        $(tab).classList.remove("not");
        currentTab = tab;
        currentContent = content;
    }
    
    function $ (id) {
        return document.getElementById(id);
    }
    
}) ();
