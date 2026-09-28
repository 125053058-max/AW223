let bienvenida = document.getElementById("bienvenida");
let botonMensaje = document.getElementById("botonMensaje");

botonMensaje.addEventListener.getElementById ("click", function() {
    bienvenida.textContent = "¡Hola! Bienvenido a mi Portofolio ahora con JS";


});

let botonColor = document.getElementById("botonColor");
let botonLetra = document.getElementById("botonLetra");

let habilidades = document.querySelectorAll(".lista-habilidades li");

botonColor.addEventListener("click", function() {
    habilidades.style.backgroundColor = "lightblue";


});

botonLetra.addEventListener("click", function() {
    habilidades.forEach(function(habilidad) {
        habilidad.style.fontFamily = "Georgia";


            });
});

let formulario = document.getElementBydId("formulario");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let nombre = document.getElementBydId("nombre").value;
    let email = document.getElementBydId("email").value;

    if (nombre == "") {

        alert("Escribe tu nombre");

    }else if (email == "") {

        alert("El correo es obligatorio");


    }else{
        alert("Formulario enviado");

    }
});


