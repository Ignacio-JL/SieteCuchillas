
/* Productos */

const url = './js/stock.json'
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
            // <button class="buttonVerProducto_${producto.id}">Ver Producto</button>
            const div = document.createElement('div')
            div.classList.add('producto')
            div.innerHTML = `
    
            <div class="objetoProducto">    
                <img class="imagenMate" src="${producto.img}"" alt="">
                <h3 class="nombreMate">${producto.nombre}</h3>
                <button type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal${producto.id}">Ver Producto</button>
            </div>
        
            <div class="modal fade" id="exampleModal${producto.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="top: 100px;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="modalProducto_${producto.id} estilosModal" style="display: block;">
                            <img class="imagenModal" src="${producto.img}"" alt="">
                                <div class="contenidoModal">
                                    <h3 class="nombreModal">${producto.nombre}</h3>
                
                                    <hr class="hr"></hr>
                                    <p class="descripcionModal">Mate de madera de algarrobo con terminación encerada brillante artesanal. </br> El modelo mide aproximadamente 9cm altura y 7cm diámetro. Viene con una bombilla de color incluida</p>
                
                                    <p class="textoNaranjaModal">podés personalizarlo con un motivo o escritura pirograbada a elección</p>
                
                                    <button class="buttonInteresModal" onclick="location.href='https://api.whatsapp.com/send?phone=+5491173632433&text=Consulta%20por%20${producto.nombre}'">Me interesa</button>
                
                                    <p class="buttonOcultarProducto_${producto.id} buttonOcultarEstilos">X</p>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
                
            ` 
            contenedorProductos.appendChild(div)


            if (screen.width < 1023) {
                $('.buttonVerProducto_' + producto.id).on('click', function () {
                    $(".modalProducto_" + producto.id).css("display","block");
                    $(".objetoProducto").css("display","none");
                    $(".nuestrosProductos").css("display","none");
                    $(".header").css("display","none");
                    $(".productos").css("margin-top","0");
                    $(".producto").css("margin-top","0");
                })
        
                $('.buttonOcultarProducto_' + producto.id).on('click', function () {
                    $(".modalProducto_" + producto.id).css("display","none");
                    $(".objetoProducto").css("display","block");
                    $(".nuestrosProductos").css("display","block");
                    $(".header").css("display","block");
                    $(".producto").css("margin-top","1.5em");
                })
            }
            else if (screen.width > 1023) {
                $('.buttonVerProducto_' + producto.id).on('click', function () {
                    $(".modalProducto_" + producto.id).css("display","flex"); 
                })
        
                $('.buttonOcultarProducto_' + producto.id).on('click', function () {
                    $('.estilosModal').css("display","none");
                })
            }

        } )
       
    }
