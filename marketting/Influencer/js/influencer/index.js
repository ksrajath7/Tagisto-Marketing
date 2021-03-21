
function openMenu(){
    var linksMobileView = document.getElementById('linksMobileView');
    linksMobileView.style.display="block"
}
function closeMenu(){
    var linksMobileView = document.getElementById('linksMobileView');
    linksMobileView.style.display="none"
}

    var myNav = document.getElementById('mynav');
    var link1 = document.getElementById('links-aW1');
    var link2 = document.getElementById('links-aW2');
    var link3 = document.getElementById('links-aW3');
    var link4 = document.getElementById('links-aW4');
    var menuIconLine1 = document.getElementById('menuIconLine1');
    var menuIconLine2 = document.getElementById('menuIconLine2');
    var menuIconLine3 = document.getElementById('menuIconLine3');

window.onscroll = function () { 
    "use strict";
    if (window.scrollY >= 10 ) {
        myNav.classList.add("header_color");
        myNav.classList.remove("header");
        link1.classList.add("links-a_color");
        link1.classList.remove("links-a");
        link2.classList.add("links-a_color");
        link2.classList.add("links-a_color-selected");
        link2.classList.remove("links-a");
        link3.classList.add("links-a_color");
        link3.classList.remove("links-a");
        // loginBtn.classList.add("loginBtn_color");
        // loginBtn.classList.remove("loginBtn");
        menuIconLine1.classList.add("menuIconLine_color");
        menuIconLine1.classList.remove("menuIconLine");
        menuIconLine2.classList.add("menuIconLine_color");
        menuIconLine2.classList.remove("menuIconLine");
        menuIconLine3.classList.add("menuIconLine_color");
        menuIconLine3.classList.remove("menuIconLine");
    } 
    
    else {
        myNav.classList.add("header");
        myNav.classList.remove("header_color");
        link1.classList.add("links-a");
        link1.classList.remove("links-a_color");
        link2.classList.add("links-a");
        link2.classList.remove("links-a_color");
        link3.classList.add("links-a");
        link3.classList.remove("links-a_color");
        // loginBtn.classList.add("loginBtn");
        // loginBtn.classList.remove("loginBtn_color");
        menuIconLine1.classList.add("menuIconLine");
        menuIconLine1.classList.remove("menuIconLine_color");
        menuIconLine2.classList.add("menuIconLine");
        menuIconLine2.classList.remove("menuIconLine_color");
        menuIconLine3.classList.add("menuIconLine");
        menuIconLine3.classList.remove("menuIconLine_color");
    }
};




function apply(){
    window.location.assign("./../Apply")
}