

    var nombreInput = document.getElementById("nombre");
    var apellidoInput = document.getElementById("apellido");

    nombreInput.addEventListener("input", function () {
        this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    });

    apellidoInput.addEventListener("input", function () {
        this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    });

    function validarFormulario() {
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var email = document.getElementById("email").value;
        var trabajoGastronomia = document.querySelector('input[name="trabajoGastronomia"]:checked');
        var experienciaGastronomia = document.getElementById("experienciaGastronomia").value;
        var cv = document.getElementById("cv").files[0];

        var letrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        var emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail)\.com$/;

        if (!nombre || !letrasRegex.test(nombre)) {
            alert("Por favor, ingrese un nombre.");
            return;
        }

        if (!apellido || !letrasRegex.test(apellido)) {
            alert("Por favor, ingrese un apellido.");
            return;
        }

        if (!email || !emailRegex.test(email)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }

        if (!trabajoGastronomia) {
            alert("Por favor, selecciona si has trabajado previamente en gastronomía.");
            return;
        }

        if (trabajoGastronomia.value === "Si" && experienciaGastronomia === "") {
            alert("Por favor, ingresa los años de experiencia en gastronomía.");
            return;
        }

        if (!cv) {
            alert("Por favor, selecciona tu currículum.");
            return;
        }

        limpiarFormulario();
    }

    function limpiarFormulario() {
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('email').value = '';
        document.querySelector('input[name="trabajoGastronomia"]:checked').checked = false;
        document.getElementById('experienciaGastronomia').value = '';
        document.getElementById('cv').value = '';
        alert("¡Información enviada!");
    };


/*function validarFormulario() {

    let nombre = document.getElementById('nombre');
    let email = document.getElementById('email');
    let telefono = document.getElementById('telefono');


    if (nombre.value.trim() === '' || email.value.trim() === '' || telefono.value.trim() === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return false;
    }


    return true;
} */


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