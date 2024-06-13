// Função para carregar dados do localStorage
function loadUserData() {
    const userData = JSON.parse(localStorage.getItem('userProfile')) || {};
    document.querySelector('input[name="name"]').value = userData.name || '';
    document.querySelector('input[name="sobrenome"]').value = userData.sobrenome || '';
    document.querySelector('input[name="email"]').value = userData.email || '';
    document.querySelector('input[name="senha"]').value = userData.senha || '';
    document.getElementById('novoNickname').value = userData.nickname || '';
}

// Função para salvar dados no localStorage
function submitForm() {
    const form = document.getElementById('profileForm');
    const formData = new FormData(form);

    const data = {
        name: formData.get('name'),
        sobrenome: formData.get('sobrenome'),
        email: formData.get('email'),
        senha: formData.get('senha'),
        nickname: document.getElementById('novoNickname').value
    };

    localStorage.setItem('userProfile', JSON.stringify(data));
    alert('Dados salvos com sucesso!');
}

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

        // Carregar a imagem de perfil do localStorage ao carregar a página
        const storedImage = localStorage.getItem('profileImage');
        if (storedImage) {
            img.setAttribute('src', storedImage);
        }
    });

    function saveChangesAndUpdateLogin() {
        console.log("Botão Salvar clicado"); // Adiciona log para debug
        // Salvar a imagem de perfil temporária no localStorage
        if (tempImage) {
            localStorage.setItem('profileImage', tempImage);
        }

        // Obter os dados do usuário
        const nickname = document.getElementById('novoNickname').value;
        const name = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('senha').value;

        console.log("Dados do usuário", { nickname, name, email, password }); // Adiciona log para debug

        // Criar objeto de usuário
        const user = {
            nome: name,
            email: email,
            senha: password,
            nickname: nickname
        };

        // Obter a lista de usuários do localStorage ou criar uma nova se não existir
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Verificar se o usuário já existe na lista
        const existingUserIndex = users.findIndex(u => u.email === email);

        if (existingUserIndex !== -1) {
            // Se o usuário já existir, atualizar seus dados
            users[existingUserIndex] = user;
        } else {
            // Caso contrário, adicionar o novo usuário à lista
            users.push(user);
        }

        // Salvar a lista atualizada de usuários no localStorage
        localStorage.setItem("users", JSON.stringify(users));

        // Alertar que as alterações foram salvas com sucesso
        alert('Alterações salvas com sucesso!');

        // Redirecionar para a página inicial
        window.location.href = "../pages/pagInicial.html";
    }

    function cancelChanges() {
        // Redirecionar para a página inicial sem salvar a imagem de perfil
        alert('Alterações canceladas.');
        window.location.href = "../pages/pagInicial.html";
    }
