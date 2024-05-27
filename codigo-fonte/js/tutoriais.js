// Carrega o JSON a partir do arquivo
fetch('../Gersons/tutoriais.json')
    .then(response => response.json())
    .then(data => {
        var tutoriais = data;

        // Acessa a página Inicial
        function voltarInicio() {
            window.location.href = 'pagInicial.html';
        }

        const botaoPagInicial = document.querySelector(".botaoDiv");
        botaoPagInicial.addEventListener("click", () => voltarInicio());

        // Cria elemento da lista
        function criarElementoLista(titulo, index) {
            const tutorialDiv = document.createElement("div");
            tutorialDiv.id = `tutorial${index}`;
            tutorialDiv.className = "listaBox";

            const tituloDiv = document.createElement("div");
            tituloDiv.id = `titulo${index}`;
            tituloDiv.className = "listaTitulo";

            const H4 = document.createElement("h4");
            H4.textContent = titulo;

            tituloDiv.appendChild(H4);

            const iconDiv = document.createElement("div");
            iconDiv.className = "listaIcon";

            const icon = document.createElement("i");
            icon.className = "bi bi-arrow-right-circle-fill";

            iconDiv.appendChild(icon);

            tutorialDiv.appendChild(tituloDiv);
            tutorialDiv.appendChild(iconDiv);

            return tutorialDiv;
        }

        // Mostra a lista
        const lista = document.querySelector(".lista");

        lista.innerHTML = '';

        for (let i = 0; i < tutoriais.tutorial.length; i++) {
            const tutorial = tutoriais.tutorial[i];
            const tutorialDiv = criarElementoLista(tutorial.titulo, i);
            lista.appendChild(tutorialDiv);
            tutorialDiv.addEventListener("click", () => mostrarConteudo(tutorial));
        }

        // Acessa a lista de tutoriais
        function mostrarLista() {
            window.location.href = 'pagTutoriais.html';
        }

        // Mostra o conteudo de cada elemento
        const secPrincipal = document.querySelector(".secPrincipal");
        const tituloPrincipal = document.querySelector(".tituloPrincipal")

        function mostrarConteudo(tutorial) {
            lista.innerHTML = '';
            botaoPagInicial.innerHTML = '';

            secPrincipal.innerHTML = '';
            tituloPrincipal.innerHTML = '';

            const titulo = tutorial.titulo;
            const video = tutorial.video;
            const etapas = tutorial.etapas;

            const H1 = document.createElement("h1");
            H1.textContent = titulo;

            tituloPrincipal.appendChild(H1)

            const videoDiv = document.createElement("div");
            videoDiv.className = "videoDiv";

            const frameVideo = document.createElement("iframe");
            frameVideo.src = video.replace("watch?v=", "embed/");
            frameVideo.id = "videoTutorial";
            frameVideo.alt = titulo;
            frameVideo.allowFullscreen = true;

            videoDiv.appendChild(frameVideo);
            secPrincipal.appendChild(tituloPrincipal)
            secPrincipal.appendChild(videoDiv);

            const etapasDiv = document.createElement("div");
            etapasDiv.className = "etapas";

            // Cria uma div para cada etapa do elemento
            etapas.forEach(etapa => {
                const etapaDiv = document.createElement("div");
                etapaDiv.id = `etapa${etapa.id}`
                etapaDiv.className = "etapa";

                const img = document.createElement("img");
                img.src = etapa.imagem;
                img.alt = etapa.titulo ? etapa.titulo : "Imagem da Etapa";

                const etapaTitulo = document.createElement("h3");
                etapaTitulo.textContent = etapa.titulo || '';

                etapaDiv.appendChild(img);
                etapaDiv.appendChild(etapaTitulo);

                etapasDiv.appendChild(etapaDiv);
                secPrincipal.appendChild(etapasDiv);

                etapaDiv.addEventListener("click", () => conteudoEtapa(etapa));
            });

            const botaoLista = document.createElement("div")
            botaoLista.className = "botaoLista";

            const botaoPagLista = document.createElement("button");
            botaoPagLista.id = "botaoPagLista";
            botaoPagLista.textContent = "Voltar";
            botaoPagLista.addEventListener("click", () => mostrarLista());

            const botaoConcluir = document.createElement("button");
            botaoConcluir.id = "botaoConcluir";
            botaoConcluir.textContent = "Concluir";

            botaoLista.appendChild(botaoPagLista);
            botaoLista.appendChild(botaoConcluir);
            secPrincipal.appendChild(botaoLista);
        }

        const cabecalho = document.querySelector(".cabecalho")

        function conteudoEtapa(etapa) {
            secPrincipal.innerHTML = '';
            cabecalho.style.flexDirection = 'row-reverse';

            const imgDiv = document.createElement("div");
            imgDiv.className = 'etapaImg';

            const etapaImg = document.createElement("img");
            etapaImg.src = etapa.imagem;
            etapaImg.alt = etapa.titulo ? etapa.titulo : "Imagem da Etapa";

            imgDiv.appendChild(etapaImg);
            cabecalho.appendChild(imgDiv);

            secPrincipal.appendChild(tituloPrincipal);

            const tituloSecundario = document.createElement("div");
            tituloSecundario.className = 'tituloSecundario';

            const H2 = document.createElement("h2");
            H2.textContent = etapa.titulo;

            tituloSecundario.appendChild(H2);

            const conteudoDiv = document.createElement("div");
            conteudoDiv.className = 'conteudoDiv';

            const descricao = document.createElement("p");
            descricao.id = `descricao${etapa.id}`;
            descricao.className = 'descricao';
            descricao.textContent = etapa.descricao;

            conteudoDiv.appendChild(descricao);

            secPrincipal.appendChild(tituloSecundario);
            secPrincipal.appendChild(conteudoDiv)
        }

    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));
