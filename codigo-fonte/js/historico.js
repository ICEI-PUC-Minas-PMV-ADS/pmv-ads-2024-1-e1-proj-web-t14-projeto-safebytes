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

async function carregarArtJson() {
    try {
        const data = await fetchData('../Gersons/artigos.json');
        const artigo = data.artigo;
        return artigo;
    } catch (error) {
        console.error('Erro ao carregar os dados dos artigos:', error);
        throw error;
    }
}

async function carregarTutorialJson() {
    try {
        const data = await fetchData('../Gersons/tutoriais.json');
        const tutorial = data.tutorial;
        return tutorial;
    } catch (error) {
        console.error('Erro ao carregar os dados dos tutoriais:', error);
        throw error;
    }
}

async function carregarQuizJson() {
    try {
        const data = await fetchData('../Gersons/quizzes.json');
        const quiz = data.quiz;
        return quiz;
    } catch (error) {
        console.error('Erro ao carregar os dados dos quizzes:', error);
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

async function artigosConcluidos() {
    try {
        const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
        const users = localStorage.getItem('users');

        if (!users || !loggedInUserEmail) {
            throw new Error('Usuários não encontrados no LocalStorage ou usuário não logado');
        }

        const usersObj = JSON.parse(users);
        const user = usersObj.find(u => u.email === loggedInUserEmail);

        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        return user.artigosConcluidos ? Array.from(new Set(user.artigosConcluidos)) : [];
    } catch (error) {
        console.error('Erro ao obter dados de artigos do localStorage:', error);
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

async function tutoriaisConcluidos() {
    try {
        const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
        const users = localStorage.getItem('users');

        if (!users || !loggedInUserEmail) {
            throw new Error('Usuários não encontrados no LocalStorage ou usuário não logado');
        }

        const usersObj = JSON.parse(users);
        const user = usersObj.find(u => u.email === loggedInUserEmail);

        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        return user.tutoriaisConcluidos ? Array.from(new Set(user.tutoriaisConcluidos)) : [];
    } catch (error) {
        console.error('Erro ao obter dados de tutoriais do localStorage:', error);
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

async function quizzesConcluidos() {
    try {
        const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
        const users = localStorage.getItem('users');

        if (!users || !loggedInUserEmail) {
            throw new Error('Usuários não encontrados no LocalStorage ou usuário não logado');
        }

        const usersObj = JSON.parse(users);
        const user = usersObj.find(u => u.email === loggedInUserEmail);

        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        return user.quizzesConcluidos ? Array.from(new Set(user.quizzesConcluidos)) : [];
    } catch (error) {
        console.error('Erro ao obter dados de quizzes do localStorage:', error);
        throw error;
    }
}


async function total() {
    try {
        const qtdArtigos = await quantidadeDeArtigos(); // Renomeada para evitar conflito
        const qtdTutoriais = await quantidadeDeTutoriais(); // Renomeada para evitar conflito
        const qtdQuizzes = await quantidadeDeQuizzes(); // Renomeada para evitar conflito

        const total = qtdArtigos + qtdTutoriais + qtdQuizzes;

        return total;
    } catch (error) {
        console.error('Erro ao obter dados de itens concluídos do localStorage:', error);
        throw error;
    }
}

async function totalConcluidos() {
    try {
        const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
        const users = localStorage.getItem('users');

        if (!users || !loggedInUserEmail) {
            throw new Error('Usuários não encontrados no LocalStorage ou usuário não logado');
        }

        const usersObj = JSON.parse(users);
        const user = usersObj.find(u => u.email === loggedInUserEmail);

        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        const artigosConcluidos = user.artigosConcluidos ? user.artigosConcluidos.length : 0;
        const tutoriaisConcluidos = user.tutoriaisConcluidos ? user.tutoriaisConcluidos.length : 0;
        const quizzesConcluidos = user.quizzesConcluidos ? user.quizzesConcluidos.length : 0;

        const totalConcluidos = artigosConcluidos + tutoriaisConcluidos + quizzesConcluidos;

        return totalConcluidos;
    } catch (error) {
        console.error('Erro ao obter dados de itens concluídos do localStorage:', error);
        throw error;
    }
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

function atualizacaoConstante() {
    window.addEventListener('storage', async (event) => {
        if (event.key === 'users') {
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
        const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
        const users = localStorage.getItem('users');

        if (!users || !loggedInUserEmail) {
            throw new Error('Usuários não encontrados no LocalStorage ou usuário não logado');
        }

        const usersObj = JSON.parse(users);
        const user = usersObj.find(u => u.email === loggedInUserEmail);

        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        const ids = Array.from(new Set(user.artigosConcluidos || []));

        const catalogoMain = document.querySelector('.catalogoMain');
        catalogoMain.innerHTML = '';

        const artigos = await carregarArtJson();

        const catalogoList = await createArtDiv();

        ids.forEach((id) => {
            const artigo = artigos.find(a => a.id === id);

            if (artigo) {
                const catalogoItem = document.createElement('div');
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

                const catalogoTitle = document.createElement('h6');
                catalogoTitle.innerHTML = artigo.titulo;

                catalogoTitleDiv.appendChild(catalogoTitle);

                catalogoItem.appendChild(catalogoImgDiv);
                catalogoItem.appendChild(catalogoTitleDiv);

                catalogoItem.addEventListener('click', () => {
                    window.location.href = `pagArtigos.html?artigoIndex=${id}`;
                });

                catalogoList.appendChild(catalogoItem);
            }
        });
    } catch (error) {
        console.error('Erro ao gerar cards de artigos concluídos:', error);
    }
}

async function createTutorialDiv() {
    try {
        const historicoWrapper = document.querySelector('.historicoTutorialWrapper');

        const historicoListDiv = document.createElement('div');
        historicoListDiv.className = 'historicoTutorialList';

        historicoWrapper.appendChild(historicoListDiv);

        const historicoList = document.querySelector('.historicoTutorialList');
        return historicoList;
    } catch (error) {
        console.error('Erro ao criar div:', error);
        throw error;
    }
}

async function createTutorialItem() {
    try {
        const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
        const users = JSON.parse(localStorage.getItem('users'));

        const user = users.find(user => user.email === loggedInUserEmail);

        if (!user) {
            throw new Error('Usuário não encontrado no LocalStorage');
        }

        const ids = user.tutoriaisConcluidos || [];

        const wrapperDiv = document.querySelector('.historicoTutorialWrapper');
        wrapperDiv.innerHTML = '';

        const tutoriais = await carregarTutorialJson();

        const tutorialList = await createTutorialDiv();

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

async function createQuizDiv() {
    try {
        const historicoWrapper = document.querySelector('.historicoQuizzesWrapper');

        const historicoListDiv = document.createElement('div');
        historicoListDiv.className = 'historicoQuizzesList';

        historicoWrapper.appendChild(historicoListDiv);

        const historicoList = document.querySelector('.historicoQuizzesList');
        return historicoList;
    } catch (error) {
        console.error('Erro ao criar div:', error);
        throw error;
    }
}

async function createQuizItem() {
    try {
        const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
        const users = JSON.parse(localStorage.getItem('users'));

        const user = users.find(user => user.email === loggedInUserEmail);

        if (!user) {
            throw new Error('Usuário não encontrado no LocalStorage');
        }

        const ids = user.quizzesConcluidos || [];

        const wrapperDiv = document.querySelector('.historicoQuizzesWrapper');
        wrapperDiv.innerHTML = '';

        const quizzes = await carregarQuizJson();

        const quizzesList = await createQuizDiv();

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

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
        if (!loggedInUserEmail) {
            throw new Error('Nenhum usuário logado!');
        }

        if (totalConcluidos <= 0) {


        }
        await atualizarBarraProgresso();
        await createArtCards();
        await createTutorialItem();
        await createQuizItem();

        const totalConcluidosProgresso = await totalConcluidos();

        if (totalConcluidosProgresso > 0) {

            const progressNullSec = document.querySelector('#historicoProgressNull');
            progressNullSec.style.display = 'none';

            const artigosSec = document.querySelector('#historicoArtigosSec');
            artigosSec.style.display = 'block';

            const tutoriaisSec = document.querySelector('#historicoTutoriaisSec');
            tutoriaisSec.style.display = 'block';

            const quizzesSec = document.querySelector('#historicoQuizzesSec');
            quizzesSec.style.display = 'block';
        }

    } catch (error) {
        console.error('Erro ao executar o código principal:', error);
    }
});

