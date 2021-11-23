document.getElementById('enviarForm').addEventListener('click', (e) =>{
    e.preventDefault();
    window.location.href=`mailto:prueba@gmail.com?&body=
    Nombre%3A%20${document.getElementById('nombre').value}%0A
    Correo%3A%20${document.getElementById('correo').value}%0A
    Teléfono%3A%20${document.getElementById('telefono').value}%0A
    Mensaje%3A%20${document.getElementById('mensaje').value}%0A`
});
