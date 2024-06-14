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


//entrada de nickname

// Verificar se o objeto users já está definido no localStorage
var users = JSON.parse(localStorage.getItem('users')) || [];

// Manipular a submissão do formulário de nickname
document.getElementById('nicknameForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var nickname = document.getElementById('nickname').value.trim(); // Remover espaços em branco antes e depois
    if (/^[A-Za-z]{1,8}$/.test(nickname)) {
        // Adicionar o novo nickname ao objeto users sem modificar estruturas existentes
        users.push({
            nickname: nickname
        });
        localStorage.setItem('users', JSON.stringify(users)); // Salva o objeto users no localStorage
        localStorage.setItem('nickname', nickname); // Salva o nickname no localStorage
        console.log(users); // Exibe o objeto users no console
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('nicknamePopup').style.display = 'none';
    } else {
        alert('Nickname inválido. Use apenas letras e até 8 caracteres.');
    }
});

// Verificar se o nickname já está definido ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('nickname')) {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('nicknamePopup').style.display = 'block';
    } else {
        var storedNickname = localStorage.getItem('nickname').trim(); // Remover espaços em branco antes e depois
        if (!users.find(user => user.nickname === storedNickname)) {
            users.push({
                nickname: storedNickname
            });
            localStorage.setItem('users', JSON.stringify(users)); // Atualiza o objeto users no localStorage
            console.log(users); // Exibe o objeto users no console
        }
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