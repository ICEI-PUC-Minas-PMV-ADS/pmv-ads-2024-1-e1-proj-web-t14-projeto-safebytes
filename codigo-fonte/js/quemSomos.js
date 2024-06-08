function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.error('Erro ao carregar o JSON:', error);
            throw error;
        });
}

function createQuemSomosTitle(quemSomos) {
    const quemSomosTitle = document.querySelector('.quemSomosTitle');

    const H1 = document.createElement('h1');
    H1.innerHTML = quemSomos.titulo;

    quemSomosTitle.appendChild(H1);
}

function createQuemSomosItem(quemSomos) {
    if (quemSomos && quemSomos.secoes) {
        quemSomos.secoes.forEach((secao) => {
            const quemSomosList = document.querySelector('.quemSomosList');

            const quemSomosItem = document.createElement('div');
            quemSomosItem.id = `${secao.id}Div`;
            quemSomosItem.className = 'quemSomosItem';

            const quemSomosImgDiv = document.createElement('div');
            quemSomosImgDiv.className = 'quemSomosImg';

            const quemSomosImg = document.createElement('img');
            quemSomosImg.src = secao.imagem;
            quemSomosImg.id = secao.id;
            quemSomosImg.alt = `Quem Somos - ${secao.titulo}` || 'Missão';

            quemSomosImgDiv.appendChild(quemSomosImg);

            const quemSomosTxt = document.createElement('div');
            quemSomosTxt.className = 'quemSomosTxt';

            const titleDiv = document.createElement('div');
            titleDiv.id = `${secao.id}Title`;

            const H3 = document.createElement('h3');
            H3.innerHTML = secao.titulo;

            titleDiv.appendChild(H3);

            const txtDiv = document.createElement('div');
            txtDiv.id = `${secao.id}Txt`;

            const paragrafo = document.createElement('p');
            paragrafo.innerHTML = secao.texto;

            txtDiv.appendChild(paragrafo);

            quemSomosTxt.appendChild(titleDiv);
            quemSomosTxt.appendChild(txtDiv);

            quemSomosItem.appendChild(quemSomosImgDiv);
            quemSomosItem.appendChild(quemSomosTxt);

            quemSomosList.appendChild(quemSomosItem);
        });
    } else {
        console.error('A propriedade secoes está indefinida ou quemSomos não é um objeto.');
    }
}

function init() {
    fetchData('../Gersons/quemSomos.json')
        .then(data => {
            const quemSomos = data.quemSomos;
            createQuemSomosTitle(quemSomos);
            createQuemSomosItem(quemSomos);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    init();
});
