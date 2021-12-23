
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
            const div = document.createElement('div')
            div.classList.add('producto')
            div.innerHTML = `
    
            <div class="objetoProducto">    
                <img class="imagenMate" src="${producto.img}"" alt="">
                <h3 class="nombreMate">${producto.nombre}</h3>
                <button class="buttonVerProducto_${producto.id}">Ver Producto</button>
            </div>
        
    
            <div class="modalProducto_${producto.id} estilosModal" style="display: none;">
                <img class="imagenModal" src="${producto.img}"" alt="">
                <div class="contenidoModal">
                    <h3 class="nombreModal">${producto.nombre}</h3>

                    <hr class="hr" style="margin-top:70px"></hr>
                    <p class="descripcionModal">${producto.texto}</p>

                    <p class="textoNaranjaModal">podés personalizarlo con un motivo o escritura pirograbada a elección</p>

                    <a href="https://api.whatsapp.com/send?phone=+5491173632433"><button class="buttonInteresModal">Me interesa</button></a>

                    <p class="buttonOcultarProducto_${producto.id} buttonOcultarEstilos">X</p>
                   
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
                    $("#fondoModal").addClass('show');
                    $("#contenedorProductos").css('z-index','initial');
                    $(".footer").css('z-index','9000');
                })
        
                $('.buttonOcultarProducto_' + producto.id).on('click', function () {
                    $('.estilosModal').css("display","none");
                    $("#fondoModal").removeClass('show');
                    $("#contenedorProductos").css('z-index','9999');
                    $(".footer").css('z-index','initial');
                })
            }

        } )
       
    }
