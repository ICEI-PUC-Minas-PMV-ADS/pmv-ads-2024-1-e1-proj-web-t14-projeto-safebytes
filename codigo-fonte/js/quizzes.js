fetch('../Gersons/quizzes.json')
    .then(response => response.json())
    .then(data => {
        const quizzes = data;

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
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));

