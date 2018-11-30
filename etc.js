// {class:"", img:"", alt:"", caption:""},
"use strict";
(function () {
    let current = 0;
        
    let allImages = [
    
    {class:"graphic", img:"graphic/pnsnSticker.png", alt:"PNSN sticker with a green Mount Ranier fading into the background", caption:"Adobe Illustrator - November 2018"},
    {class:"art", img:"art/400.jpg", alt:"6 Prints representing my relationship with my biracial identity", caption:"Adobe Illustrator, Colored Pencil, Oil Ink, Pen - November 2018"},        
    {class:"graphic", img:"graphic/pnsnCardF.png", alt:"Front of PNSN business card with green vector mountain", caption:"Adobe Illustrator - May 2018"},
    
    {class:"graphic", img:"graphic/pnsnCardB.png", alt:"Back of PNSN business card with green vector mountain", caption:"Adobe Illustrator - May 2018"},
    {class:"graphic", img:"graphic/normal_squacLogo_rgb.png", alt:"Logo for SQUAC. The C is a birds beak", caption:"Adobe Illustrator - May 2018"},
    {class:"graphic", img:"graphic/bird_square_rgb.png", alt:"Square abbreviated logo for SQUAC. A blue square with the birds beak", caption:"Adobe Illustrator - May 2018"},
        
    {class:"art", img:"art/Lava.png", alt:"Live Love Lava written on banner over mountain", caption:"Adobe Illustrator - May 2018"},
    {class:"art", img:"art/Faults.png", alt:"Everyone has their faults written on banner over desert with crack", caption:"Adobe Illustrator - May 2018"},
    {class:"art", img:"art/Shook.png", alt:"Etch a sketch with seismogram lines and shook written on it", caption:"Adobe Illustrator - May 2018"},
    
    {class:"art", img:"art/Pooh.png", alt:"Pooh running out of honey saying oh shit", caption:"Adobe Illustrator - April 2018"},
    {class:"graphic", img:"graphic/Noni.jpg", alt:"Logo for Noni a 3D menu app", caption:"Adobe Illustrator - April 2018"},
    {class:"graphic", img:"graphic/UDistrict.jpg", alt:"Poster for University District street fair", caption:"Adobe Illustrator - March 2018"},
    
    {class:"art", img:"art/290_6.jpg", alt:"nude figure lying down", caption:"Charcoal - March 2018"},
    {class:"art", img:"art/290_5.jpg", alt:"nude figure sitting straight on", caption:"Charcoal - February 2018"},
    {class:"art", img:"art/290_4.jpg", alt:"nude figure sitting on chair turned away", caption:"Charcoal - February 2018"},
    
    {class:"art", img:"art/290_3.jpg", alt:"nude figure lying down with skeleton", caption:"Charcoal - January 2018"},
    {class:"art", img:"art/290_2.jpg", alt:"Quick sketches of two nude figures", caption:"Charcoal - January 2018"},
    {class:"art", img:"art/290_1.jpg", alt:"Line drawings of two figures", caption:"Charcoal - January 2018"},
    
    {class:"art", img:"art/socksNoPants.jpg", alt:"SOCKSNOPANTS stenciled over green criss cross pattern", caption:"Oil Ink - December 2017"},
    {class:"art", img:"art/honey.jpg", alt:"Honey stenciled over orange yellow and red ink", caption:"Oil Ink - December 2017"},
    {class:"art", img:"art/pinkypromise.jpg", alt:"pink promise stenciled twice in cursive over pink and red ink", caption:"Oil Ink - December 2017"},
    
    {class:"art", img:"art/crt.jpg", alt:"CRT stenciled over the colors found in TV static (red, blue, pink/purple, green, yellow)", caption:"Oil Ink - December 2017"},
    {class:"graphic", img:"graphic/voybe.png", alt:"Logo for voybe with a tea bottle and label with tea bags and their name", caption:"Adobe Illustrator - November 2017"},
    {class:"art", img:"art/Hamburger.jpg", alt:"Hamburger in black, green, yellow, and red", caption:"Oil Ink - October 2017"},
    
    {class:"art", img:"art/pinkPolkaDots.jpg", alt:"Blue ink and paper with pink polka dots", caption:"Oil Ink, Watercolor - October 2017"},
    {class:"photo", img:"photo/met.jpg", alt:"The Met Museum's glass ceiling and columns", caption:"The Met - September 2017"},
    {class:"photo", img:"photo/snake.jpg", alt:"black and white photo of snake wrapped around a branch", caption:"Central Park Zoo - September 2017"},
    
    {class:"photo", img:"photo/circle.jpg", alt:"Pink and blue sunset through a circular window over a set table", caption:"Tyrehennian Sea - August 2017"},
    {class:"photo", img:"photo/stHelen.jpg", alt:"Blurry Mt St Helens with focus on crack in window", caption:"Mt St Helens - June 2017"},
    {class:"art", img:"art/M_Lopez.jpg", alt:"Fantasy character dressed in a long robe with a staff", caption:"Adobe Illustrator - April 2017"},
    
    {class:"graphic", img:"graphic/DawgPound.png", alt:"Logo for super smash bros tournament (Dawg Pound 2) with fox from nintendo (starfox) up smashing", caption:"Adobe Illustrator - April 2017"},
    {class:"graphic", img:"graphic/hart_yellow.png", alt:"Logo for Hart PR based off of Power Rangers logo (http://hartpr.herokuapp.com/rankings/1)", caption:"Adobe Illustrator - April 2017"},
    {class:"graphic", img:"graphic/Ledgedash_photo.jpg", alt:"Photo instructions on how to ledgedash in SSB Melee", caption:"Adobe Photoshop, Illustrator - March 2017"},
    
    {class:"graphic", img:"graphic/Ledgedash_vector.jpg", alt:"Vector instructions on how to ledgedash in SSB Melee", caption:"Adobe Illustrator - March 2017"},
    {class:"art", img:"art/Marth.png", alt:"Marth (fire emblem) in a princess dress", caption:"Adobe Illustrator - March 2017"},
    {class:"art", img:"art/flowers.png", alt:"Pink flower and flower buds with a green background", caption:"Adobe Illustrator - January 2017"},
    
    {class:"art", img:"art/vulfpeck.jpg", alt:"Poster of Vulfpeck band members in blue, purple, and red", caption:"Adobe Illustrator - December 2016"},
    {class:"art", img:"art/dreamBig.jpg", alt:"Little boy looking at space poster holding fox and falco stuffed animals (starfox)", caption:"Adobe Illustrator - October 2016"},
    {class:"art", img:"art/peach.jpg", alt:"girl with pink hair and overalls who wants to be like princess peach (mario)", caption:"Adobe Illustrator - August 2016"},
    
    {class:"photo", img:"photo/kaitlyn1.jpg", alt:"girl laughing in front of bush", caption:"Snoqualmie - August 2016"},
    {class:"photo", img:"photo/kaitlyn2.jpg", alt:"girl looking down and to the side in front of bush", caption:"Snoqualmie - August 2016"},
    {class:"photo", img:"photo/kaitlyn3.jpg", alt:"girl with arms open and smiling with eyes closed", caption:"Snoqualmie - August 2016"},
    
    {class:"photo", img:"photo/kaitlyn4.jpg", alt:"girl looking seriously to the side full body shot", caption:"Snoqualmie - August 2016"},
    {class:"photo", img:"photo/kaitlyn5.jpg", alt:"close up of girl smiling at camera ", caption:"Snoqualmie - August 2016"},
    {class:"photo", img:"photo/kaitlyn6.jpg", alt:"girl smiling at camera with yellow trees and blue mountains in background", caption:"Snoqualmie - August 2016"},
    
    {class:"art", img:"art/girlNeck.jpg", alt:"black shadows on a womans neck with red lips", caption:"Adobe Illustrator - July 2016"},
    {class:"art", img:"art/smashSisters.jpg", alt:"All female super smash brothers characters in pink and purple", caption:"Adobe Illustrator - July 2016"},
    {class:"art", img:"art/strawberry.jpg", alt:"Original character with bright pink hair, a crop top with daisys and a skirt that goes from blue to pink", caption:"Adobe Illustrator - July 2016"},
    
    {class:"art", img:"art/stitches.jpg", alt:"Stitch face turnips (ssbm) and flowers surround words bitches get stitches", caption:"Adobe Illustrator - June 2016"},
    {class:"art", img:"art/watercolor.jpg", alt:"silhouette of girl in the rain by cars driving", caption:"Watercolor, Acrylic Paint - March 2016"},
    {class:"art", img:"art/selfPortrait.jpg", alt:"Self portrait of head and neck with roses around the edges and in my hair", caption:"Sumi Ink, Watercolor - February 2016"},
    
    {class:"photo", img:"photo/neon.jpg", alt:"Neon sign that says garage and pool", caption:"Capitol Hill - January 2016"},
    {class:"photo", img:"photo/wall.jpg", alt:"Brick and cement wall with vines and poster", caption:"Capitol Hill - January 2016"},
    {class:"photo", img:"photo/lights.jpg", alt:"Christmas lights on a tree", caption:"Capitol Hill - January 2016"},
    
    {class:"photo", img:"photo/pipe.jpg", alt:"pipe with yellow grafiti", caption:"Downtown Seattle - January 2016"},
    {class:"photo", img:"photo/chain.jpg", alt:"rusty chain", caption:"Capitol Hill - January 2016"},
    {class:"photo", img:"photo/mountain.jpg", alt:"Sky and Mountains with the sun reflecting off of buildings in the distance", caption:"University of Washington - January 2016"},
    
    {class:"art", img:"art/dragonEye.jpg", alt:"dragon or reptile's eye with scales surrounding", caption:"Colored Pencil, Pencil - November 2015"},
    {class:"art", img:"art/nudeWater.jpg", alt:"nude figure lying down with legs up on the wall. Next to plant", caption:"Watercolor - July 2015"},
    {class:"art", img:"art/nudeMarker.jpg", alt:"nude figure lying down on blankets and pillow", caption:"Pen, Marker - June 2015"}
    ];
    
    
    
    window.onload = function () {
        $("open").onclick = openMenu;
        loadImages (current);
        window.onscroll = checkScroll;
    };
    
    function loadImages (num) {
        for (let i = num; (i < num + 12) && (i < allImages.length); i+= 3) {
            if (i >= allImages.length) {
                alert("you fucked up")
            }
            insertImage(i, "1");
            insertImage(i + 1, "2");
            insertImage(i + 2, "3");
        }
        current += 12;
    }
    
    function insertImage (num, column) {
        let info = allImages[num];
        let div = document.createElement("div");
        div.classList.add(info.class);
        let img = document.createElement("img");
        img.src=info.img;
        img.alt=info.alt;
        if (typeof info.id !== undefined) {
            img.setAttribute("id", info.id);
        }
        let h3 = document.createElement("h3");
        h3.innerText = info.caption;
        div.appendChild(img);
        div.appendChild(h3);
        $(column).appendChild(div);
    }
    
    
    function checkScroll () {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight && current <= allImages.length) {
            loadImages(current);
        }
    }
    
    function $ (id) {
        return document.getElementById(id);
    }
    
    function qsa (selector) {
        return document.querySelectorAll(selector);
    }
    
}) ();
