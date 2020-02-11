
function guardaCookie(nombre,valor,tiempo) {
    var d = new Date();
    d.setTime(d.getTime() + (tiempo*24*60*60*1000));
    var expira = "expires=" + d.toGMTString();
    document.cookie = nombre + "=" + valor + ";" + expira + ";path=/";
    alert(nombre + "=" + valor + ";" + expira + ";path=/");
}

function recuperaCookie(nombre) {
    var cadena = nombre + "=";
    //ca es un arreglo
    var ca = document.cookie.split(';');
    //Analizamos cada elemento del arreglo
    for(var i = 0; i < ca.length; i++) {
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
    var usuario=recuperaCookie("nombre");
    if (usuario != "") {
        alert("Hola nuevamente " + usuario);
    } else {
       usuario = prompt("¿Cómo te llamas?:","");
       if (usuario != "" && usuario != null) {
           guardaCookie("nombre", usuario, 30);
       }
    }
}