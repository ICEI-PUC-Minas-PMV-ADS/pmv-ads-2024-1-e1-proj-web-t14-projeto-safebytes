document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('inputnome').value;
        const email = document.getElementById('inputemail').value;
        const senha = document.getElementById('inputsenha').value;

        // Carrega os usuários do localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Verifica se o usuário já existe
        const userExists = users.some(user => user.email === email);
        if (userExists) {
            alert('Usuário já existe');
            return;
        }

        // Adiciona o novo usuário à lista
        users.push({ nome, email, senha });

        // Salva a lista de usuários no localStorage
        localStorage.setItem('users', JSON.stringify(users));

        alert('Usuário cadastrado com sucesso');

        // Limpa o formulário
        registerForm.reset();

        window.location.href = '../pages/login.html'
    });
});





