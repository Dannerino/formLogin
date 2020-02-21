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
    window.location.reload();
}





function validaNombre() {
    var elemento = document.getElementById("Nombre");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            document.getElementById("error-nombre").textContent="Debe introducir un nombre";
        }
        if (elemento.validity.patternMismatch) {
            document.getElementById("error-nombre").textContent="Introduce un nombre de entre 2 y 15 letras";
        }
        return false;
    } else {
        document.getElementById("error-nombre").textContent="";
    }
    return true;
}

function validaApellido() {
    var elemento = document.getElementById("Apellido");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            document.getElementById("error-apellido").textContent="Debe introducir un apellido";
        }
        if (elemento.validity.patternMismatch) {
            document.getElementById("error-apellido").textContent="Introduce un apellido entre 2 y 30 letras";
        }
        return false;
    }else {
        document.getElementById("error-apellido").textContent="";
    }
    return true;
}

function validaMailTelefono() {
    var elemento = document.getElementById("email");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            document.getElementById("error-email").textContent="Debe introducir un teléfono o un email";
        }
        if (elemento.validity.patternMismatch) {
            document.getElementById("error-email").textContent="Introduce un email o un teléfono correcto";
        }
        return false;
    }else {
        document.getElementById("error-email").textContent="";
    }
    return true;
}

function validaPassword() {
    var elemento = document.getElementById("contraseña");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            document.getElementById("error-pass").textContent="Debe introducir una contraseña";
        }
        if (elemento.validity.patternMismatch) {
            document.getElementById("error-pass").textContent="Debe introducir una contraseña que contenga letras y números";
        }
        return false;
    }else {
        document.getElementById("error-pass").textContent="";
    }
    return true;
}

function validaPasswordConfirmar() {
    var elemento = document.getElementById("repetir").value;
    var elemento2 = document.getElementById("contraseña").value;
    if (elemento != elemento2) {
        document.getElementById("error-repetir").textContent="La contraseña debe coincidir";
        return false;
    }else {
        document.getElementById("error-repetir").textContent="";
    }
    return true;
}


function validaMailTelefonoLogin() {
    var elemento = document.getElementById("email2");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            document.getElementById("error-email-login").textContent="Debe introducir un teléfono o un email";
        }
        if (elemento.validity.patternMismatch) {
            document.getElementById("error-email-login").textContent="Debe introducir un teléfono o un email correcto";
        }
        return false;
    }else {
        document.getElementById("error-email-login").textContent="";
    }
    return true;
}

function validaPasswordLogin() {
    var elemento = document.getElementById("ContLog");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            document.getElementById("error-pass-login").textContent="Debe introducir una contraseña";
        }
        if (elemento.validity.patternMismatch) {
            document.getElementById("error-pass-login").textContent="Debe introducir una contraseña con letras y números";
        }
        return false;
    }else {
        document.getElementById("error-pass-login").textContent="";
    }
    return true;
}

window.onload = leerCookie;

function leerCookie() {
    if (getCookie("sesion") == "") {
        document.getElementById("enviar2").addEventListener('click', validarLogin, false);
        document.getElementById("enviar1").addEventListener('click', validarRegistro, false);
        document.getElementById("buttrror").style.display="none";
    } else {
        document.getElementById("error").innerHTML += "Hola, " + getCookie("sesion");
        document.getElementById("buttrror").style.display="active";
        tabcontent = document.getElementsByClassName("loggito");
         for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    }
}

document.getElementById("enviar2").addEventListener('click', validarLogin, false);
document.getElementById("enviar1").addEventListener('click', validarRegistro, false);


function validarRegistro(event) {
    if (validaNombre() && validaApellido() && validaMailTelefono()) {
        if (validaPassword() && validaPasswordConfirmar()) {
            crearUsuario();
            return true;
        } 
    } else {
        document.getElementById("error2").innerHTML = "El usuario no se ha podido registrar.";
        event.preventDefault();
        return false;
    }
}

function crearUsuario() {
    var mail = document.getElementById("email").value;
    var passswd = document.getElementById("repetir").value;
    setCookie(mail, passswd, 1);
    document.getElementById("error2").innerHTML = "El usuario se ha regisstrado correctamnte ya puedes iniciar sesión.";
}

function iniciarSesion(mail) {

    setCookie("sesion", mail, 0.042);
    document.getElementById("error").innerHTML += "He creado una puta cookie";
    document.getElementById("error").setAttribute("class", "errore");
    document.getElementById("buttrror").style.display="active";

    window.location.reload(true);
}


function validarLogin(event) {
    if (!event) event = window.event;
    if (validaMailTelefonoLogin() && validaPasswordLogin()) {
        var mail = document.getElementById("email2").value;
        var passwd = document.getElementById("ContLog").value;
        if (getCookie(mail) == passwd) {
            iniciarSesion(mail);
        } else {
            document.getElementById("error-pass-login").innerHTML = "La contraseña no es conrrecta";
        }

        if (!getCookie(mail)) {
            document.getElementById("error").innerHTML = "El usuario no existe.<br>Vaya a la pestaña de registro.";

        }
        return true;

    } else {
        event.preventDefault();
        return false;
    }
}