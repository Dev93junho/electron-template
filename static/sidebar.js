const home = document.getElementById("home");
let menuClosed = true;

function menu() {
    if(menuClosed) {
        home.classList.add("menu-opened"); 
        home.children[1].children[0].textContent = ">>>";
    }
    else {
        home.classList.remove("menu-opened"); 
        home.children[1].children[0].textContent = "<<<";
    }


    menuClosed = !menuClosed;
}