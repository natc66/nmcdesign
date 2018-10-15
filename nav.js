    function openMenu () {
        $("myNav").style.height = "100%";
        toggleElements();
        $("close").onclick = closeMenu;
    }
    
    function closeMenu () {
        toggleElements();
        $("myNav").style.height = "0%";
    }
    
    function toggleElements () {
        $("open").classList.toggle("hidden");
        $("footer").classList.toggle("hidden");
        $("logo").classList.toggle("hidden");
    }
    
    function $ (id) {
        return document.getElementById(id);
    }
