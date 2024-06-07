const body = document.body;

const header = document.createElement('header');
header.id = 'header01';
header.className = 'header01';

body.prepend(header);

const logo =
    "<div id ='logo' class='logo'>" +
    "<a href='index.html' class='searchBtn'>" +
    "<img src='../assets/logoPrincipal.png' title='Vigia Virtual' alt='Vigia Virtual'/>" +
    "</a>" +
    "</div>"

let searchBar =
    "<div id='searchBox' class='searchBox'>" +
    "<input id='search'  class='search' type='text' placeholder='Pesquisa...'>" +
    "<a href='' class='searchBtn'>" +
    "<i class='bi bi-search'></i>" +
    "</a>" +
    "</div>"

let login =
    "<div id='login' class='login'>" +
    "<button id='loginBtn' class='button'> Login </button>"
"</div>"

if (body.id === 'pagLogin') {
    header.innerHTML += logo;
} else {
    header.innerHTML += logo;
    header.innerHTML += searchBar;
    header.innerHTML += login;
    document.querySelector("#loginBtn").addEventListener("click", () => {
        window.location.href = "login.html";
    });
}


