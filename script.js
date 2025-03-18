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
        skills[1].classList.add("html");
        skills[2].classList.add("css");
        skills[3].classList.add("php");
        skills[4].classList.add("laravelphp");
        skills[5].classList.add("sqlynosql");
        skills[6].classList.add("bootstrap");
        skills[7].classList.add("github");
        skills[8].classList.add("compromiso");
        skills[9].classList.add("interes");
        skills[10].classList.add("responsabilidad");
        skills[11].classList.add("creatividad");
        skills[12].classList.add("trabajoenequipo");
        skills[13].classList.add("organizacion");
        skills[14].classList.add("puntualidad");
        skills[15].classList.add("comunicacion");
    }
}

// Detectar el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function() {
    efectoskills();
}


function validateForm(){
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    document.getElementById('nombre-error').innerHTML = "";
    document.getElementById('telefono-error').innerHTML = "";
    document.getElementById('correo-error').innerHTML = "";
    document.getElementById('asunto-error').innerHTML = "";
    document.getElementById('mensaje-error').innerHTML = "";

    let isValid = true;

    if(nombre === "") {
        document.getElementById('nombre-error').innerHTML = '* El campo "Nombre" es obligatorio';
        isValid = false;
    }

    if(telefono === "") {
        document.getElementById('telefono-error').innerHTML = '*El campo "Telefono" es obligatorio';
        isValid = false;
    }

    if(correo === "") {
        document.getElementById('correo-error').innerHTML = '*El campo "Correo" es obligatorio';
        isValid = false;
    }

    if(asunto === "") {
        document.getElementById('asunto-error').innerHTML = '*El campo "Asunto" es obligatorio';
        isValid = false;
    }

    if(mensaje === "") {
        document.getElementById('mensaje-error').innerHTML = '*El campo "Mensaje" es obligatorio';
        isValid = false;
    }


    return isValid;
}