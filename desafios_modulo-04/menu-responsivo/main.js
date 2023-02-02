function expandirMenu() {
    var menu = document.getElementById("menu");
    
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block'; // No CSS o display está 'none'
    }
}