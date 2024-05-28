var json = '{"quiz":[{"id":0,"titulo":"É ou não é Crime Virtual?","perguntas":[{"id":1,"pergunta":null,"respostas":[{"id":1,"resposta":null,"valor":true},{"id":2,"resposta":null,"valor":false}]},{"id":2,"pergunta":null,"respostas":[{"id":1,"resposta":null,"valor":false},{"id":2,"resposta":null,"valor":true}]},{"id":3,"pergunta":null,"respostas":[{"id":1,"resposta":null,"valor":false},{"id":2,"resposta":null,"valor":true}]},{"id":4,"pergunta":null,"respostas":[{"id":1,"resposta":null,"valor":true},{"id":2,"resposta":null,"valor":false}]}]},{"id":1,"titulo":"Quiz Segurança na Rede de Wifi Pública","perguntas":[{"id":1,"pergunta":null,"respostas":[{"id":1,"resposta":null,"valor":false},{"id":2,"resposta":null,"valor":true}]},{"id":2,"pergunta":null,"respostas":[{"id":1,"resposta":null,"valor":true},{"id":2,"resposta":null,"valor":false}]},{"id":3,"pergunta":null,"respostas":[{"id":1,"resposta":null,"valor":false},{"id":2,"resposta":null,"valor":true}]},{"id":4,"pergunta":null,"respostas":[{"id":1,"resposta":null,"valor":false},{"id":2,"resposta":null,"valor":true}]}]},{"id":2,"titulo":"Quiz Anti-Phishing","perguntas":[{"id":1,"pergunta":null,"respostas":[{"id":1,"resposta":null,"valor":true},{"id":2,"resposta":null,"valor":false}]},{"id":2,"pergunta":null,"respostas":[{"id":1,"resposta":null,"valor":true},{"id":2,"resposta":null,"valor":false}]},{"id":3,"pergunta":null,"respostas":[{"id":1,"resposta":null,"valor":false},{"id":2,"resposta":null,"valor":true}]},{"id":4,"pergunta":null,"respostas":[{"id":1,"resposta":null,"valor":true},{"id":2,"resposta":null,"valor":false}]}]},{"id":3,"titulo":"Desafio Antivírus","perguntas":[{"id":1,"pergunta":null,"respostas":[{"id":1,"resposta":null,"valor":false},{"id":2,"resposta":null,"valor":true}]},{"id":2,"pergunta":null,"respostas":[{"id":1,"resposta":null,"valor":true},{"id":2,"resposta":null,"valor":false}]},{"id":3,"pergunta":null,"respostas":[{"id":1,"resposta":null,"valor":false},{"id":2,"resposta":null,"valor":true}]},{"id":4,"pergunta":null,"respostas":[{"id":1,"resposta":null,"valor":true},{"id":2,"resposta":null,"valor":false}]}]}]}';

const quizzes = JSON.parse(json);

const lista = document.querySelector(".lista");

for (let i = 0; i < quizzes.quiz.length; i++) {
    const quiz = quizzes.quiz[i];

    const quizDiv = document.createElement("div");
    quizDiv.id = `quiz${i}`;
    quizDiv.className = "listaBox";

    const tituloDiv = document.createElement("div");
    tituloDiv.id = `titulo${i}`;
    tituloDiv.className = "listaTitulo";

    const H4 = document.createElement("h4");
    H4.textContent = quiz.titulo;

    tituloDiv.appendChild(H4);

    const iconDiv = document.createElement("div");
    iconDiv.className = "listaIcon";

    const icon = document.createElement("i");
    icon.className = "bi bi-arrow-right-circle-fill";

    iconDiv.appendChild(icon);

    quizDiv.appendChild(tituloDiv);
    quizDiv.appendChild(iconDiv);

    quizDiv.addEventListener("click", () => {
        window.location.href = `quizzes/quiz${quiz.id}.html`;
    });

    lista.appendChild(quizDiv);
}
