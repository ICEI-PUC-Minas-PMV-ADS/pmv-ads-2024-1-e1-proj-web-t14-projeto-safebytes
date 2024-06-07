const removeSerch = document.querySelector(".searchBox");
removeSerch.innerHTML = '';


document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("inputemail").value;
    const senha = document.getElementById("inputsenha").value;

    // Carrega os usuários do localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Respostas do Login
    const userExists = users.some(
      (user) => user.email === email && user.senha === senha && user.email != ""
    );
    const incorrectPassword = users.some(
      (user) => user.email === email && user.senha != senha
    );
    if (userExists) {
      alert("Login feito com sucesso!");
      window.location.href = "../pages/pagInicial.html";
    } else if (incorrectPassword) {
      alert("Senha incorreta!");
    } else {
      alert("Este usuário não existe!");
    }

    // Limpa o formulário
    loginForm.reset();
  });
});

// Botão de mostrar e esconder a senha
function mostrarSenha(){
  var inputsenha = document.getElementById('inputsenha')
  var btMostrarSenha = document.getElementById('botaoSenha')

  if (inputsenha.type ==='password') {
      inputsenha.setAttribute('type','text')
      btMostrarSenha.classList.replace('bi-eye-slash','bi-eye')
  } else {
      inputsenha.setAttribute('type','password')
      btMostrarSenha.classList.replace('bi-eye','bi-eye-slash')
  }
}