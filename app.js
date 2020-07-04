var menu = document.getElementById("nav")
function toggle (){
    if (menu.className == "navbar"){
        menu.className += " responsive"
    } else {
        menu.className = "navbar"
    }
}

window.addEventListener ("resize", e => {
    if (window.innerWidth > 666) {
        menu.className = "navbar"
    }
})