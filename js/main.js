//Formulario
//(Descartado) -- Borrar
// document.getElementById('enviarForm').addEventListener('click', (e) =>{
    // const nombre = document.getElementById('nombre').value;
    // const correo = document.getElementById('correo').value;
    // const telefono = document.getElementById('telefono').value;
    // const mensaje = document.getElementById('mensaje').value;
    
    // if(nombre.length != 0 && correo.length != 0 && telefono.length != 0 && mensaje.length != 0){
//         e.preventDefault();
//         window.location.href=`mailto:prueba@gmail.com?&body=
//         Nombre%3A%20${nombre}%0A
//         Correo%3A%20${correo}%0A
//         Teléfono%3A%20${telefono}%0A
//         Mensaje%3A%20${mensaje}%0A`
//     }

// });

//Control campos vacios y check del formato de correo
function controlFormulario(){
        if($('#nombre').val().length != 0 && $('#correo').val().length != 0 && $('#telefono').val().length != 0 && $('#mensaje').val().length != 0 && $('#checkCorreo').css('display') == 'none'){
            return true;
        }
        else{
            return false;
        }
}
//Reinicio campos de formulario sin tener que validarlos
function vaciarInputs(){
    $('#nombre').val('');
    $('#correo').val('');
    $('#telefono').val('');
    $('#mensaje').val('');
}

//Confirmacion Mail
function mailOk (){
    $('.mailOk').toggle(0).animate({
        opacity: '1'
        }, "slow"
    )
    .delay(3000)
    .animate({
        opacity: '1'
    }, 0,
    function (){location.reload();}
    );
}

//Envio de mail
async function handleSubmit(event){
    event.preventDefault();
    if(controlFormulario()){

        const miForm = new FormData(this);
        const response = await fetch(this.action, {
            method: this.method,
            body: miForm,
            headers: {
                'Accept': 'application/json'
            }
        });
        if(response.ok){
            
            mailOk();
        }
    }
}

const form = document.querySelector('.formulario');
form.addEventListener('submit', handleSubmit);



//FAQ
function changeArrow(btnIcon){
    if(btnIcon.children().hasClass("fa-chevron-down")){
        btnIcon.children().removeClass("fa-chevron-down");
        btnIcon.children().addClass("fa-chevron-up");
    }
    else{
        btnIcon.children().removeClass("fa-chevron-up");
        btnIcon.children().addClass("fa-chevron-down");
    }
}


$('#arrow1').on('click', function (){
    $('#faq1').toggle(200);
    changeArrow($(this));
});

$('#arrow2').on('click', function (){
    $('#faq2').toggle(200);
    changeArrow($(this));
});

$('#arrow3').on('click', function (){
    $('#faq3').toggle(200);
    changeArrow($(this));
});

$('#arrow4').on('click', function (){
    $('#faq4').toggle(200);
    changeArrow($(this));
});


/* Productos */

const url = './js/stock.json'
const navProductosClick = document.getElementById('navProductosClick');
const contenedorProductos = document.getElementById('contenedorProductos');
const contenidoPrincipalID = document.getElementById('contenidoPrincipalID');

navProductosClick.addEventListener('click', () => { 
    contenedorProductos.classList.toggle('mostrarProductos');
    contenidoPrincipalID.classList.toggle('ocultar')
})

$.get(url, (response) => {
    stockProductos = response

    mostrarProductos(stockProductos)
    console.log(stockProductos)
})

const mostrarProductos = (stockProductos) => {
    contenedorProductos.innerHTML = ``

    stockProductos.forEach( (producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
        
        <img class="imagenCelular" src="${producto.img}"" alt="">
        <h3 class="nombreCelular">${producto.nombre}</h3>
        <button id="buttonVerProducto">Ver Producto</button>
            
        ` 
        contenedorProductos.appendChild(div)
    } )

}



//////////////////

/*

const botonProductoClickeado = document.getElementById('buttonVerProducto');
const modalProductosID = document.getElementById('modalProductosID');

botonProductoClickeado.addEventListener('click', () => { 

const modalMostrarProducto = (stockProductos) => {
    modalProductosID.innerHTML = ``

    stockProductos( (producto) => {
        const div = document.createElement('div')
        div.classList.add('productoModal')
        div.innerHTML = `
        
        <img class="imagenCelular" src="${producto.img}"" alt="">
        <h3 class="nombreCelular">${producto.nombre}</h3>
        <button class="buttonVerProducto">Ver Producto</button>
            
        ` 
        modalProductosID.appendChild(div)
    } )

}
modalMostrarProducto();
console.log(botonProductoClickeado);

})


 */ 

