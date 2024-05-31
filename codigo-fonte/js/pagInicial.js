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
            H2.textContent = 'Continue o Tutorial:'

            const H3 = document.createElement('h3');
            H3.textContent = tutoriais.tutorial[tutorialIndex].titulo;

            tutorialTitulo.appendChild(H2);
            tutorialTitulo.appendChild(H3);
            continuarTutorialDiv.appendChild(capaTutorial);
            continuarTutorialDiv.appendChild(tutorialTitulo);

            const continuarTutorial = document.getElementById('continuarTutorial');
            continuarTutorial.addEventListener('click', () => {
                window.location.href = `pagTutoriais.html?tutorial=${tutorialIndex}&etapaIndex=${etapaIndex}`;
            })
        }

        if (localStorage.getItem('progressoTutorial')) {
            const progressoSalvo = JSON.parse(localStorage.getItem('progressoTutorial'));

            const tutorialIndex = progressoSalvo.tutorialIndex;
            const etapaIndex = progressoSalvo.etapaIndex;
            secContinuar(tutorialIndex, etapaIndex);
        }
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));