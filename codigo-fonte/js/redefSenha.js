function redefinirSenha(){
    var novaSenha = document.getElementById('inputNovaSenha').value;

    // Verifica se a nova senha não está vazia
    if (novaSenha.length >= 8) {

        var users = JSON.parse(localStorage.getItem('users')) || {};

        // Atualiza a senha no objeto 'users'
        users[0].senha = novaSenha;

        // Salva os dados atualizados de volta no localStorage
        localStorage.setItem('users', JSON.stringify(users));

        // Feedback para o usuário
        alert('Senha atualizada com sucesso!');

        // Limpa o campo de nova senha
        document.getElementById('novaSenha').value = '';
    } else {
        alert('Por favor, digite uma nova senha válida.');
    }
}
