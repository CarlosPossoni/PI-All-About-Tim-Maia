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

function aguardar() {
    var divAguardar = document.getElementById("load");
    divAguardar.style.display = "block";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("load");
    divAguardar.style.display = "none";
    
    var divErrosLogin = document.getElementById("return_div");
    divErrosLogin.style.display = "block";
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}
