"use strict";
(function() {

    window.onload = function() {
        callInsta();
        $("open").onclick = openMenu;
    };
    
    //Given checkStatus function
function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response.text();
        } else {
            return Promise.reject(new Error(response.status +
            ": " + response.statusText));
        }
    }

    // Is called when the window first loads
    function callInsta(){
        //Oauth key for user natc66 (me)
        let ACCESSTOKEN = "287496067.42b3225.3e3051ea4952482399b9e18a5774251e";
        let COUNT = "6";
        
        //URL is the base url for the API + user OAUTH key + # of posts to get
        let url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=" 
        + ACCESSTOKEN + "&count=" + COUNT;

        //start ajax call to instagram API
        fetch(url)
            .then(checkStatus)
            .then(JSON.parse)
            .then(createImages)
           .catch(function(error) {
               $("backup").remove("hidden");
           });
    }

    /**Takes the JSON from the Instagram API call, and uses the first 6 posts 
     * information to create images with the source image, and alt text with the 
     * url. !!I do not know how to parse through, or include emoticons in 
     * text/html, and therefore could not use the captions as the alt text.
     * @param {JSON object} mediaInfo - the JSON object returned by the call to 
     * the Instagram API
     */
    function createImages (mediaInfo) {
        let source;
        let alttext;
        //Gets the first 6 images
        for (let i = 0; i <= 6; i++) {
            source = mediaInfo.data[i].images.standard_resolution.url;
            alttext = mediaInfo.data[i].link;
            let image = document.createElement("img");
            $("images").appendChild(image);
            image.setAttribute("src", source);
            image.setAttribute("alt", alttext);
        }
    }
    
    /**
     *  Shortcut to get the document element by id
     *  @param the string value of the ID of the DOM element you are getting
     *  @return the DOM element with that particular ID
     */
    function $(id) {
        return document.getElementById(id);
    }


})();
