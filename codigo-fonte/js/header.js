const body = document.body;

const header = document.createElement('header');
header.id = 'header01';
header.className = 'header';

body.prepend(header);

const logo =
    "<div id ='logo' class='logo'>" +
    "<a href='index.html'>" +
    "<img src='../assets/logoPrincipal.png' title='Vigia Virtual' alt='Vigia Virtual'/>" +
    "</a>" +
    "</div>"

const logo02 =
    "<div id ='logo' class='logo'>" +
    "<a href='pagInicial.html'>" +
    "<img src='../assets/logoPrincipal.png' title='Vigia Virtual' alt='Vigia Virtual'/>" +
    "</a>" +
    "</div>"

const searchBar =
    "<div id='searchBox' class='searchBox'>" +
    "<input id='search'  class='search' type='text' placeholder='Pesquisa...'>" +
    "<a href='' class='searchBtn'>" +
    "<i class='bi bi-search'></i>" +
    "</a>" +
    "</div>"

const login =
    "<div id='login' class='login'>" +
    "<button id='loginBtn' class='button'> Login </button>"
"</div>"

const fotoPerfil =
    "<div id ='fotoPerfil' class='fotoPerfil'>" +
    "<a href='perfil.html'>" +
    "<img src='../assets/perfil.jpg' id='perfil' title='Foto de Perfil' alt='Foto de Perfil'/>" +
    "</a>" +
    "</div>"

const botaoVoltar =
    "<div class='botaoDiv'>" +
    "<i id='botaoPagInicial' class='bi bi-chevron-compact-left'>" + "</i>" +
    "</div>"

if (body.id === 'pagLogin' || body.id === 'pagCadastro') {
    header.innerHTML += logo;

} else if (body.id === 'pagInicial') {
    header.innerHTML += logo02;
    header.innerHTML += fotoPerfil;

} else if (body.id === 'pagTutoriais' || body.id === 'pagQuizzes') {
    header.innerHTML += botaoVoltar;
    header.innerHTML += fotoPerfil;

} else {
    header.innerHTML += logo;
    header.innerHTML += searchBar;
    header.innerHTML += login;
    document.querySelector("#loginBtn").addEventListener("click", () => {
        window.location.href = "login.html";
    });
}




