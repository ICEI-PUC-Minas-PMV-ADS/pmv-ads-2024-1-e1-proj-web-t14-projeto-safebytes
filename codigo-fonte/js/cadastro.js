// CADASTRO
document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");
  const inputSenha = document.getElementById("inputsenha");
  let timeoutId;

  // Função para mostrar a caixa de mensagem com os requisitos da senha
  function showPasswordRequirements() {
    timeoutId = setTimeout(() => {
      // Cria a div para a caixa de mensagem
      const mensagemDiv = document.createElement("div");
      mensagemDiv.id = "mensagemSenha";
      mensagemDiv.textContent = "A senha deve conter pelo menos 8 caracteres, incluindo pelo menos um número e sem sequências numéricas.";

      // Adiciona estilos CSS à caixa de mensagem
      mensagemDiv.style.position = "absolute";
      mensagemDiv.style.backgroundColor = "black";
      mensagemDiv.style.color = "white"; // Cor do texto
      mensagemDiv.style.borderRadius = "5px";
      mensagemDiv.style.padding = "10px";
      mensagemDiv.style.left = "50%";
      mensagemDiv.style.transform = "translateX(-50%)";
      mensagemDiv.style.top = inputSenha.offsetTop + inputSenha.offsetHeight + 10 + "px"; // Posiciona a caixa abaixo do campo de senha
      mensagemDiv.style.zIndex = "999"; // Certifique-se de que a caixa de mensagem esteja na frente de outros elementos
      mensagemDiv.style.maxWidth = "300px"; // Largura máxima da caixa de mensagem

      // Adiciona a caixa de mensagem ao formulário
      registerForm.appendChild(mensagemDiv);
    }, 1000); // Tempo em milissegundos (1000 = 1 segundo)
  }

  // Função para esconder a caixa de mensagem
  function hidePasswordRequirements() {
    clearTimeout(timeoutId);
    const mensagemDiv = document.getElementById("mensagemSenha");
    if (mensagemDiv) {
      mensagemDiv.remove();
    }
  }

  // Adiciona o evento mouseover para mostrar os requisitos da senha
  inputSenha.addEventListener("mouseover", showPasswordRequirements);

  // Adiciona o evento mouseout para esconder os requisitos da senha
  inputSenha.addEventListener("mouseout", hidePasswordRequirements);
  
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("inputnome").value;
    const email = document.getElementById("inputemail").value;
    const senha = document.getElementById("inputsenha").value;

    // Função para verificar a validade da senha
    function isValidPassword(senha) {
      if (senha.length < 8) {
        return false;
      }
      if (!/\d/.test(senha)) {
        return false;
      }
      for (let i = 0; i < senha.length - 2; i++) {
        if (parseInt(senha[i]) === parseInt(senha[i + 1]) - 1 && parseInt(senha[i]) === parseInt(senha[i + 2]) - 2) {
          return false; // Verifica se há sequências numéricas de 3 ou mais dígitos
        }
      }
      return true;
    }

    // Carrega os usuários do localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Verifica se o usuário já existe
    const userExists = users.some((user) => user.email === email);

    // Verifica a validade da senha
    const validPassword = isValidPassword(senha);

    // Verifica a validade do email
    const validEmail = email.endsWith("@gmail.com");

    if (!validEmail) {
      alert("O email deve terminar com @gmail.com.");
      return;
    }

    if (userExists && !validPassword) {
      alert("Este e-mail já está em uso e a senha não atende aos requisitos. Por favor, use um e-mail diferente e uma senha válida (pelo menos 8 caracteres, contendo pelo menos um número e sem sequências numéricas).");
      return;
    } else if (userExists) {
      alert("Este e-mail já está em uso. Por favor, use um e-mail diferente.");
      return;
    } else if (!validPassword) {
      alert("A senha não atende aos requisitos. Por favor, use uma senha com pelo menos 8 caracteres, contendo pelo menos um número e sem sequências numéricas.");
      return;
    }

    // Adiciona o novo usuário à lista
    users.push({ nome, email, senha });

    // Salva a lista de usuários no localStorage
    localStorage.setItem("users", JSON.stringify(users));
    // Armazena um indicador de autenticação na sessionStorage
    sessionStorage.setItem('isLoggedIn', 'true');

    // Redireciona o usuário para a página principal
    window.location.href = "../pages/pagInicial.html";

    window.location.href = "../pages/login.html";
    alert("Usuário cadastrado com sucesso");
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

// FIM CADASTRO 

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