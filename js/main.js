//Scroll Contacto
    $('#itemContacto').on('click',function(){
        $('#navbarTogglerDemo2').removeClass('show');
        $('html, body').animate({
            scrollTop: $('#contacto').offset().top
        }, 800);
    });


//Control campos vacios y check del formato de correo
function controlFormulario(){
        if($('#nombre').val().length != 0 && $('#correo').val().length != 0 && $('#telefono').val().length != 0 && $('#mensaje').val().length != 0 && $('#checkCorreo').css('display') == 'none'){
            return true;
        }
        else{
            return false;
        }
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








