function mostrarContra() {
    var mostrar = document.getElementById("ContLog");

    (mostrar.type == "password") ? mostrar.type = "text": mostrar.type = "password";

}

window.onload = leerCookie;

function leeCookie() {
    if (getCookie("sesion") == "" || getCookie("sesion") == null) {
        document.getElementById("enviar2").addEventListener('click', validarLogin, false);
        document.getElementById("enviar1").addEventListener('click', validarRegistro, false);
        document.getElementById("fondito").style.display = "active";
    }
    if (validarLogin) {
        document.getElementById("enviar2").addEventListener("submit", iniciarSesion);
        var mensaje = recuperarCookie("nombre");
        document.getElementById("final").innerHTML = mensaje;
    } else {
        document.getElementById("final").innerHTML = "No se ha podido conectar";
    }
    if (validarRegistro) {
        alert("ha ido bien");
        document.getElementById("enviar1").addEventListener("submit", crearUsuario);
    } else {
        document.getElementById("final").innerHTML = "No se ha podido registrar";
    }



}

function abrirPesta(evt, pesta) {
    var i, tabcontent, tablinks;

    // Esconder elementos .tabcontent
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(pesta).style.display = "block";
    evt.currentTarget.className += " active";
}

function validaNombre() {
    var elemento = document.getElementById("Nombre");
    borrarError("error-nombre");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento, "Debe introducir un nombre", "error-nombre");
        }
        if (elemento.validity.patternMismatch) {
            error(elemento, "Introduce un nombre de entre 2 y 15 letras", "error-nombre");
        }
        return false;
    }
    return true;
}

function validaApellido() {
    var elemento = document.getElementById("Apellido");
    borrarError("error-apellido");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento, "Debe introducir un apellido", "error-apellido");
        }
        if (elemento.validity.patternMismatch) {
            error(elemento, "Introduce un apellido entre 2 y 30 letras", "error-apellido");
        }
        return false;
    }
    return true;
}

function validaMailTelefono() {
    var elemento = document.getElementById("email");
    borrarError("error-email");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento, "Debe introducir un teléfono o un email", "error-email");
        }
        if (elemento.validity.patternMismatch) {
            error(elemento, "Introduce un email o un teléfono correcto", "error-email");
        }
        return false;
    }
    return true;
}

function validaPassword() {
    var elemento = document.getElementById("contraseña");
    borrarError("error-pass");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento, "Debe introducir una contraseña", "error-pass");
        }
        if (elemento.validity.patternMismatch) {
            error(elemento, "Introduce una contraseña de mínimo 8 caracteres. Debe contener una minúscula, una mayúscula, un número y un carácter especial (@$!%*?&)", "error-pass");
        }
        return false;
    }
    return true;
}

function validaPasswordConfirmar() {
    var elemento = document.getElementById("repetir");
    var elemento2 = document.getElementById("ContLog").value;
    borrarError("error-pass-confirma");
    if (elemento.value != elemento2) {
        error(elemento, "La contraseña debe coincidir", "error-pass-confirma")
        return false;
    }
    return true;
}

function validarRegistro(event) {
    if (validaNombre()) {
        alert("Te has registrado. Ahora puedes iniciar sesión.");
        return true;
    } else {
        event.preventDefault();
        return false;
    }
}



/* VALIDACIÓN DE LOGIN */

function validaMailTelefonoLogin() {
    var elemento = document.getElementById("email2");
    borrarError("error-email-login");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento, "Debe introducir un teléfono o un email", "error-email-login");
        }
        if (elemento.validity.patternMismatch) {
            error(elemento, "Introduce un email o un teléfono correcto", "error-email-login");
        }
        return false;
    }
    return true;
}

function validaPasswordLogin() {
    var elemento = document.getElementById("ContLog");
    borrarError("error-pass-login");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento, "Debe introducir una contraseña", "error-pass-login");
        }
        if (elemento.validity.patternMismatch) {
            error(elemento, "Introduce una contraseña de mínimo 8 caracteres. Debe contener una minúscula, una mayúscula, un número y un carácter especial (@$!%*?&)", "error-pass-login");
        }
        return false;
    }
    return true;
}

function validarLogin(event) {
    if (!event) event = window.event;
    if (validaMailTelefonoLogin() && validaPasswordLogin()) {
        return true;
    } else {
        event.preventDefault();
        return false;
    }
}


/* MARCAR ERRORES */

function error(elemento, mensaje, id) {
    document.getElementById(id).innerHTML = mensaje;
    elemento.focus();
}

function borrarError(id) {
    document.getElementById(id).innerHTML = "";
}


/* COOKIES */

document.getElementById("paradesconectar").addEventListener("click", cerrarSesion);

function crearUsuario() {
    setCookie("email", document.getElementById("email").value, 1);
    setCookie("pass", document.getElementById("contraseña").value, 1);
    setCookie("name", document.getElementById("Nombre").value, 1);
}

function iniciarSesion() {
    if (document.getElementById("email2").value == getCookie("email") && document.getElementById("ContLog").value == getCookie("pass")) {
        setCookie("sesion", "sesion", 0.042);
    } else {
        alert("No existe ese usuario y contraseña");
    }
}

function cerrarSesion() {
    deleteCookie("sesion");
}

function setCookie(nombre, valor, expiracion) {
    var d = new Date();
    d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 1000);
    var expiracion = "expires = " + d.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + "; path=/";
}

function getCookie(nombre) {
    var nom = nombre + "=";
    var array = document.cookie.split(";");
    for (var i = 0; i < array.length; i++) {
        var c = array[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(nombre) == 0) {
            return c.substring(nom.length, c.length);
        }
    }
    return "";
}

function deleteCookie(nombre) {
    setCookie(nombre, "", 0);
}