function mostrarContra(etiqueta) {
    var mostrar = document.getElementById(etiqueta);

    (mostrar.type == "password") ? mostrar.type = "text": mostrar.type = "password";

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



function error(elemento, mensaje, id) {
    document.getElementsByTagName("error").innerHTML = mensaje;
    elemento.focus();
}

function borrarError(id) {
    document.getElementsByClassName("error").innerHTML = "";
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
    var elemento = document.getElementById("repetir").value;
    var elemento2 = document.getElementById("contraseña").value;
    borrarError("error-pass-confirma");
    if (elemento.value != elemento2) {
        error(elemento, "La contraseña debe coincidir", "error-pass-confirma")
        return false;
    }
    return true;
}


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

window.onload = leerCookie;

function leerCookie() {
    if (getCookie("sesion") == "") {
        document.getElementById("enviar2").addEventListener('click', validarLogin, false);
        document.getElementById("enviar1").addEventListener('click', validarRegistro, false);
    } else {
        document.getElementById("tab").innerHTML = "Hola, " + getCookie("sesion");
        console.log("he leído la cookie");
    }
}

document.getElementById("enviar2").addEventListener('click', validarLogin, false);
document.getElementById("enviar1").addEventListener('click', validarRegistro, false);


function validarRegistro(event) {
    if (validaNombre() && validaApellido() && validaMailTelefono() && validaPassword() && validaPasswordConfirmar()) {
        //crearUsuario();
        return true;
    } else {
        document.getElementById("error2").innerHTML = "El usuario no se ha podido registrar.";
        event.preventDefault();
        return false;
    }
}

function crearUsuario() {
    var mail = document.getElementById("email").value;
    var passswd = document.getElementById("repetir").value;
    console.log(mail + " VARIABLEEE " + passwd)
    setCookie(mail, passswd, 1);
    document.getElementById("error").innerHTML = "El usuario se ha regisstrado correctamnte ya puedes iniciar sesión.";
}

function iniciarSesion(mail, passwd) {

    if (getCookie(mail) == passwd) {
        setCookie("sesion", mail, 0.042);
        document.getElementById("error").innerHTML = "He creado una puta cookie";
    } else {
        getCookie(mail).value
        document.getElementById("error").innerHTML = "La contraseña no es conrrecta";
    }
}


function validarLogin(event) {
    if (!event) event = window.event;
    if (validaMailTelefonoLogin() && validaPasswordLogin()) {
        var mail = document.getElementById("email2").value;
        var passswd = document.getElementById("ContLog").value;
        iniciarSesion(mail, passswd);
        return true;
    } else {
        document.getElementById("error").innerHTML = "No se ha podido registrar el usuario";
        event.preventDefault();
        return false;
    }
}