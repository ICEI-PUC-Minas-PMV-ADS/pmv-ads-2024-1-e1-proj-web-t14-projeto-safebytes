// JSON
var json = '{"tutorial": [{"id": 0,  "titulo": "Proteção contra Malware", "video": "https://www.youtube.com/watch?v=O1Iu_4mMTs8", "etapas": [{"id": 1, "imagem": "../assets/etapa1.png", "titulo": "Etapa 1", "descricao": null}, {"id": 2, "imagem": "../assets/etapa2.png", "titulo": "Etapa 2", "descricao": null}, {"id": 3, "imagem": "../assets/etapa3.png", "titulo": "Etapa 3", "descricao": null}]}, {"id": 1,  "titulo": "Autenticação de Dois Fatores", "video": "https://www.youtube.com/watch?v=eTwMEgSFvVg", "etapas": [{"id": 1, "imagem": "../assets/etapa1.png", "titulo": "Etapa 1", "descricao": null}, {"id": 2, "imagem": "../assets/etapa2.png", "titulo": "Etapa 2", "descricao": null}, {"id": 3, "imagem": "../assets/etapa3.png", "titulo": "Etapa 3", "descricao": null}]}, {"id": 2,  "titulo": "Backup de Dados", "video": "https://www.youtube.com/watch?v=OK2u0WEKJCg", "etapas": [{"id": 1, "imagem": "../assets/etapa1.png", "titulo": "Etapa 1", "descricao": null}, {"id": 2, "imagem": "../assets/etapa2.png", "titulo": "Etapa 2", "descricao": null}, {"id": 3, "imagem": "../assets/etapa3.png", "titulo": "Etapa 3", "descricao": null}]}, {"id": 3,  "titulo": "Atualização de Software", "video": "https://www.youtube.com/watch?v=KIOW1eLItfY", "etapas": [{"id": 1, "imagem": "../assets/etapa1.png", "titulo": "Etapa 1", "descricao": null}, {"id": 2, "imagem": "../assets/etapa2.png", "titulo": "Etapa 2", "descricao": null}, {"id": 3, "imagem": "../assets/etapa3.png", "titulo": "Etapa 3", "descricao": null}]}]}';

// Conversão do JSON para objeto
var tutoriais = JSON.parse(json);


function voltarInicio() {
    window.location.href  = 'pagInicial.html';
}

const botaoPagInicial = document.querySelector(".botaoDiv");
botaoPagInicial.addEventListener("click", () => voltarInicio());


// Função para criar os elementos da lista de tutoriais
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


// Seleciona a div .lista
const lista = document.querySelector(".lista");
console.log(lista)

// Cria uma estrutura HTML para cada elemento da array tutoriais
for (let i = 0; i < tutoriais.tutorial.length; i++) {
    const tutorial = tutoriais.tutorial[i];
    const tutorialDiv = criarElementoLista(tutorial.titulo, i);
    lista.appendChild(tutorialDiv);
    tutorialDiv.addEventListener("click", () => mostrarConteudo(tutorial));
}


const secPrincipal = document.querySelector(".secPrincipal");
const tituloPrincipal = document.querySelector(".tituloPrincipal")

function mostrarConteudo(tutorial) {
    lista.innerHTML = '';

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

    // Video embedding via iframe
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
    });

    const botaoLista = document.createElement("div")
    botaoLista.className = "botaoLista";

    const botaoPagLista = document.createElement("button");
    botaoPagLista.id = "botaoPagLista";
    botaoPagLista.textContent = "Voltar";
    botaoPagLista.addEventListener("click", () => voltarLista());

    const botaoConcluir = document.createElement("button");
    botaoConcluir.id = "botaoConcluir";
    botaoConcluir.textContent = "Concluir";


    botaoLista.appendChild(botaoPagLista);
    botaoLista.appendChild(botaoConcluir);
    secPrincipal.appendChild(botaoLista);
}





