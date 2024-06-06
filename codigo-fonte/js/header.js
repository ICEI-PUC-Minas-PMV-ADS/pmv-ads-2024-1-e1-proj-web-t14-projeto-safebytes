const body = document.body;

const header = document.createElement('header');
header.id = 'header01';
header.className = 'header01';

body.prepend(header);

const logo =
    "<div id ='logo' class='logo'>" +
        "<img src='../assets/logoPrincipal.png' title='Vigia Virtual' alt='Vigia Virtual'/>"
    "</div>"

header.innerHTML += logo;

const searchBar =
    "<div id='searchBox' class='searchBox'>" +
        "<input id='search'  class='search' type='text' placeholder='Pesquisa...'>" +
            "<a href='' class='searchBtn'>" +
                "<i class='bi bi-search'></i>" +
            "</a>" +
    "</div>"

header.innerHTML += searchBar;

const login =
    "<div id='login' class='login'>" +
    "<button id='loginBtn' class='button'> Login </button>"
    "</div>"

header.innerHTML += login;

document.querySelector("#loginBtn").addEventListener("click", () => {
    window.location.href = "login.html";
});
