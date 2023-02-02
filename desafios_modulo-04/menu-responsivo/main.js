function expandirMenu() {
    var menu = document.getElementById("menu");
    
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block'; // No CSS o display está 'none'
    }
}


// Essa função serve para o menu não ficar oculto, caso o usuário diminua e aumente o tamanho da tela.
function mudouTamanho() {
    var itensMenu = document.getElementById("menu");

    if (window.innerWidth >= 768) { 
        itensMenu.style.display = "block";
    } else {
        itensMenu.style.display = "none";
    }
}