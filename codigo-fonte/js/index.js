function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.error('Erro ao carregar o JSON:', error);
            throw error;
        });
}

const quemSomosBtn = document.querySelector('#quemSomosBtn');
quemSomosBtn.addEventListener('click', () => {
    window.location.href = 'pagQuemSomos.html'
})

function createSliderCards(artigos) {
    const sliderListDiv = document.querySelector('.sliderWrapper .sliderList');

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

        // Adiciona um evento de clique ao sliderItem
        sliderItem.addEventListener('click', () => {
            // Redireciona para a página de artigos com o índice do artigo como parâmetro
            window.location.href = `pagArtigos.html?artigoIndex=${index}`;
        });

        sliderListDiv.appendChild(sliderItem);
    });
}

function init() {
    fetchData('../Gersons/artigos.json')
        .then(data => {
            const artigos = data.artigo;
            createSliderCards(artigos);
        });
}

init();


// Configurações do slide
const initSlider = () => {
    const sliderList = document.querySelector(".sliderWrapper .sliderList");
    const sliderButtons = document.querySelectorAll(".sliderWrapper .sliderBtn");

    sliderButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prevSlide" ? -150 : 150;
            sliderList.scrollBy({ left: direction, behavior: "smooth" });
        });
    });

    sliderList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
    });

    updateScrollThumbPosition();
};

window.addEventListener("load", initSlider);

