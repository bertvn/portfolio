var menuVisible = false;
var toggleMenu = function () {
    if (menuVisible) {
        document.getElementById("Menu").className += " hide-menu";
    } else {
        document.getElementById("Menu").className = document.getElementById("Menu").className.replace(' hide-menu', '');
    }
    menuVisible = !menuVisible;
};

var closeMenu = function () {
    if (menuVisible) {
        document.getElementById("Menu").className += " hide-menu";
    }
    menuVisible = false;
}