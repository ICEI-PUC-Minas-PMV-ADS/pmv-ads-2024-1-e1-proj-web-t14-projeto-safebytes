document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("inputnome").value;
    const email = document.getElementById("inputemail").value;
    const senha = document.getElementById("inputsenha").value;

    // Carrega os usuários do localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Verifica se o usuário já existe
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      alert("Usuário já existe");
      return;
    }

    // Adiciona o novo usuário à lista
    users.push({ nome, email, senha });

    // Salva a lista de usuários no localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Usuário cadastrado com sucesso");

    // Limpa o formulário
    registerForm.reset();

    window.location.href = "../pages/login.html";
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



// LOGIN

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

// FIM LOGIN 

