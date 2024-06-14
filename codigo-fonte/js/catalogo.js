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
        catalogoItem.dataset.keywords = artigo.keywords.join('').toLowerCase();

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

function artigosFiltros(filtro) {
    const catalogoItems = document.querySelectorAll('.catalogoItem');

    catalogoItems.forEach(item => {
        const keywords = item.dataset.keywords;
        const match = keywords.includes(filtro.toLowerCase());

        if (match) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function searchInArticles(searchTerm) {
    const catalogoItems = document.querySelectorAll('.catalogoItem');
    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();

    catalogoItems.forEach(item => {
        const keywords = item.dataset.keywords;
        const title = item.querySelector('.catalogoTitle').textContent.toLowerCase();

        const keywordsMatch = keywords.includes(lowerCaseSearchTerm);
        const titleMatch = title.includes(lowerCaseSearchTerm);

        if (keywordsMatch || titleMatch) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function limparFiltro() {
    const catalogoItems = document.querySelectorAll('.catalogoItem');
    catalogoItems.forEach(item => {
        item.style.display = 'block';
    });
}

function init() {
    fetchData('../Gersons/artigos.json')
        .then(data => {
            const artigos = data.artigo;
            createCards(artigos);

            const filtrosBtn = document.querySelectorAll('.filterBtn');
            filtrosBtn.forEach(button => {
                button.addEventListener('click', () => {
                    const filtro = button.getAttribute('data-filter');
                    artigosFiltros(filtro);
                });
            });

            const limparBtn = document.querySelector('.clearFilter');
            limparBtn.addEventListener('click', () => {
                limparFiltro();
            });

            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value;
                searchInArticles(searchTerm);
            });
        });
}

init();