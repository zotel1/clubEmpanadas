function validarFormulario() {
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var email = document.getElementById("email").value;
        var telefono = document.getElementById("telefono").value;

        if (nombre === "" || apellido === "" || email === "" || telefono === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        var letrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        var emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail)\.com$/;
        var telefonoRegex = /^[0-9]+$/;

        if (!letrasRegex.test(nombre)) {
            alert("Por favor, ingrese un nombre válido (solo letras y espacios).");
            return;
        }

        if (!letrasRegex.test(apellido)) {
            alert("Por favor, ingrese un apellido válido (solo letras y espacios).");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Por favor, ingrese un correo electrónico válido (solo Gmail o Hotmail).");
            return;
        }

        if (!telefonoRegex.test(telefono)) {
            alert("Por favor, ingrese un número de teléfono válido (solo números).");
            return;
        }

        limpiarFormulario();
    }

    function limpiarFormulario() {
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefono').value = '';
        alert("¡Información enviada!");
    };