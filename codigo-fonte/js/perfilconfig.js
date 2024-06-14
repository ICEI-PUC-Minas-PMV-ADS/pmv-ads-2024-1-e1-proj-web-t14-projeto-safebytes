// Variável global para armazenar a imagem temporária
let tempImage = null;

document.addEventListener('DOMContentLoaded', function () {
    const img = document.querySelector('#photo');
    const file = document.querySelector('#file');
    const MAX_SIZE_MB = 2; // Tamanho máximo de arquivo em MB
    const MIN_WIDTH = 300;
    const MIN_HEIGHT = 300;

    file.addEventListener('change', function () {
        const chosenFile = this.files[0];

        if (chosenFile) {
            // Verificar o tamanho do arquivo
            const fileSizeMB = chosenFile.size / (1024 * 1024);
            if (fileSizeMB > MAX_SIZE_MB) {
                alert(`O arquivo é muito grande. O tamanho máximo permitido é ${MAX_SIZE_MB} MB.`);
                file.value = ''; // Limpar o input de arquivo
                return;
            }

            const reader = new FileReader();

            reader.addEventListener('load', function () {
                const tempImg = new Image();
                tempImg.src = reader.result;

                tempImg.onload = function () {
                    if (tempImg.width < MIN_WIDTH || tempImg.height < MIN_HEIGHT) {
                        alert(`As dimensões da imagem são muito pequenas. As dimensões mínimas permitidas são ${MIN_WIDTH}x${MIN_HEIGHT} pixels.`);
                        file.value = ''; // Limpar o input de arquivo
                    } else {
                        tempImage = reader.result; // Armazenar a imagem temporariamente
                        img.setAttribute('src', reader.result);
                    }
                };
            });

            reader.readAsDataURL(chosenFile);
        }
    });

    // Carregar a imagem de perfil do usuário logado ao carregar a página
    const email = localStorage.getItem('loggedInUserEmail');
    if (email) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.email === email);
        if (user && user.profileImage) {
            img.setAttribute('src', user.profileImage);
        }
    }

    // Mostrar nickname no placeholder
    var inputNickname = document.getElementById('novoNickname');
    var loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    var usersString = localStorage.getItem('users');
    var users = JSON.parse(usersString);
    var user = users.find(function(user) {
        return user.email === loggedInUserEmail;
    });

    if (user && user.nickname) {
        inputNickname.placeholder = user.nickname;
    } else {
        console.error(`Não foi possível encontrar o usuário com o email ${loggedInUserEmail} ou o usuário não possui um nickname.`);
    }
});

// Salvar alterações no perfil
function saveChanges() {
    // Recupera o email logado
    var loggedInUserEmail = localStorage.getItem('loggedInUserEmail');

    // Recupera o objeto users do localStorage
    var usersString = localStorage.getItem('users');
    var users = JSON.parse(usersString);

    // Encontra o usuário correspondente pelo email
    var user = users.find(function(user) {
        return user.email === loggedInUserEmail;
    });

    // Atualiza a foto de perfil se houver uma imagem temporária
    if (tempImage) {
        if (user) {
            user.profileImage = tempImage;
        }
    }

    // Atualiza o nickname se houver um novo nickname no input
    var inputNickname = document.getElementById('novoNickname');
    var newNickname = inputNickname.value.trim();
    if (newNickname && /^[A-Za-z]{1,8}$/.test(newNickname)) {
        if (user) {
            user.nickname = newNickname;
            localStorage.setItem('nickname', newNickname); // Atualiza o nickname no localStorage (opcional)
            inputNickname.value = ''; // Limpa o valor do input
            inputNickname.placeholder = newNickname; // Atualiza o placeholder com o novo nickname
        }
    }

    // Salva as alterações no localStorage
    localStorage.setItem('users', JSON.stringify(users));
    console.log('Alterações salvas:', users);

    // Redireciona para a página de perfil após salvar as alterações
    window.location.href = '../pages/perfil.html';
}

// Cancela as alterações e redireciona para a página inicial
function cancelChanges() {
    alert('Alterações canceladas.');
    window.location.href = '../pages/pagInicial.html';
}





