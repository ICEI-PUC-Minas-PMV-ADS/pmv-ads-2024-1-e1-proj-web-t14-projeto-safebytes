document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('inputemail').value;
        const senha = document.getElementById('inputsenha').value;

        // Carrega os usuários do localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Verifica se o usuário já existe
        const userExists = users.some(user => user.email === email && user.senha === senha);
        if (userExists) {
            alert('Login feito com sucesso!')
            window.location.href = '../pages/pagInicial.html';
        }  else {
            alert('Email ou senha incorretos!')
        }
        
        // Limpa o formulário
        loginForm.reset();

    });
});
