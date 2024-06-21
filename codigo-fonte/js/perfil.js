// Carregar a imagem de perfil do usuário logado ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    const email = localStorage.getItem('loggedInUserEmail');
    if (email) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.email === email);
        if (user && user.profileImage) {
            const perfilImg = document.getElementById('perfil');
            if (perfilImg) {
                perfilImg.setAttribute('src', user.profileImage);
            }
        }
    }
});

// funcionalidade de logout
document.addEventListener('DOMContentLoaded', function () {
    function logout() {
        console.log('Logout iniciado');

        // Remover o email do usuário do localStorage para efetuar o logout
        localStorage.removeItem('loggedInUserEmail');
        console.log('Email removido do localStorage');

        // Redirecionar para a página de login
        window.location.href = "../pages/login.html";
    }

    const logoutButton = document.getElementById('logoutButton');

    if (logoutButton) {
        console.log('#logoutButton encontrado');
        logoutButton.addEventListener('click', function (e) {
            e.preventDefault(); // Impedir o comportamento padrão do link, se necessário
            logout();
        });
    } else {
        console.log('#logoutButton não encontrado');
    }
});

// se o usuário não tiver logado ele não consegue permanecer nessa página
document.addEventListener('DOMContentLoaded', function () {
    // Verificar se o usuário está logado ao carregar a página
    const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    if (!loggedInUserEmail) {
        // Redirecionar para a página de login sem manter no histórico
        window.location.replace("../pages/login.html");

        // Limpar qualquer entrada da página não autorizada no histórico de navegação
        if (window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        } else {
            // Alternativa para navegadores que não suportam replaceState
            window.location.replace("../pages/login.html");
        }
    }
});

// fim da funcionalidade de logout

    // Adicionar evento de clique para a opção "Configurar Perfil"
    document.getElementById('configurarPerfil').addEventListener('click', function () {
        window.location.href = "../pages/perfilConfig.html";
    });

    document.querySelector('.setaVoltar').addEventListener('click', function () {
        window.location.href = "pagInicial.html";
    });

    document.addEventListener('DOMContentLoaded', function () {
        // Passo 1: Recuperar o objeto users do localStorage
        const usersString = localStorage.getItem('users');
        const users = JSON.parse(usersString);
    
        // Passo 2: Recuperar o email logado
        const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    
        // Passo 3: Encontrar o usuário pelo email
        let userWithEmail = users.find(user => user.email === loggedInUserEmail);
    
        // Passo 4: Verificar se encontrou o usuário e atualizar o nickname na tela
        if (userWithEmail) {
            const userNicknameElement = document.getElementById('userNickname');
            if (userNicknameElement) {
                // Exibir o nickname na tela
                if (userWithEmail.nickname) {
                    userNicknameElement.textContent = userWithEmail.nickname;
                } else {
                    console.error(`O usuário com email ${loggedInUserEmail} não possui um nickname.`);
                }
            } else {
                console.error(`Elemento com id 'userNickname' não encontrado.`);
            }
        } else {
            console.error(`Não foi possível encontrar o usuário com o email ${loggedInUserEmail}`);
        }
    });
    // certificado

    let todasTarefasConcluidas = false; // Variável booleana para verificar se todas as tarefas estão concluídas

async function gerarCertificado(event) {
    try {
        event.preventDefault(); // Adicionando preventDefault aqui para evitar o comportamento padrão do evento
        console.log("Gerar Certificado chamado.");

        const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
        const users = JSON.parse(localStorage.getItem('users'));

        const user = users.find(u => u.email === loggedInUserEmail);
        const nome = user ? user.nome : 'Usuário';

        const url = '../assets/Certificado - Vigia Virtual.pdf';
        const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

        const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);

        const pages = pdfDoc.getPages();
        const primeiraPagina = pages[0];

        const { width, height } = primeiraPagina.getSize();
        const fontSize = 35;

        // Carregar a fonte Helvetica e medir a largura do texto
        const font = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
        const textWidthNome = font.widthOfTextAtSize(nome, fontSize);

        // Calcular a posição x centralizada para o nome
        const xNome = (width - textWidthNome) / 2;
        const yNome = height / 2;

        // Adicionar nome ao certificado
        primeiraPagina.drawText(nome, {
            x: xNome,
            y: yNome,
            size: fontSize,
            font: font,
            color: PDFLib.rgb(0, 0, 0)
        });

        // Adicionar data de emissão ao certificado
        const dataEmissao = new Date().toLocaleDateString('pt-BR'); // Exemplo de formato de data
        const textWidthData = font.widthOfTextAtSize(dataEmissao, 12); // Tamanho da fonte para a data
        const xData = (width - textWidthData) / 2;
        const yData = height / 4; // Posição aproximada 3/4 abaixo da página
        primeiraPagina.drawText(dataEmissao, {
            x: xData,
            y: yData,
            size: 12,
            font: font,
            color: PDFLib.rgb(0, 0, 0)
        });

        const pdfBytes = await pdfDoc.save();

        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'certificado.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    } catch (error) {
        console.error('Erro ao gerar o certificado:', error);
    }
}

async function verificarConclusaoAtividades() {
    try {
        const totalProgresso = await total();
        const totalConcluidosProgresso = await totalConcluidos();

        todasTarefasConcluidas = totalConcluidosProgresso === totalProgresso;

        // Atualizar estado do cadeado
        const cadeadoIcon = document.getElementById('cadeadoIcon');
        if (todasTarefasConcluidas) {
            cadeadoIcon.classList.remove('bi-lock');
            cadeadoIcon.classList.add('bi-unlock');
        } else {
            cadeadoIcon.classList.remove('bi-unlock');
            cadeadoIcon.classList.add('bi-lock');
        }

        return todasTarefasConcluidas;
    } catch (error) {
        console.error('Erro ao verificar conclusão das atividades:', error);
        return false;
    }
}

async function baixarCertificado(event) {
    try {
        event.preventDefault(); // Adicionando preventDefault aqui

        const todasTarefasConcluidas = await verificarConclusaoAtividades();

        if (todasTarefasConcluidas) {
            // Gerar e baixar o certificado, passando o evento
            await gerarCertificado(event);
        } else {
            console.log('Ainda há tarefas não concluídas.');
            // Poderia mostrar uma mensagem ao usuário informando que ele precisa concluir todas as atividades.
        }
    } catch (error) {
        console.error('Erro ao baixar o certificado:', error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
        if (!loggedInUserEmail) {
            throw new Error('Nenhum usuário logado!');
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

        await verificarConclusaoAtividades();

        // Verifica conclusão de atividades periodicamente
        setInterval(verificarConclusaoAtividades, 5000); // Verifica a cada 5 segundos

    } catch (error) {
        console.error('Erro ao executar o código principal:', error);
    }
});