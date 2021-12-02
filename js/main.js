//Formulario
document.getElementById('enviarForm').addEventListener('click', (e) =>{
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;
    
    if(nombre.length != 0 && correo.length != 0 && telefono.length != 0 && mensaje.length != 0){
        e.preventDefault();
        window.location.href=`mailto:prueba@gmail.com?&body=
        Nombre%3A%20${nombre}%0A
        Correo%3A%20${correo}%0A
        Teléfono%3A%20${telefono}%0A
        Mensaje%3A%20${mensaje}%0A`
    }
    
});

//FAQ
document.getElementById('arrow1').addEventListener('click', () =>{
    $('#faq1').toggle(200);
});
document.getElementById('arrow2').addEventListener('click', () =>{
    $('#faq2').toggle(200);
});
document.getElementById('arrow3').addEventListener('click', () =>{
    $('#faq3').toggle(200);
});
document.getElementById('arrow4').addEventListener('click', () =>{
    $('#faq4').toggle(200);
});