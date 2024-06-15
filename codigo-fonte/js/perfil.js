// Carregar a imagem de perfil do usuário logado ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    const email = localStorage.getItem('loggedInUserEmail');
    if (email) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.email === email);
        if (user && user.profileImage) {
            const perfilImg = document.getElementById('perfil');
            if (perfilImg) {
                perfilImg.setAttribute('src', user.profileImage);
            }
        }
    }
});

// funcionalidade de logout
document.addEventListener('DOMContentLoaded', function () {
    function logout() {
        console.log('Logout iniciado');

        // Remover o email do usuário do localStorage para efetuar o logout
        localStorage.removeItem('loggedInUserEmail');
        console.log('Email removido do localStorage');

        // Redirecionar para a página de login
        window.location.href = "../pages/login.html";
    }

    const logoutButton = document.getElementById('logoutButton');

    if (logoutButton) {
        console.log('#logoutButton encontrado');
        logoutButton.addEventListener('click', function (e) {
            e.preventDefault(); // Impedir o comportamento padrão do link, se necessário
            logout();
        });
    } else {
        console.log('#logoutButton não encontrado');
    }
});

// se o usuário não tiver logado ele não consegue permanecer nessa página
document.addEventListener('DOMContentLoaded', function () {
    // Verificar se o usuário está logado ao carregar a página
    const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    if (!loggedInUserEmail) {
        // Redirecionar para a página de login sem manter no histórico
        window.location.replace("../pages/login.html");

        // Limpar qualquer entrada da página não autorizada no histórico de navegação
        if (window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        } else {
            // Alternativa para navegadores que não suportam replaceState
            window.location.replace("../pages/login.html");
        }
    }
});

// fim da funcionalidade de logout

    // Adicionar evento de clique para a opção "Configurar Perfil"
    document.getElementById('configurarPerfil').addEventListener('click', function () {
        window.location.href = "../pages/perfilConfig.html";
    });


    document.addEventListener('DOMContentLoaded', function () {
        // Passo 1: Recuperar o objeto users do localStorage
        const usersString = localStorage.getItem('users');
        const users = JSON.parse(usersString);
    
        // Passo 2: Recuperar o email logado
        const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    
        // Passo 3: Encontrar o usuário pelo email
        let userWithEmail = users.find(user => user.email === loggedInUserEmail);
    
        // Passo 4: Verificar se encontrou o usuário e atualizar o nickname na tela
        if (userWithEmail) {
            const userNicknameElement = document.getElementById('userNickname');
            if (userNicknameElement) {
                // Exibir o nickname na tela
                if (userWithEmail.nickname) {
                    userNicknameElement.textContent = userWithEmail.nickname;
                } else {
                    console.error(`O usuário com email ${loggedInUserEmail} não possui um nickname.`);
                }
            } else {
                console.error(`Elemento com id 'userNickname' não encontrado.`);
            }
        } else {
            console.error(`Não foi possível encontrar o usuário com o email ${loggedInUserEmail}`);
        }
    });
    