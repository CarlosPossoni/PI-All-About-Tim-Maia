function validarSessao() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var name_user = document.getElementById("name_user");

    if (email != null && nome != null) {
        name_user.innerHTML = nome;

    } else {
        window.location = "../index.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}

function aguardarCadastro() {
    var divAguardar = document.getElementById("load_register");
    divAguardar.style.display = "block";
}

function aguardarLogin() {
    var divAguardar = document.getElementById("load_login");
    divAguardar.style.display = "block";
}

function finalizarAguardarCadastro(texto) {
    var divAguardar = document.getElementById("load_register");
    divAguardar.style.display = "none";
    
    var divErrosLogin = document.getElementById("back_div");
    divErrosLogin.style.display = "block";
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}
function finalizarAguardarLogin(texto) {
    var divAguardar = document.getElementById("load_login");
    divAguardar.style.display = "none";
    
    var divErrosLogin = document.getElementById("back_div");
    divErrosLogin.style.display = "block";
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}
