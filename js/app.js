/* Eventos */


function mostrarContra() {
    var mostrar = document.getElementById("ContLog");

    (mostrar.type == "password") ? mostrar.type = "text" : mostrar.type = "password";
    
}



/* Cookies */
function guardaCookie(nombre, valor, tiempo) {
    var d = new Date();
    d.setTime(d.getTime() + (tiempo * 24 * 60 * 60 * 1000));
    var expira = "expires=" + d.toGMTString();
    document.cookie = nombre + "=" + valor + ";" + expira + ";path=/";
    alert(nombre + "=" + valor + ";" + expira + ";path=/");
}

function recuperaCookie(nombre) {
    var cadena = nombre + "=";
    //ca es un arreglo
    var ca = document.cookie.split(';');
    //Analizamos cada elemento del arreglo
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cadena) == 0) {
            return c.substring(cadena.length, c.length);
        }
    }
    return "";
}

function leeCookie() {
    var usuario = recuperaCookie("nombre");
    if (usuario != "") {
        alert("Hola nuevamente " + usuario);
    } else {
        usuario = prompt("¿Cómo te llamas?:", "");
        if (usuario != "" && usuario != null) {
            guardaCookie("nombre", usuario, 30);
        }
    }
}

/* Interfaz */


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