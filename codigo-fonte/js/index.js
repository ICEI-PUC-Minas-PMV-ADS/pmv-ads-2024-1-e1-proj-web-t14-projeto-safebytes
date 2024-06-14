document.addEventListener('DOMContentLoaded', () => {
    const quemSomosBtn = document.querySelector('#quemSomosBtn');
    quemSomosBtn.addEventListener('click', () => {
        window.location.href = 'pagQuemSomos.html';
    });

    function fetchData(url) {
        return fetch(url)
            .then(response => response.json())
            .catch(error => {
                console.error('Erro ao carregar o JSON:', error);
                throw error;
            });
    }

    function createSliderCards(artigos) {
        const sliderListDiv = document.querySelector('.sliderWrapper .sliderList');
        const fragment = document.createDocumentFragment();

        artigos.forEach((artigo, index) => {
            const sliderItem = document.createElement('div');
            sliderItem.className = 'sliderItem';
            sliderItem.id = `sliderItem${artigo.id}`;

            const sliderImgDiv = document.createElement('div');
            sliderImgDiv.className = 'sliderImg';

            const sliderImg = document.createElement('img');
            sliderImg.src = artigo.capa;
            sliderImg.alt = artigo.titulo;

            sliderImgDiv.appendChild(sliderImg);

            const sliderTitleDiv = document.createElement('div');
            sliderTitleDiv.className = 'sliderTitle';

            const sliderTitle = document.createElement('h6');
            sliderTitle.innerHTML = artigo.titulo;

            sliderTitleDiv.appendChild(sliderTitle);

            sliderItem.appendChild(sliderImgDiv);
            sliderItem.appendChild(sliderTitleDiv);

            sliderItem.addEventListener('click', () => {
                window.location.href = `pagArtigos.html?artigoIndex=${index}`;
            });

            fragment.appendChild(sliderItem);
        });

        sliderListDiv.appendChild(fragment);
    }


    function createPerguntasFreqTitle(perguntasFrequentes) {
        const perguntasFreqTitle = document.querySelector('.perguntasMainTitle');

        const H2 = document.createElement('h2');
        H2.innerHTML = perguntasFrequentes.titulo;

        perguntasFreqTitle.appendChild(H2);
    }

    function createPerguntasItem(perguntasFrequentes) {
        if (perguntasFrequentes && perguntasFrequentes.perguntas) {
            perguntasFrequentes.perguntas.forEach((pergunta) => {
                const perguntasList = document.querySelector('.perguntasList');

                const perguntasItem = document.createElement('div');
                perguntasItem.className = 'perguntasItem';

                const perguntasImgDiv = document.createElement('div');
                perguntasImgDiv.className = 'perguntasImg';

                const perguntasImg = document.createElement('img');
                perguntasImg.src = pergunta.imagem;
                perguntasImg.id = `pergunta${pergunta.id}`;
                perguntasImg.alt = `Pergunta ${pergunta.id}: ${pergunta.pergunta}`;

                perguntasImgDiv.appendChild(perguntasImg);

                const perguntasTxt = document.createElement('div');
                perguntasTxt.className = 'perguntasText';

                const H6 = document.createElement('h6');
                H6.innerHTML = pergunta.pergunta;

                perguntasTxt.appendChild(H6);

                perguntasItem.appendChild(perguntasImgDiv);
                perguntasItem.appendChild(perguntasTxt);

                perguntasItem.addEventListener('click', () => {
                    showModal(pergunta);
                });

                perguntasList.appendChild(perguntasItem);

                createModal(pergunta);
            });
        } else {
            console.error('A propriedade perguntas está indefinida ou perguntasFrequentes não é um objeto.');
        }
    }

    function createModal(pergunta) {
        const modalDiv = document.createElement('div');
        modalDiv.className = 'modal fade';
        modalDiv.id = `modal${pergunta.id}`;
        modalDiv.tabIndex = -1;
        modalDiv.setAttribute('aria-labelledby', `modalLabel${pergunta.id}`);
        modalDiv.setAttribute('aria-hidden', 'true');

        modalDiv.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title" id="modalLabel${pergunta.id}">${pergunta.pergunta}</h6>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div id="modal-text${pergunta.id}">
                            <p>${pergunta.resposta}</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="button" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modalDiv);

        const closeButtonInsideModal = modalDiv.querySelector('.modal-header .btn-close');
        closeButtonInsideModal.addEventListener('click', () => {
            closeModal(modalDiv);
        });

        const closeButtonFooter = modalDiv.querySelector('.modal-footer button');
        closeButtonFooter.addEventListener('click', () => {
            closeModal(modalDiv);
        });
    }

    function closeModal(modalDiv) {
        modalDiv.classList.remove('show');
        modalDiv.setAttribute('aria-hidden', 'true');
        modalDiv.setAttribute('style', 'display: none');

        const modalBackdrop = document.querySelector('.modal-backdrop');
        modalBackdrop.parentNode.removeChild(modalBackdrop);
    }

    function showModal(pergunta) {
        const modal = new bootstrap.Modal(document.getElementById(`modal${pergunta.id}`), {});
        modal.show();
    }

    function init() {
        fetchData('../Gersons/artigos.json')
            .then(data => {
                const artigos = data.artigo;
                createSliderCards(artigos);
            });
    }

    function initQuestions() {
        fetchData('../Gersons/perguntasFrequentes.json')
            .then(data => {
                const perguntasFrequentes = data.perguntasFrequentes;
                createPerguntasFreqTitle(perguntasFrequentes);
                createPerguntasItem(perguntasFrequentes);
            });
    }

    function initSlider() {
        const sliderList = document.querySelector(".sliderWrapper .sliderList");
        const sliderButtons = document.querySelectorAll(".sliderWrapper .sliderBtn");

        sliderButtons.forEach(button => {
            button.addEventListener("click", () => {
                const direction = button.id === "prevSlide" ? -150 : 150;
                sliderList.scrollBy({ left: direction, behavior: "smooth" });
            });
        });
    }

    init();
    initSlider();
    initQuestions();
});

