// TUTORIAIS


// JSON
var json = '{"tutorial": [{"id": 0,  "titulo": "Proteção contra Malwere", "video": null, "etapas": [{"id": 1, "titulo": null, "descricao": null}, {"id": 2, "titulo": null, "descricao": null}, {"id": 3, "titulo": null, "descricao": null}]}, {"id": 1,  "titulo": "Autenticação de Dois Fatores", "video": null, "etapas": [{"id": 1, "titulo": null, "descricao": null}, {"id": 2, "titulo": null, "descricao": null}, {"id": 3, "titulo": null, "descricao": null}]}, {"id": 2,  "titulo": "Backup de Dados", "video": null, "etapas": [{"id": 1, "titulo": null, "descricao": null}, {"id": 2, "titulo": null, "descricao": null}, {"id": 3, "titulo": null, "descricao": null}]}, {"id": 3,  "titulo": "Autualização de Software", "video": null, "etapas": [{"id": 1, "titulo": null, "descricao": null}, {"id": 2, "titulo": null, "descricao": null}, {"id": 3, "titulo": null, "descricao": null}]}]}';

// Conversão do JSON para objeto
var tutoriais = JSON.parse(json);

// Seleciona a div .lista
const lista = document.querySelector(".lista");

// Cria uma estrutura HTML para cada elemento da array tutoriais
for (let i = 0; i < tutoriais.tutorial.length; i++) {

    // Resgata um elemento da array tutorial
    const tutorial = tutoriais.tutorial[i];

    //Cria uma div com id e classe
    const tutorialDiv = document.createElement("div");
    tutorialDiv.id = `tutorial${i}`;
    tutorialDiv.className = "listaBox";

    //Cria uma div com id e classe
    const tituloDiv = document.createElement("div");
    tituloDiv.id = `titulo${i}`;
    tituloDiv.className = "listaTitulo";

    //Cria um h4 que recebe o titulo do tutorial
    const H4 = document.createElement("h4");
    H4.textContent = tutorial.titulo;

    // Insere o h4 dentro da div titulo
    tituloDiv.appendChild(H4);

    //Cria uma div com classe
    const iconDiv = document.createElement("div");
    iconDiv.className = "listaIcon";

    // Cria uma tag i com classe
    const icon = document.createElement("i");
    icon.className = "bi bi-arrow-right-circle-fill";

    // Insere a tag i na div icon
    iconDiv.appendChild(icon);

    // Insere a div titulo e div icon na div tutorial
    tutorialDiv.appendChild(tituloDiv);
    tutorialDiv.appendChild(iconDiv);

    // Insere a div tutorial na div lista
    lista.appendChild(tutorialDiv);
}




