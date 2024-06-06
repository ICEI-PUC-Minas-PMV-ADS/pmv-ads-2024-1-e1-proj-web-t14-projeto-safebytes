const imgDiv = document.querySelector('.user-img');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadbtn = document.querySelector('#uploadbtn');

file.addEventListener('change', function () {
    const chosedfile = this.files[0];
    if (chosedfile) {
        const reader = new FileReader();

        reader.addEventListener('load', function () {
            img.setAttribute('src', reader.result);
        })
        reader.readAsDataURL(chosedfile);
    }

})

// Função para salvar os dados do perfil no armazenamento local
function salvarPerfil() {
    var novoNome = document.getElementById('novoNome').value;
    var novoEmail = document.getElementById('novoEmail').value;

    // Salvar os novos dados no armazenamento local
    localStorage.setItem('nome', novoNome);
    localStorage.setItem('email', novoEmail);

    // Redirecionar de volta para a página de perfil
    window.location.href = 'http://127.0.0.1:5501/codigo-fonte/pages/perfil.html';

    // Evitar que o formulário seja submetido
    return false;
}

// Evento de clique no botão "Salvar"
document.getElementsByClassName('botao-salvar').addEventListener('click', function () {
    var novoNickname = document.getElementById('novoNickname').value;
    // Verifica se o novoNickname contém apenas letras e tem no máximo 8 caracteres
    if (/^[a-zA-Z]{1,8}$/.test(novoNickname)) {
        document.getElementById('nickname').textContent = novoNickname;
        document.getElementById('campoEditar').classList.add('hidden');
    } else {
        alert("O nickname deve conter apenas letras e ter no máximo 8 caracteres.");
    }
});


//--------------------------

// Função para exibir campo de edição ao clicar no ícone
document.getElementById('editarIcone').addEventListener('click', function () {
    document.getElementById('campoEditar').classList.remove('hidden');
    document.getElementById('novoNickname').value = document.getElementById('nickname').textContent;
});

// Capturando elementos
const novoNicknameInput = document.getElementById('novoNickname');

// Adicionando evento de entrada ao input
novoNicknameInput.addEventListener('input', function () {
    // Ajustando a largura do input baseado no número de caracteres
    this.style.width = ((this.value.length + 1) * 10) + 'px';
});
