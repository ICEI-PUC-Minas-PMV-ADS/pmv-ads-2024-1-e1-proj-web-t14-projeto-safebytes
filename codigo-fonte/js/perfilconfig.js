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
});

function saveChanges() {
    // Salvar a imagem de perfil temporária no localStorage
    if (tempImage) {
        const email = localStorage.getItem('loggedInUserEmail');
        if (email) {
            // Obter a lista de usuários do localStorage ou criar uma nova se não existir
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Verificar se o usuário já existe na lista
            const existingUserIndex = users.findIndex(u => u.email === email);

            if (existingUserIndex !== -1) {
                // Se o usuário já existir, atualizar seus dados com a nova imagem
                users[existingUserIndex].profileImage = tempImage;
                localStorage.setItem("users", JSON.stringify(users));
                alert('Alterações salvas com sucesso!');
            } else {
                alert('Usuário não encontrado.');
            }
        } else {
            alert('Usuário não está logado.');
        }
    }
    // Redirecionar para a página inicial
    window.location.href = "../pages/pagInicial.html";
}

function cancelChanges() {
    // Redirecionar para a página inicial sem salvar a imagem de perfil
    alert('Alterações canceladas.');
    window.location.href = "../pages/pagInicial.html";
}

