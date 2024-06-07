function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.error('Erro ao carregar o JSON:', error);
            throw error;
        });
}

function createMainArt(artigo, artigoIndex) {
    const artTitleDiv = document.querySelector('.artTitle');
    const artImgDiv = document.querySelector('.artImg');
    const artTxtDiv = document.querySelector('.artTxt');

    const artTitle = `<h1>${artigo[artigoIndex].titulo}</h1>`;
    const artImg = document.createElement("img");
    artImg.src = artigo[artigoIndex].secoes[0].imagem;
    artImg.alt = artigo[artigoIndex].titulo || 'Imagem Artigo';
    const artTxt = `<p>${artigo[artigoIndex].secoes[0].texto}</p>`;

    artTitleDiv.innerHTML = artTitle; // Use "=" em vez de "+=" para evitar a duplicação do conteúdo
    artImgDiv.innerHTML = ''; // Limpe o conteúdo antes de adicionar a nova imagem
    artImgDiv.appendChild(artImg);
    artTxtDiv.innerHTML = artTxt; // Use "=" em vez de "+=" para evitar a duplicação do conteúdo
}

function createSection01(artigo, artigoIndex) {
    const topicoTitleDiv = document.querySelector('.topicoTitle');
    const topicoTxtDivs = [
        document.querySelector('#topico01'),
        document.querySelector('#topico02'),
        document.querySelector('#topico03')
    ];

    const topicoTitle = `<h2>${artigo[artigoIndex].secoes[1].titulo}</h2>`;
    topicoTitleDiv.innerHTML = topicoTitle; 

    artigo[artigoIndex].secoes[1].topicos.forEach((topico, i) => {
        if (topicoTxtDivs[i]) {
            const topicoTxt = `<h5>${topico.topico}</h5>`;
            topicoTxtDivs[i].innerHTML = topicoTxt; 
        }
    });

    const topicoImgDiv = document.querySelector('.topicoImg')

    const topicoImg =  document.createElement("img");
    topicoImg.src = artigo[artigoIndex].secoes[1].imagem;
    topicoImg.alt = artigo[artigoIndex].titulo || 'Imagem Artigo';

    topicoImgDiv.appendChild(topicoImg); 
}

function createSection02(artigo, artigoIndex) {
    const dicasTitleDiv = document.querySelector('.dicasTitle');
    const dicasIframeDivs = [
        document.querySelector('#dicasIframe01'),
        document.querySelector('#dicasIframe02')
    ];
    const dicasTxtDivs = [
        document.querySelector('#dicasTxt01'),
        document.querySelector('#dicasTxt02')
    ];

    const dicasTitle = `<h2>${artigo[artigoIndex].secoes[2].titulo}</h2>`;

    dicasTitleDiv.innerHTML = dicasTitle;

    artigo[artigoIndex].secoes[2].indicacoes.forEach((indicacao, i) => {
        if (dicasIframeDivs[i]) {
            const dicaIframe = document.createElement("iframe");
            dicaIframe.src = indicacao.video.replace("watch?v=", "embed/");
            dicaIframe.id = `Iframe0${i + 1}`;
            dicaIframe.alt = artigo[artigoIndex].titulo;
            dicaIframe.allowFullscreen = true;

            dicasIframeDivs[i].innerHTML = ''; // Limpe o conteúdo antes de adicionar o novo iframe
            dicasIframeDivs[i].appendChild(dicaIframe);

            const dicasTxt = `<h6>${indicacao.texto}</h6>`;
            dicasTxtDivs[i].innerHTML = dicasTxt; // Use "=" em vez de "+=" para evitar a duplicação do conteúdo
        }
    });
}

function mostrarConteudo(artigo, artigoIndex) {
    createMainArt(artigo, artigoIndex);
    createSection01(artigo, artigoIndex);
    createSection02(artigo, artigoIndex);
}

function init() {
    fetchData('../Gersons/artigos.json')
        .then(data => {
            let artigo = data.artigo;

            const urlParams = new URLSearchParams(window.location.search);
            const artigoIndex = urlParams.get('artigoIndex');

            if (artigoIndex !== null && !isNaN(artigoIndex) && artigoIndex >= 0 && artigoIndex < artigo.length) {
                mostrarConteudo(artigo, parseInt(artigoIndex));
            } else {
                console.error('Índice de artigo inválido:', artigoIndex);
            }
        })
        .catch(error => {
            console.error('Erro ao carregar dados do JSON:', error);
        });
}

init();

const artButton = document.querySelector('#artButton');
artButton.addEventListener('click', () => {
    window.location.href = "index.html";
})
