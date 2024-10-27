// Función cambiarTexto()
function cambiarTexto() {
    document.getElementById("titulo").innerText = "Hola Mundo con JavaScript";
}

// Función cambiarColor()
function cambiarColor() {
    document.getElementById("titulo").style.color = "blue";
}

// Función cambiarAlineacion()
function cambiarAlineacion() {
    document.getElementById("titulo").style.textAlign = "center";
}

// Función crearTexto()
function crearTexto() {
    let nuevoTexto = document.getElementById("nuevoTexto");
    nuevoTexto.innerText = "JavaScript es un lenguaje de programacion o de secuencias de comandos que te permiten implementar funciones complejas en paginas web.";
}

// Función borrarTexto()
function borrarTexto() {
    let nuevoTexto = document.getElementById("nuevoTexto");
    nuevoTexto.innerText = "";
}
