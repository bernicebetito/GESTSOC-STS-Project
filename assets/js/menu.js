/*----- Open Menu -----*/
function openNav() {
    document.getElementById("sideMenuCover").style.width = "100%"
    document.getElementById("sideMenu").style.width = "25%"
}

/*----- Close Menu -----*/
function closeNav() {
    document.getElementById("sideMenuCover").style.width = "0"
    document.getElementById("sideMenu").style.width = "0"
}

window.onscroll = function () { stickyHeader() }

var header = document.getElementById("header")
var header_ul = document.getElementById("header-ul")
var header_hide = document.getElementById("hideMenu")
var sticky = header.offsetTop;

var side = document.getElementById("sideButton")

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky")

        if (header_ul.style.fontSize == "17px") {
            header_hide.style.fontSize = "13px"
        } else {
            header_hide.style.fontSize = "0px"
        }
    } else {
        header.classList.remove("sticky")
        header_hide.style.fontSize = "0px"
        header.style.backgroundColor = "#f3f3f3"
        header_ul.style.fontSize = "17px"
        side.style.fontSize = "0px"
    }
}

function hideMenu() {
    header_ul.style.fontSize = "0px"
    header_hide.style.fontSize = "0px"
    header.style.backgroundColor = "#ffffff00"
    side.style.fontSize = "50px"
}

function showMenu() {
    header.style.backgroundColor = "#f3f3f3"
    header_ul.style.fontSize = "17px"
    header_hide.style.fontSize = "13px"
    side.style.fontSize = "0px"
    closeNav()
}