// --------------------------- Hamburger Menu  ---------------------------

var hamburger = document.getElementById("lines-icon");
var menu = document.getElementById("menu");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
    } else {
        menu.classList.add("showMenu");
    }
}

// --------------------------- Forms ---------------------------

// let btnSubmit = document.getElementById('btnSubmit');
// let msg = "";
// //process form 
// btnSubmit.addEventListener('click', function (e) {
//     e.preventDefault();

// }