"use strict";
(function () {
    let currentTab = "graphic";
    let currentContent = "graphicDesign"
    
    window.onload = function () {
        getImages ();
        $("open").onclick = openMenu;
    };
    
    function getImages () {
        let url = "etc.php";
        console.log("test");
        fetch(url, {credentials: "include"})
            .then(checkStatus)
            .then(JSON.parse)
            .then(loadImages)
            .catch(function (error) {
                alert(error);
            });
    }
    
    function loadImages (data) {
        alert(data);
        for (let i = 0; i < data.length; i++) {
            
        }
    }
    
    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response.text();
        } else {
            return Promise.reject(new Error(response.status +
            ": " + response.statusText));
        }
    }
    
    function $ (id) {
        return document.getElementById(id);
    }
    
    function qsa (selector) {
        return document.querySelectorAll(selector);
    }
    
}) ();
