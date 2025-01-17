let menuVisible = false;
// Funcion para ocultar o mostrar el menu
function mostrarOcultarMenu() {
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // ocultar el menu una vez que se selecciona una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Funcion para aplicar las animaciones de las habilidades
function efectoskills() {
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let skills = document.getElementsByClassName("progreso");
        skills[0].classList.add("javascript");
        skills[1].classList.add("wordpress");
        skills[2].classList.add("mysql");
        skills[3].classList.add("htmlcss");
        skills[4].classList.add("laravel");
        skills[5].classList.add("trabajoequipo");
        skills[6].classList.add("dedicacion");
        skills[7].classList.add("creatividad");
        skills[8].classList.add("comunicacion");
        skills[9].classList.add("puntualidad");
    }
}

// Detectar el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function() {
    efectoskills();
}
