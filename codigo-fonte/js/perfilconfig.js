// Variável global para armazenar a imagem temporária
let tempImage = null;

// Função para cancelar alterações
function cancelChanges() {
    alert('Alterações canceladas.');
    window.location.href = '../pages/pagInicial.html';
}

// Função para validar o formato de email
function validateEmail(email) {
    // Expressão regular para validar o formato de email
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

// Função para salvar as alterações
function saveChanges() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value.trim();
    var senha = document.getElementById("senha").value;
    var inputNickname = document.getElementById('novoNickname');
    var newNickname = inputNickname.value.trim();

    // Validar o formato de email
    if (!validateEmail(email)) {
        alert("Formato de email inválido. Por favor, insira um email válido.");
        return;
    }

    // Atualiza a foto de perfil se houver uma imagem temporária
    var img = document.getElementById('photo');
    if (tempImage) {
        img.setAttribute('src', tempImage);
    }

    var loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    var usersString = localStorage.getItem('users');
    var users = usersString ? JSON.parse(usersString) : []; // Verifica se existem dados válidos no localStorage

    var userIndex = users.findIndex(function (user) {
        return user.email === loggedInUserEmail;
    });

    if (userIndex !== -1) {
        var senhaAtual = users[userIndex].senha; // A senha atual do usuário, obtida do objeto users

        if (nome !== "" || senha !== "") {
            var senhaDigitada = prompt("Digite sua senha para confirmar as alterações:");

            if (senhaDigitada === senhaAtual) {
                // Atualiza os dados sensíveis apenas se a senha for correta
                updateUserData(nome, email, senha, newNickname, userIndex);

                // Atualiza loggedInUserEmail se o email foi alterado
                if (loggedInUserEmail !== email) {
                    localStorage.setItem('loggedInUserEmail', email);
                }

                redirectToHomePage();
            } else {
                alert("Senha incorreta. As alterações não foram salvas.");
            }
        } else {
            // Atualiza apenas a foto e o nickname sem alterar nome, email ou senha
            updateUserData(null, email, null, newNickname, userIndex);

            redirectToHomePage();
        }
    } else {
        alert("Usuário não encontrado. Verifique se os dados estão corretamente armazenados.");
        console.log("Usuário não encontrado. Dados atuais:", loggedInUserEmail, users);
    }
}

// Função para atualizar os dados do usuário
function updateUserData(nome, email, senha, newNickname, userIndex) {
    var usersString = localStorage.getItem('users');
    var users = usersString ? JSON.parse(usersString) : []; // Verifica se existem dados válidos no localStorage

    if (userIndex !== -1) {
        // Atualiza os dados do usuário apenas se houver alterações
        if (nome !== null && nome !== "" && nome !== users[userIndex].nome) {
            users[userIndex].nome = nome;
        }
        if (email !== null && email !== "" && email !== users[userIndex].email) {
            users[userIndex].email = email;
        }
        if (senha !== null && senha.trim() !== "") {
            users[userIndex].senha = senha;
        }
        if (tempImage) {
            users[userIndex].profileImage = tempImage;
        }
        if (newNickname !== "" && newNickname !== users[userIndex].nickname) {
            users[userIndex].nickname = newNickname;
        }

        // Salva os dados atualizados de volta no localStorage
        localStorage.setItem('users', JSON.stringify(users));
        alert("Alterações salvas com sucesso!");
    } else {
        alert("Usuário não encontrado. Verifique se os dados estão corretamente armazenados.");
        console.log("Usuário não encontrado. Dados atuais:", users);
    }
}

// Função para redirecionar para a página inicial após salvar as alterações
function redirectToHomePage() {
    window.location.href = '../pages/pagInicial.html';
}

// Lógica para manipular a imagem de perfil
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
    var loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    var usersString = localStorage.getItem('users');
    var users = usersString ? JSON.parse(usersString) : []; // Verifica se existem dados válidos no localStorage

    var user = users.find(function (user) {
        return user.email === loggedInUserEmail;
    });

    if (user && user.profileImage) {
        img.setAttribute('src', user.profileImage);
    }

    // placeholders da pag. perfilConfig.html

    // placeholders com os dados do usuário logado
    document.getElementById('nome').placeholder = user.nome;
    document.getElementById('email').placeholder = user.email;
    document.getElementById('senha').placeholder = "Senha"; // Não mostrar a senha, apenas placeholder genérico, pois a informação é sensível
    
    // nickname no placeholder
    var inputNickname = document.getElementById('novoNickname');
    if (user && user.nickname) {
        inputNickname.placeholder = user.nickname;
    } else {
        console.error(`Não foi possível encontrar o usuário com o email ${loggedInUserEmail} ou o usuário não possui um nickname.`);
    }
});



