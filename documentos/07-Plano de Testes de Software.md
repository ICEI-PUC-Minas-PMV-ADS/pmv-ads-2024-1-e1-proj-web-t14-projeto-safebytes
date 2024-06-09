# Plano de Testes de Software

O requisito para a realização dos testes de software foi:
<ul>
 <li>Navegador da Internet: Chrome, Edge, Opera ou Firefox.</li>
</ul>

|Caso de Teste   |   Requisitos Associados   |Objetivo do Teste|Passos   |Critérios de êxito   |Responsável|
|----------------|---------------------------|------------------|--------|----------------------|--------------------------------------------|
| CT-01: Verificar o sistema de cadastro para novos usuários.  |<ul> <li> RF-01 </li> <br> <li> RF-02 </li> </ul> | Verificar se o sistema de cadastro está sendo feito corretamente.| <ol> <li> Acessar o Navegador. </li> <br> <li> Acessar o website. </li> <br> <li> Na homepage do site, clicar no botão de Cadastro. </li> <br> <li> Preencher o formulário com as informações solicitadas. </li> <br> <li> Clicar no botão "Cadastrar". </li> </ol> | <ul> <li> O sistema deve verificar se os campos foram preenchidos corretamente. </li> <br> <li> O sistema deve verificar se já existe um usuário cadastrado com o mesmo email, e se houver, disparar um alerta informando-o. </li> <br> <li> Após a validação dos dados, o sistema deve disparar uma mensagem de sucesso e redirecionar o usuário para a homepage. </li> </ul> | Emerson | 

|Caso de Teste   |   Requisitos Associados   |Objetivo do Teste|Passos   |Critérios de êxito   |Responsável|
|----------------|---------------------------|------------------|--------|----------------------|--------------------------------------------|
| CT-02: Verificar o sistema de login. | <ul> <li> RF-01 <br> <li> RF-02 </li> </ul> | Verificar se o sistema de login está funcionando corretamente. | <ol> <li> Acessar o Navegador. </li> <br> <li> Acessar o website. </li> <br> <li> Na homepage do site, clicar no botão de Login. </li> <br> <li> Preencher o formulário com as informações cadastradas anteriormente. </li> <br> <li> Clicar no botão "Entrar". </li> </ol> | <ul> <li> O sistema deve verificar se os dados foram preenchidos corretamente. </li> <li> O sistema deve disparar um alerta se o email informado pelo usuário ainda não estiver cadastrado no sistema. </li> <li> O sistema deve exibir um alerta de erro, se a senha informada pelo usuário não for a mesma cadastrada. </li> <li> Se todos os dados forem preenchidos corretamente, o sistema deve disparar um alerta de "Login feito com sucesso!", e redirecionar o usuário para a homepage do site. | Emerson |

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar o funcionamento da página Index</td>
  <td>
   <ul>
    <li>RF- 01	O sistema deve viabilizar o cadastro no website, exigindo informações como e-mail e senha.</li>
    <li>RF- 02	O sistema deve permitir o acesso ao website mediante o fornecimento de e-mail e senha durante o processo de login.</li>
    <li>RF- 04 O sistema deve disponibilizar módulos de aprendizagem sobre cibersegurança.</li>
   </ul>
  </td>
  <td>
   Certificar que através da página index.html seja possível acessar:
  <ul>
   <li>A página de login</li>
   <li>A página de cadastro</li>
   <li>A página Quem Somos</li>
   <li>A página de artigos</li>
   <li>Os modals da seção "Perguntas Frequentes"</li>
  </ul>
  </td>
  <td>
   <ol>
    <li>Acessar a página index.html</li>
    <li>Acessar a página quemSomos.html</li>
    <li>Acessar a página pagArtigos.html com o conteúdo que corresponde a cada card</li>
    <li>Vizualizar o modal de cada pergunta frequente</li>
    <li>Acessar a página login.html</li>
    <li>Acessar a página cadastro.html</li>
   </ol>
   </td>
  <td>
   Conseguir seguir todos os passos com êxito.
  </td>
  <td>Emily Gabriela</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar o funcionamento dos Artigos</td>
  <td>
   <ul>
    <li>RF- 04 O sistema deve disponibilizar módulos de aprendizagem sobre cibersegurança.</li>
   </ul>
  </td>
  <td>
   Garantir que cada card de artigo presente na página index.html direcione o usuário a página pagArtigos.html, e o conteúdo presente na página esteja correto
  </td>
  <td>
   <ol>
    <li>Acessar a página index.html</li>
    <li>Acessar cada um dos cards de artigos</li>
    <li>Ler o conteúdo</li>
    <li>Dar play no iframe</li>
    <li>Clicar no botão "Concluir"</li>
   </ol>
   </td>
  <td>
   Conseguir seguir todos os passos com êxito.
  </td>
  <td>Emily Gabriela</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar o funcionamento da seção "Perguntas Frequentes"</td>
  <td>
   <ul>
    <li>RF- 04 O sistema deve disponibilizar módulos de aprendizagem sobre cibersegurança.</li>
   </ul>
  </td>
  <td>
   Garantir que cada pergunta frequente possua um modal com as respostas correspondentes a elas.
  </td>
  <td>
   <ol>
    <li>Acessar a página index.html</li>
    <li>Acessar cada uma das perguntas</li>
    <li>Ler o conteúdo</li>
    <li>Fechar o modal a partir dos botões "Fechar" e "X"</li>
   </ol>
   </td>
  <td>
   Conseguir seguir todos os passos com êxito.
  </td>
  <td>Emily Gabriela</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-06: Verificar o funcionamento dos Tutoriais</td>
  <td>
   <ul>
    <li>RF- 04 O sistema deve disponibilizar módulos de aprendizagem sobre cibersegurança.</li>
    <li>RF- 07	O sistema deve disponibilizar um processo gamificado onde o usuário poderá, a cada etapa, ampliar sua segurança.</li>
   </ul>
  </td>
  <td>
   Garantir que cada tutorial presente na página tutoriais.html possua seu vídeo e suas etapas, com a possibilidade de navegação entre elas e conclusão do tutorial.
  </td>
  <td>
   <ol>
    <li>Acessar a página index.html</li>
    <li>Realizar o processo de cadastro e/ou login</li>
    <li>Acessar a página pagInicial.html</li>
    <li>Acessar a página tutoriais.html, clicando no card "Tutoriais"</li>
    <li>Selecionar cada um dos tutoriais presentes na página</li>
    <li>Dar play no iframe</li>
    <li>Acessar a primeira etapa</li>
    <li>Avançar entre as etapas</li>
    <li>Testar as possibilidades de navegação entre elas</li>
    <li>Concluir o Tutorial</li>
   </ol>
   </td>
  <td>
   Conseguir seguir todos os passos com êxito.
  </td>
  <td>Emily Gabriela</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-07: Verificar se o sistema salva o último tutorial visualiazado</td>
  <td>
   <ul>
    <li>RF- 08	O website deve ser capaz de contabilizar o progresso do usuário.</li>
   </ul>
  </td>
  <td>
   Garantir que a seção "Continuar Tutorial", da página pagInicial.html, mude a partir do acesso a um tutorial. Armazenando a capa e o título do último tutorial acessado.
  </td>
  <td>
   <ol>
    <li>Acessar a página index.html</li>
    <li>Realizar o processo de cadastro e/ou login</li>
    <li>Acessar a página pagInicial.html</li>
    <li>Acessar a página tutoriais.html, clicando no card "Tutoriais"</li>
    <li>Selecionar um tutorial</li>
    <li>Sair deste tutorial</li>
    <li>Acessar novamente a página pagInicial.html</li>
    <li>Garantir que a seção agora tem a capa e o título do tutorial selecionado anteriormente</li>
    <li>Garantir que selecionando ela você seja direcionado para o tutorial correto</li>
   </ol>
   </td>
  <td>
   Conseguir seguir todos os passos com êxito.
  </td>
  <td>Emily Gabriela</td>
 </tr>
</table>

> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
