// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var name_user = document.getElementById("name_user");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        name_user.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../home.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../home.html";
}
// carregamento (loading)
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


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

