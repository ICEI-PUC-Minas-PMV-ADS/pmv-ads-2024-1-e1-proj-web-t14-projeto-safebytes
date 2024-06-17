async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao carregar o JSON:', error);
        throw error;
    }
}

async function quantidadeDeArtigos() {
    try {
        const data = await fetchData('../Gersons/artigos.json');
        const artigo = data.artigo;
        return artigo.length;
    } catch (error) {
        console.error('Erro ao carregar o JSON:', error);
        throw error;
    }
}

async function quantidadeDeTutoriais() {
    try {
        const data = await fetchData('../Gersons/tutoriais.json');
        const tutorial = data.tutorial;
        return tutorial.length;

    } catch (error) {
        console.error('Erro ao carregar o JSON:', error);
        throw error;
    }
}

async function quantidadeDeQuizzes() {
    try {
        const data = await fetchData('../Gersons/quizzes.json');
        const quiz = data.quiz;
        return quiz.length;

    } catch (error) {
        console.error('Erro ao carregar o JSON:', error);
        throw error;
    }
}

async function total() {
    try {
        const artigosLength = await quantidadeDeArtigos();
        const tutoriaisLength = await quantidadeDeTutoriais();
        const quizzesLength = await quantidadeDeQuizzes();

        const total = artigosLength + tutoriaisLength + quizzesLength;
        return total;

    } catch (error) {
        console.error('Erro ao carregar o JSON:', error);
        throw error;
    }
}

async function artigosConcluídos() {
    try {
        const data = localStorage.getItem('artigosConcluidos');

        if (!data) {
            throw new Error('Não há Artigos concluídos! Inicie já sua joranda de conhecimento! ;)');
        }

        artigos = JSON.parse(data);
        return artigos.length;

    } catch (error) {
        console.error('Erro ao obter dados de artigos do localStorage:', error);
        throw error;
    }
}

async function tutoriaisConcluidos() {
    try {
        const data = localStorage.getItem('tutoriaisConcluidos');

        if (!data) {
            throw new Error('Não há Tutoriais concluídos! Inicie já sua joranda de conhecimento! ;)');
        }

        tutoriais = JSON.parse(data);
        return tutoriais.length;

    } catch (error) {
        console.error('Erro ao obter dados de artigos do localStorage:', error);
        throw error;
    }
}

async function quizzesConcluidos() {
    try {
        const data = localStorage.getItem('quizzesConcluidos');

        if (!data) {
            throw new Error('Não há Quizzes concluídos! Inicie já sua joranda de conhecimento! ;)')
        }

        const quizzes = JSON.parse(data);
        return quizzes.length;

    } catch (error) {
        console.error('Erro ao obter dados de artigos do localStorage:', error);
        throw error;
    }
}

async function totalConcluidos() {
    try {
        const artigosConcluidosLength = await artigosConcluídos();
        const tutoriaisConcluidosLenght = await tutoriaisConcluidos();
        const quizzesConcluidosLength = await quizzesConcluidos();

        const total = artigosConcluidosLength + tutoriaisConcluidosLenght + quizzesConcluidosLength;
        return total;

    } catch (error) {
        console.error('Erro ao obter dados de artigos do localStorage:', error);
        throw error;
    }
}

function atualizacaoConstante() {
    window.addEventListener('storage', async (event) => {
        if (event.key === 'artigosConcluidos' || event.key === 'tutoriaisConcluidos' || event.key === 'quizzesConcluidos') {
            try {
                await atualizarBarraProgresso();
                await createArtCards();
                await createTutorialItem();
                await createQuizItem();
            } catch (error) {
                console.error('Erro ao atualizar a barra de progresso após mudança no localStorage:', error);
            }
        }
    });
}

async function atualizarBarraProgresso() {
    try {
        const totalProgresso = await total();
        const totalConcluidosProgresso = await totalConcluidos();

        const percentual = (totalConcluidosProgresso / totalProgresso) * 100;

        const circle1 = document.querySelector('#circle circle:nth-child(1)');
        const circle2 = document.querySelector('#circle circle:nth-child(2)');

        const circunferencia = 2 * Math.PI * 70;

        circle1.style.strokeDasharray = `${circunferencia}`;
        circle1.style.strokeDashoffset = `${circunferencia * (1 - percentual / 100)}`;

        circle2.style.strokeDasharray = `${circunferencia}`;
        circle2.style.strokeDashoffset = `${circunferencia * (1 - percentual / 100)}`;

        const progressNumber = document.querySelector('.progressNumber h3');
        progressNumber.textContent = `${Math.round(percentual)}%`;

    } catch (error) {
        console.error('Erro ao atualizar a barra de progresso:', error);
    }
}

async function carregarArtJson() {
    try {
        const data = await fetchData('../Gersons/artigos.json');
        artigo = data.artigo;
        return artigo;

    } catch (error) {
        console.error('Erro ao carregar os dados dos artigos:', error);
        throw error;
    }
}

async function createArtDiv() {
    try {
        const catalogoMain = document.querySelector('.catalogoMain');

        const catalogoWrapper = document.createElement('div');
        catalogoWrapper.className = 'catalogoWrapper';

        const catalogoListDiv = document.createElement('div');
        catalogoListDiv.className = 'catalogoList';

        catalogoWrapper.appendChild(catalogoListDiv);
        catalogoMain.appendChild(catalogoWrapper);

        const catalogoList = document.querySelector('.catalogoList');
        return catalogoList;

    } catch (error) {
        console.error('Erro ao criar div:', error);
        throw error;
    }
}

async function createArtCards() {
    try {
        const data = localStorage.getItem('artigosConcluidos');

        if (!data) {
            throw new Error('Não há Artigos Concluídos!')
        }

        const ids = JSON.parse(data);

        const catalogoMain = document.querySelector('.catalogoMain');
        catalogoMain.innerHTML = '';

        const artigos = await carregarArtJson();

        const catalogoList = await createArtDiv();


        ids.forEach((id) => {
            const artigo = artigos.find(a => a.id === id);

            if (artigo) {
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
            }
        });
    } catch (error) {
        console.error('Erro ao gerar cards de artigos concluídos:', error);
    }
}

async function carregarTutorialJson() {
    try {
        const data = await fetchData('../Gersons/tutoriais.json');
        tutorial = data.tutorial;
        return tutorial;

    } catch (error) {
        console.error('Erro ao carregar os dados dos tutoriais:', error);
        throw error;
    }
}

async function createListaDiv() {
    try {
        const wrapperDiv = document.querySelector('.historicoTutorialWrapper');

        const tutorialListDiv = document.createElement('div');
        tutorialListDiv.className = 'historicoTutorialList';

        wrapperDiv.appendChild(tutorialListDiv);

        const tutorialList = document.querySelector('.historicoTutorialList');
        return tutorialList;

    } catch (error) {
        console.error('Erro ao criar div:', error);
        throw error;
    }

}

async function createTutorialItem() {
    try {
        const data = localStorage.getItem('tutoriaisConcluidos');

        if (!data) {
            throw new Error('Não há Tutoriais Concluídos');
        }

        const ids = JSON.parse(data);

        const wrapperDiv = document.querySelector('.historicoTutorialWrapper');
        wrapperDiv.innerHTML = '';

        const tutoriais = await carregarTutorialJson();

        const tutorialList = await createListaDiv();

        ids.forEach((id) => {
            const tutorial = tutoriais.find(t => t.id === id);

            if (tutorial) {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'historicoTutorialItem';

                const imgDiv = document.createElement('div');
                imgDiv.className = 'historicoTutorialImg';

                const img = document.createElement('img');
                img.src = tutorial.imagem;
                img.alt = tutorial.titulo;

                imgDiv.appendChild(img);

                const textDiv = document.createElement('div');
                textDiv.className = 'historicoTutorialText';

                const H5 = document.createElement('h5');
                H5.textContent = tutorial.titulo;

                textDiv.appendChild(H5);

                itemDiv.appendChild(imgDiv);
                itemDiv.appendChild(textDiv);

                tutorialList.appendChild(itemDiv);
            }
        });
    } catch (error) {
        console.error('Erro ao gerar lista de tutoriais concluídos:', error);
    }
}

async function carregarQuizzesJson() {
    try {
        const data = await fetchData('../Gersons/quizzes.json');
        quiz = data.quiz;
        return quiz;

    } catch (error) {
        console.error('Erro ao carregar os dados dos quizzes:', error);
        throw error;
    }
}

async function createSecondListDiv() {
    try {
        const wrapperDiv = document.querySelector('.historicoQuizzesWrapper');

        const quizzesListDiv = document.createElement('div');
        quizzesListDiv.className = 'historicoQuizzesList';

        wrapperDiv.appendChild(quizzesListDiv);

        const quizzesList = document.querySelector('.historicoQuizzesList');
        return quizzesList;

    } catch (error) {
        console.error('Erro ao criar div:', error);
        throw error;
    }
}

async function createQuizItem() {
    try {
        const data = localStorage.getItem('quizzesConcluidos');

        if (!data) {
            throw new Error('Não há  Quizzes Concluídos');
        }

        const ids = JSON.parse(data);

        const wrapperDiv = document.querySelector('.historicoQuizzesWrapper');
        wrapperDiv.innerHTML = '';

        const quizzes = await carregarQuizzesJson();

        const quizzesList = await createSecondListDiv();

        ids.forEach((id) => {
            const quiz = quizzes.find(q => q.id === id);

            if (quiz) {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'historicoQuizzesItem';

                const imgDiv = document.createElement('div');
                imgDiv.className = 'historicoQuizzesImg';

                const img = document.createElement('img');
                img.src = quiz.imagem;
                img.alt = quiz.titulo;

                imgDiv.appendChild(img);

                const textDiv = document.createElement('div');
                textDiv.className = 'historicoQuizzesText';

                const H5 = document.createElement('h5');
                H5.textContent = quiz.titulo;

                textDiv.appendChild(H5);

                itemDiv.appendChild(imgDiv);
                itemDiv.appendChild(textDiv);

                quizzesList.appendChild(itemDiv);
            }
        });
    } catch (error) {
        console.error('Erro ao gerar lista de quizzes concluídos:', error);
    }
}

atualizacaoConstante();

document.addEventListener('DOMContentLoaded', async () => {
    try {
        console.log('Total:', await total());
        console.log('Artigos Concluídos', await artigosConcluídos());
        console.log('Tutoriais Concluídos', await tutoriaisConcluidos());
        console.log('Quizzes Concluídos', await quizzesConcluidos());
        console.log('Total Concluído', await totalConcluidos());

        await atualizarBarraProgresso();
        await createArtCards();
        await createTutorialItem();
        await createQuizItem();
    } catch (error) {
        console.error('Erro ao executar o código principal:', error);
    }
});

