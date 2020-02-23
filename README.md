<b>Formulario de validación</b>
El formulario consta de dos pestañas, abierta por defecto la del log in. 

https://raw.githubusercontent.com/Dannerino/formLogin/master/imgs/inicio.png

Existe una doble validación:
1) Todos los campos tienen una validación rápida mediante el evento onfocusout.

https://raw.githubusercontent.com/Dannerino/formLogin/master/imgs/validaciones.png

2) al presionar ambos submit se lleva a los eventos validarLogin y validarRegistro para doble seguridad.

https://raw.githubusercontent.com/Dannerino/formLogin/master/imgs/dobleValidacion.png


<b>Cookies almacenadas</b>

Se crean dos cookies: 
· una de registro, la cual guarda el email/tfno y la contraseña.
· una de login, se borra cuando se le da al botón de desconexión o pasado un día.

https://raw.githubusercontent.com/Dannerino/formLogin/master/imgs/cookies.png

https://raw.githubusercontent.com/Dannerino/formLogin/master/imgs/conexion.png
