// Carregar a imagem de perfil do localStorage ao carregar a página
    document.addEventListener('DOMContentLoaded', function () {
        const storedImage = localStorage.getItem('profileImage');
        if (storedImage) {
            const perfilImg = document.getElementById('perfil');
            if (perfilImg) {
                perfilImg.setAttribute('src', storedImage);
            }
        }
    });

    document.getElementById('logoutButton').addEventListener('click', function () {
        // Limpar dados de autenticação do localStorage
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userPassword');

        // Obter o email do usuário atualmente logado
        const currentUserEmail = localStorage.getItem('userEmail');

        // Obter o email associado à foto de perfil atualmente armazenada
        const profileImageEmail = localStorage.getItem('profileImageEmail');

        // Verificar se o usuário está fazendo logout da mesma conta em que a foto de perfil foi definida
        if (currentUserEmail !== profileImageEmail) {
            // Se não for a mesma conta, remover a foto de perfil do localStorage
            localStorage.removeItem('profileImage');
            localStorage.removeItem('profileImageEmail');
        }

        // Redirecionar para a página de login
        window.location.href = "../pages/login.html";
    });
    // Adicionar evento de clique para a opção "Configurar Perfil"
    document.getElementById('configurarPerfil').addEventListener('click', function () {
        window.location.href = "../pages/perfilConfig.html";
    });