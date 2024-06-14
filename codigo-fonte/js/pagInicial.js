document.getElementById("quiz0").addEventListener('click', () => {
    window.location.href = './quizzes/quiz0.html'
});

document.getElementById("quiz2").addEventListener('click', () => {
    window.location.href = './quizzes/quiz2.html'
});

document.getElementById("quiz3").addEventListener('click', () => {
    window.location.href = './quizzes/quiz3.html'
});

// Funcionalidade Tutoriais
fetch('../Gersons/tutoriais.json')
    .then(response => response.json())
    .then(data => {
        var tutoriais = data;

        function secContinuar(tutorialIndex, etapaIndex) {
            const continuarTutorialDiv = document.querySelector('#continuarTutorial');
            const tutorialTitulo = document.querySelector('.tituloTutorial');

            continuarTutorialDiv.innerHTML = '';
            tutorialTitulo.innerHTML = '';

            const capaTutorial = document.createElement('img');
            capaTutorial.id = 'capaTutorial';
            capaTutorial.src = tutoriais.tutorial[tutorialIndex].imagem;
            capaTutorial.alt = 'Capa' + tutoriais.tutorial[tutorialIndex].titulo;

            const H2 = document.createElement('h2');
            H2.textContent = 'Continue o Tutorial:';

            const H3 = document.createElement('h3');
            H3.textContent = tutoriais.tutorial[tutorialIndex].titulo;

            tutorialTitulo.appendChild(H2);
            tutorialTitulo.appendChild(H3);
            continuarTutorialDiv.appendChild(capaTutorial);
            continuarTutorialDiv.appendChild(tutorialTitulo);

            const continuarTutorial = document.getElementById('continuarTutorial');
            continuarTutorial.addEventListener('click', () => {
                window.location.href = `pagTutoriais.html?tutorial=${tutorialIndex}&etapaIndex=${etapaIndex}`;
            });
        }

        if (localStorage.getItem('progressoTutorial')) {
            const progressoSalvo = JSON.parse(localStorage.getItem('progressoTutorial'));
            const tutorialIndex = progressoSalvo.tutorialIndex;
            const etapaIndex = progressoSalvo.etapaIndex;

            if (etapaIndex < tutoriais.tutorial[tutorialIndex].etapas.length - 1) {
                secContinuar(tutorialIndex, etapaIndex);
            } else {
                const continuarTutorialDiv = document.querySelector('#continuarTutorial');
                continuarTutorialDiv.innerHTML = '';
            }
        }
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));

//entrada nickname

// Verificar se o objeto users já está definido no localStorage
var users = JSON.parse(localStorage.getItem('users')) || [];

// Verificar se o nickname já está definido ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    var loggedInUserEmail = localStorage.getItem('loggedInUserEmail');

    // Encontrar o usuário com base no email logado
    var userWithEmail = users.find(user => user.email === loggedInUserEmail);

    if (!userWithEmail || !userWithEmail.nickname) {
        // Se não houver usuário com o email logado OU se o usuário existir mas não tiver nickname definido
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('nicknamePopup').style.display = 'block';
    } else {
        // Se o usuário existe e possui um nickname definido, atualizar o nickname na página de perfil
        var userNicknameElement = document.getElementById('userNickname');
        if (userNicknameElement) {
            userNicknameElement.textContent = userWithEmail.nickname;
        } else {
            console.error(`Elemento com id 'userNickname' não encontrado.`);
        }
    }
});

// Manipular a submissão do formulário de nickname
document.getElementById('nicknameForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var nickname = document.getElementById('nickname').value.trim(); // Remover espaços em branco antes e depois
    if (/^[A-Za-z]{1,8}$/.test(nickname)) {
        var loggedInUserEmail = localStorage.getItem('loggedInUserEmail');

        // Verificar se já existe um usuário com esse email no array users
        var userIndex = users.findIndex(user => user.email === loggedInUserEmail);

        if (userIndex !== -1) {
            // Atualizar o nickname do usuário existente
            users[userIndex].nickname = nickname;
        } else {
            // Criar um novo objeto de usuário com o nickname
            users.push({
                nome: '', // Incluir outros campos necessários, se houver
                email: loggedInUserEmail,
                senha: '', // Incluir a senha, se necessário
                nickname: nickname
            });
        }

        localStorage.setItem('users', JSON.stringify(users)); // Salva o objeto users no localStorage
        localStorage.setItem('nickname', nickname); // Salva o nickname no localStorage
        console.log(users); // Exibe o objeto users no console
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('nicknamePopup').style.display = 'none';

        // Atualizar o nickname na página de perfil
        var userNicknameElement = document.getElementById('userNickname');
        if (userNicknameElement) {
            userNicknameElement.textContent = nickname;
        }
    } else {
        alert('Nickname inválido. Use apenas letras e até 8 caracteres.');
    }
});





//fim entrada de nickname

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