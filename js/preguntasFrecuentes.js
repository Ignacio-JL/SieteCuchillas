
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


