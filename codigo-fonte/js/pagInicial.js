fetch('../Gersons/tutoriais.json')
    .then(response => response.json())
    .then(data => {

        var tutoriais = data;

        if (localStorage.getItem('progressoTutorial')) {
            const progressoSalvo = JSON.parse(localStorage.getItem('progressoTutorial'));

            const tutorialIndex = progressoSalvo.tutorialIndex;
            const etapaIndex = progressoSalvo.etapaIndex;

            const tutorialTitulo = document.querySelector('.tituloTutorial');
            const H3 = document.createElement('h3');
            H3.textContent = tutoriais.tutorial[tutorialIndex].titulo;
            tutorialTitulo.appendChild(H3);

            const continuarTutorial = document.getElementById('continuarTutorial');
            continuarTutorial.addEventListener('click', () => {
                window.location.href = `pagTutoriais.html?tutorial=${tutorialIndex}&etapaIndex=${etapaIndex}`;
            })


        }
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));