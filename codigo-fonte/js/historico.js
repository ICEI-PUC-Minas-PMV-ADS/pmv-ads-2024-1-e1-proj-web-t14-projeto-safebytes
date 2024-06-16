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

atualizacaoConstante();

document.addEventListener('DOMContentLoaded', async () => {
    try {
        console.log('Total:', await total());
        console.log('Artigos Concluídos', await artigosConcluídos());
        console.log('Tutoriais Concluídos', await tutoriaisConcluidos());
        console.log('Quizzes Concluídos', await quizzesConcluidos());
        console.log('Total Concluído', await totalConcluidos());
        await atualizarBarraProgresso();
    } catch (error) {
        console.error('Erro ao executar o código principal:', error);
    }
});

