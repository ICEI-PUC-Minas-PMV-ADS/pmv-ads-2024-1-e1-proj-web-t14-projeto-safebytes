fetch('../Gersons/tutoriais.json')
    .then(response => response.json())
    .then(data => {
        var tutoriais = data;

        function voltarInicio() {
            window.location.href = 'pagInicial.html';
        }

        function mostrarLista() {
            window.location.href = 'pagTutoriais.html';
        }

        function salvarProgresso(tutorialIndex, etapaIndex) {
            const estado = {
                tutorialIndex: tutorialIndex,
                etapaIndex: etapaIndex
            };
            localStorage.setItem('progressoTutorial', JSON.stringify(estado));
        }

        function salvarEstadoEtapas(tutorialIndex, etapaIndex) {
            const progresso = JSON.parse(localStorage.getItem('estadoEtapas')) || {};
            if (!progresso[tutorialIndex]) {
                progresso[tutorialIndex] = [];
            }
            progresso[tutorialIndex][etapaIndex] = true;
            localStorage.setItem('estadoEtapas', JSON.stringify(progresso));
        }

        function verificarEstadoEtapas(tutorialIndex, etapaIndex) {
            const progresso = JSON.parse(localStorage.getItem('estadoEtapas')) || {};
            return progresso[tutorialIndex] && progresso[tutorialIndex][etapaIndex];
        }

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

        const lista = document.querySelector(".lista");
        lista.innerHTML = '';

        for (let i = 0; i < tutoriais.tutorial.length; i++) {
            const tutorial = tutoriais.tutorial[i];
            const tutorialDiv = criarElementoLista(tutorial.titulo, i);
            lista.appendChild(tutorialDiv);
            tutorialDiv.addEventListener("click", () => mostrarConteudo(tutorial, 0));
        }

        const secPrincipal = document.querySelector(".secPrincipalTutoriais");
        const tituloPrincipal = document.querySelector(".tituloPrincipal");

        function mostrarConteudo(tutorial, etapaIndex) {
            lista.innerHTML = '';
            secPrincipal.innerHTML = '';
            tituloPrincipal.innerHTML = '';

            const titulo = tutorial.titulo;
            const video = tutorial.video;
            const etapas = tutorial.etapas;

            const H1 = document.createElement("h1");
            H1.textContent = titulo;

            tituloPrincipal.appendChild(H1);

            const videoDiv = document.createElement("div");
            videoDiv.className = "videoDiv";

            const frameVideo = document.createElement("iframe");
            frameVideo.src = video.replace("watch?v=", "embed/");
            frameVideo.id = "videoTutorial";
            frameVideo.alt = titulo;
            frameVideo.allowFullscreen = true;

            videoDiv.appendChild(frameVideo);
            secPrincipal.appendChild(tituloPrincipal);
            secPrincipal.appendChild(videoDiv);

            const etapasDiv = document.createElement("div");
            etapasDiv.className = "etapas";

            etapas.forEach((etapa, index) => {
                const etapaDiv = document.createElement("div");
                etapaDiv.id = `etapa${etapa.id}`;
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

                if (index === 0 || verificarEstadoEtapas(tutoriais.tutorial.indexOf(tutorial), index - 1)) {
                    etapaDiv.addEventListener("click", () => mostrarEtapa(tutorial, index));
                } else {
                    etapaDiv.style.opacity = '0.5';
                }
            });

            const botaoLista = document.createElement("div");
            botaoLista.className = "botaoLista";

            const botaoPagLista = document.createElement("button");
            botaoPagLista.id = "botaoPagLista";
            botaoPagLista.textContent = "Voltar";
            botaoPagLista.addEventListener("click", () => mostrarLista());

            const botaoConcluir = document.createElement("button");
            botaoConcluir.id = "botaoConcluir";
            botaoConcluir.textContent = "Concluir";
            botaoConcluir.addEventListener("click", () => {
                const tutorialIndex = tutoriais.tutorial.indexOf(tutorial);
                const todasEtapasCompletas = tutorial.etapas.every((etapa, index) => verificarEstadoEtapas(tutorialIndex, index));
                if (todasEtapasCompletas) {
                    localStorage.removeItem('progressoTutorial');
                    localStorage.removeItem('estadoEtapas');
                    window.location.href = 'pagInicial.html';
                } else {
                    alert("Ainda há etapas não concluídas!");
                }
            });        

            botaoLista.appendChild(botaoPagLista);
            botaoLista.appendChild(botaoConcluir);
            secPrincipal.appendChild(botaoLista);

            salvarProgresso(tutoriais.tutorial.indexOf(tutorial), etapaIndex);
        }

        function mostrarEtapa(tutorial, etapaIndex) {
            secPrincipal.innerHTML = '';

            const etapa = tutorial.etapas[etapaIndex];

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
            secPrincipal.appendChild(conteudoDiv);

            const botaoProximoDiv = document.createElement("div");
            botaoProximoDiv.className = 'botaoProximoDiv';

            const botaoSair = document.createElement("button");
            botaoSair.id = "botaoSair";
            botaoSair.textContent = 'Sair';
            botaoSair.addEventListener("click", () => mostrarConteudo(tutorial, 0));

            if (etapaIndex < tutorial.etapas.length - 1) {
                botaoProximoDiv.appendChild(botaoSair);
            }

            const botaoProximo = document.createElement("button");
            botaoProximo.id = "botaoProximo";
            botaoProximo.textContent = etapaIndex < tutorial.etapas.length - 1 ? "Avançar" : "Concluir";
            botaoProximo.addEventListener("click", () => {
                if (etapaIndex < tutorial.etapas.length - 1) {
                    salvarEstadoEtapas(tutoriais.tutorial.indexOf(tutorial), etapaIndex);
                    mostrarEtapa(tutorial, etapaIndex + 1);
                } else {
                    localStorage.removeItem('progressoTutorial');
                    localStorage.removeItem('estadoEtapas');
                    voltarInicio();
                }
            });

            botaoProximoDiv.appendChild(botaoProximo);
            secPrincipal.appendChild(botaoProximoDiv);

            salvarProgresso(tutoriais.tutorial.indexOf(tutorial), etapaIndex);
        }

        const urlParams = new URLSearchParams(window.location.search);
        const tutorialIndex = urlParams.get('tutorial');
        const etapaIndex = urlParams.get('etapaIndex');

        if (tutorialIndex !== null && etapaIndex !== null) {
            mostrarConteudo(tutoriais.tutorial[tutorialIndex], parseInt(etapaIndex));
        }
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));
