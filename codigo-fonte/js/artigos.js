fetch('../Gersons/artigos.json')
    .then(response => response.json())
    .then(data => {
        var artigos = data;

        function createMainArt(index) {
            const artTitleDiv = document.querySelector('.artTitle');

            const titulo =
                "<h1>" +
                    `${artigos.artigo[index].titulo}` +
                "</h1>";

            const artImgDiv = document.querySelector('.artImg');

            const artImg = document.createElement("img");
            artImg.src = `${artigos.artigo[index].secoes[0].imagem}`;
            artImg.alt = artigos.artigo[index].titulo ? artigos.artigo[index].titulo : 'Imagem Artigo';

            const artTxtDiv = document.querySelector('.artTxt');

            const artTxt =
                "<p>" +
                    `${artigos.artigo[index].secoes[0].texto}` +
                "</p>";

            artTitleDiv.innerHTML += titulo;
            artImgDiv.appendChild(artImg);
            artTxtDiv.innerHTML += artTxt;
        }

        createMainArt(0);

    });