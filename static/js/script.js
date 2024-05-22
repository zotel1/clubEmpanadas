function validarFormulario() {

    let nombre = document.getElementById('nombre');
    let email = document.getElementById('email');
    let telefono = document.getElementById('telefono');


    if (nombre.value.trim() === '' || email.value.trim() === '' || telefono.value.trim() === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return false;
    }


    return true;
}


// script sucursales

var x = document.getElementById("location1");
var x2 = document.getElementById("location2")
var x3 = document.getElementById("location3")
var x4 = document.getElementById("location4")
var x5 = document.getElementById("location5")
var x6 = document.getElementById("ElegirUbicacion");
function mostrar() {
    if (x.style.display === "none") {
        x.style.display = "block";
        x2.style.display = "none";
        x3.style.display = "none";
        x4.style.display = "none";
        x5.style.display = "none";
        x6.style.display = "none";
    } else {
        x.style.display = "none";
        x2.style.display = "none";
        x3.style.display = "none";
        x4.style.display = "none";
        x5.style.display = "none";
        x6.style.display = "block";
    }
}
function mostrar2() {
    if (x2.style.display === "none") {
        x.style.display = "none";
        x2.style.display = "block";
        x3.style.display = "none";
        x4.style.display = "none";
        x5.style.display = "none";
        x6.style.display = "none";
    } else {
        x.style.display = "none";
        x2.style.display = "none";
        x3.style.display = "none";
        x4.style.display = "none";
        x5.style.display = "none";
        x6.style.display = "block";
    }
}
function mostrar3() {
    if (x3.style.display === "none") {
        x.style.display = "none";
        x2.style.display = "none";
        x3.style.display = "block";
        x4.style.display = "none";
        x5.style.display = "none";
        x6.style.display = "none";
    } else {
        x.style.display = "none";
        x2.style.display = "none";
        x3.style.display = "none";
        x4.style.display = "none";
        x5.style.display = "none";
        x6.style.display = "block";
    }
}
function mostrar4() {
    if (x4.style.display === "none") {
        x.style.display = "none";
        x2.style.display = "none";
        x3.style.display = "none";
        x4.style.display = "block";
        x5.style.display = "none";
        x6.style.display = "none";
    } else {
        x.style.display = "none";
        x2.style.display = "none";
        x3.style.display = "none";
        x4.style.display = "none";
        x5.style.display = "none";
        x6.style.display = "block";
    }
}
function mostrar5() {
    if (x5.style.display === "none") {
        x.style.display = "none";
        x2.style.display = "none";
        x3.style.display = "none";
        x4.style.display = "none";
        x5.style.display = "block";
        x6.style.display = "none";
    } else {
        x.style.display = "none";
        x2.style.display = "none";
        x3.style.display = "none";
        x4.style.display = "none";
        x5.style.display = "none";
        x6.style.display = "block";
    }
}