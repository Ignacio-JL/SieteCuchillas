
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
$(".footer").css('z-index', '1 !important');
$('.mailOk').toggle(0).animate({
    opacity: '1'
    }, "slow"
)
.delay(3000)
.animate({
    opacity: '1'
}, 0,
function (){window.location.reload();}
);
}

//Envio Mail fetch
async function handleSubmit(event){
event.preventDefault();
if(controlFormulario()){

    const miForm = new FormData(this);
    const response = await fetch("https://formsubmit.co/contacto@sietecuchillas.com.ar", {
        method: "POST",
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

