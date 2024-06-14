function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.error('Erro ao carregar o JSON:', error);
            throw error;
        });
}

function createCards(artigos) {
    const catalogoList = document.querySelector('.catalogoList');

    artigos.forEach((artigo, index) => {
        const catalogoItem = document.createElement('div')
        catalogoItem.className = 'catalogoItem';
        catalogoItem.id = `item ${artigo.id}`;

        const catalogoImgDiv = document.createElement('div');
        catalogoImgDiv.className = 'catalogoImg';

        const catalogoImg = document.createElement('img');
        catalogoImg.src = artigo.capa;
        catalogoImg.alt = artigo.titulo;

        catalogoImgDiv.appendChild(catalogoImg);

        const catalogoTitleDiv = document.createElement('div');
        catalogoTitleDiv.className = 'catalogoTitle';

        const catalogoTitle = document.createElement('h6')
        catalogoTitle.innerHTML = artigo.titulo;

        catalogoTitleDiv.appendChild(catalogoTitle);

        catalogoItem.appendChild(catalogoImgDiv);
        catalogoItem.appendChild(catalogoTitleDiv);

        catalogoItem.addEventListener('click', () => {
            window.location.href = `pagArtigos.html?artigoIndex=${index}`;
        });

        catalogoList.appendChild(catalogoItem);
    });
}

function init() {
    fetchData('../Gersons/artigos.json')
        .then(data => {
            const artigos = data.artigo;
            createCards(artigos);
        });
}

init();