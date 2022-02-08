$(document).ready(function() {
    $("body").load('template/form_login_view.html');
    $('#div-btn1').on('click', function() {
        $("body").load('template/dashaboard.html');
        var usuario_session = btoa('holamundo');
        sessionStorage.setItem('token',usuario_session);
        return false; 
    });
}); 
function validad_session(){
    if (sessionStorage.length == 0){ cosole.log('test'); }
}

function salir(){
    sessionStorage.removeItem('token'); 
    sessionStorage.clear();  
    $("body").load('index.html');
}

