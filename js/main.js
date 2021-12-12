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
const footerProductosClick = document.getElementById('footerProductosClick');
const btnProductosMain = document.getElementById('btnProductosMain');
const contenedorProductos = document.getElementById('contenedorProductos');
const contenidoPrincipalID = document.getElementById('contenidoPrincipalID');


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
    
            <div class="objetoProducto">    
                <img class="imagenCelular" src="${producto.img}"" alt="">
                <h3 class="nombreCelular">${producto.nombre}</h3>
                <button class="buttonVerProducto_${producto.id}">Ver Producto</button>
            </div>
        
    
            <div class="modalProducto_${producto.id} estilosModal" style="display: none;">  
                <img class="imagenModal" src="${producto.img}"" alt="">
                <h3 class="nombreModal">${producto.nombre}</h3>
                <hr></hr>
                <p class="descripcionModal">Mate de madera de algarrobo con terminación encerada brillante artesanal. El modelo mide aproximadamente 9cm altura y 7cm diámetro. Viene con una bombilla de color incluida</p>
                <p class="textoNaranjaModal">podés personalizarlo con un motivo o escritura pirograbada a elección</p>
                <p class="buttonOcultarProducto_${producto.id} buttonOcultarEstilos">X</p>
                <button class="buttonInteresModal">Me interesa</button>
            </div>
                
            ` 
            contenedorProductos.appendChild(div)
            
            $('.buttonVerProducto_' + producto.id).on('click', function () {
                $(".modalProducto_" + producto.id).css("display","block");
                $(".objetoProducto").css("display","none");
                $(".nuestrosProductos").css("display","none");
                $(".header").css("display","none");
            })
    
            $('.buttonOcultarProducto_' + producto.id).on('click', function () {
                $(".modalProducto_" + producto.id).css("display","none");
                $(".objetoProducto").css("display","block");
                $(".nuestrosProductos").css("display","block");
                $(".header").css("display","block");
            })
    
    
        } )
       
    }

    document.getElementById('navProductosClick').onclick = function () {
        contenedorProductos.classList.toggle('mostrarProductos');
        contenidoPrincipalID.classList.toggle('ocultar')
        console.log(navProductosClick)
        $('.nuestrosProductos').css("display","block");
        this.onclick = false;
    }

    document.getElementById('footerProductosClick').onclick = function () {
        contenedorProductos.classList.toggle('mostrarProductos');
        contenidoPrincipalID.classList.toggle('ocultar')
        console.log(navProductosClick)
        $('.nuestrosProductos').css("display","block");
        this.onclick = false;
        event.preventDefault();
    }


    document.getElementById('btnProductosMain').onclick = function () {
        contenedorProductos.classList.toggle('mostrarProductos');
        contenidoPrincipalID.classList.toggle('ocultar')
        console.log(navProductosClick)
        $('.nuestrosProductos').css("display","block");
    }









