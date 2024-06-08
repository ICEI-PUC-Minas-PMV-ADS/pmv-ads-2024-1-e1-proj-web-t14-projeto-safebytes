//function carregarNick() {
// fetch('perfil.json')
//     .then(Response => Response.json())
//    .then(perfil => {
//      const nick = document.querySelector("#userNickname")
//       const userNickname = document.createElement("h6")
//     userNickname.textContent = Nickname

//  })
//}

//carregarNick()

function carregarNick() {
    fetch('perfil.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(perfil => {
            const nick = document.querySelector("#userNickname");
            const userNickname = document.createElement("h6");
            userNickname.textContent = perfil.userNickname;  // Use perfil.userNickname
            nick.appendChild(userNickname);  // Adicione o elemento ao DOM
        })
        .catch(error => {
            console.error('Houve um problema com a requisição fetch: ', error);
        });
}

carregarNick();

document.getElementById('logoutButton').addEventListener('click', function () {
    // Limpar dados de autenticação do localStorage
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');

    // Redirecionar para a página de login
    window.location.href = "../pages/login.html";
});


// Adicionar evento de clique para a opção "Configurar Perfil"
document.getElementById('configurarPerfil').addEventListener('click', function () {
    window.location.href = "../pages/perfilConfig.html";
});

