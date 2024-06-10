# Registro de Testes de Software

Os resultados dos testes funcionais realizados na aplicação são descritos a seguir. 

<h3>CT-01: Verificar o sistema de cadastro para novos usuários.</h3>

Responsável: Emerson

O usuário acessa a página de cadastro através da Homepage, digita seus dados corretamente e realiza o cadastro no site.

![teste-cadastro1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/165968928/6446eb63-f69d-4daf-92bf-19006bec3659)

Nesse caso de teste de insucesso, o usuário preenche os campos com os mesmos dados registrados anteriormente, assim, o sistema dispara um alerta de erro.

![teste-cadastro2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/165968928/4dfa09d6-3856-4509-8dd9-dd47fe5d4707)

<h3>CT-02: Verificar o sistema de login.</h3>

Responsável: Emerson

Usuário preenche os campos com dados não cadastrados.

![teste-login1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/165968928/8de0631d-5f44-4cf2-92f6-21dd6daffa37)

Usuário preenche os campos com um email já registrado, porém digita a senha incorretamente.

![teste-login2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/165968928/fd64ce3c-5ea6-4b5c-acbb-220abb9d1150)

Usuário preenche os dados corretamente e realiza login com sucesso.

![teste-login3](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/165968928/9d5c5230-fb05-4b5b-9013-6aa1fa9411d2)

E por fim, ele é redirecionado a página inicial, já logado.

![teste-login4](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/165968928/5a63cb9a-39d9-4f49-9602-a4066989d8ea)


#### Troca da foto de perfil

<h3>CT-08: Tipos de arquivos aceitos na foto de perfil</h3>

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/99978185/02244d19-7752-44b0-a544-7263cacb02f2)

Após clicar na opção Configuração de Perfil o usuário irá para essa página na qual pode alterar à vontade sua foto de perfil, desde que atenda alguns requisitos, como tamanho máximo e largura e altura mínimas.

Restrições de imagem:
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/99978185/787927dc-bf76-4c7e-a81e-f5a10a098f93)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/99978185/ccea155c-7203-49eb-9c26-526103be086a)

Caso atenda, a alteração é efetuada e salva de modo temporário no localStorage até que o usuário efetue o salvamento no botão Salvar abaixo:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/99978185/82383a14-2290-41c9-b656-7c2d33419613)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/99978185/22c186a3-ed98-426b-8d8d-5d9afcc0997c)

Ao ser redirecionado o ícone do perfil já estará alterado:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/99978185/161a46f0-2f36-4547-a453-86e3cd66c442)

Assim como em outras diversas páginas nas quais existem o ícone e o atalho para a página de perfil:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/99978185/e04141b0-2b8d-46a8-aad7-1052afe8e976)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/99978185/792b5f5a-9ac4-4601-b035-b443f4100b56)

Caso o usuário decida cancelar a alteração, a imagem antes salva no localStorage é deletada e as páginas permanecem com o ícone anterior ao processo de modificação.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/99978185/1dee1a49-4789-492e-bb5e-da903b302f7b)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/99978185/52e9ba66-73a5-4c52-9548-7ec29156fcb7)

Sendo assim, redirecionado à página inicial:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/99978185/061d6ae5-2b01-4d61-a2c7-a5e7aa68a7b3)

 #### Responsável: Maria Eduarda Rodrigues Antunes


 #### Alteração nos dados de login na configuração de perfil

 O usuário entra em 'Configurar Perfil' através da página perfil.html e insere os dados nos respectivos campos: nickname, nome, e-mail e senha.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/99978185/e1eb52ff-b7ea-4d1a-a1e0-b6553cb1a4d6)

O usuário clica em 'Salvar' no final da página Configuração de perfil e recebe uma notificação de que as alterações foram armazenadas.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/99978185/7c107bc4-a124-4f9b-b128-79cc7360175d)

O usuário pode optar por 'Sair' na página de perfil e logo depois ser redirecionado à página de login.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/99978185/999d78cb-595f-4a1e-8e57-f55dc33992b1)

O usuário insere seus novos dados,  -- nesse caso os relevantes para efetuar o login, e-mail e senha -- e recebe uma notificação de sucesso ao efetuar o login, seguido do redirecionamento à página principal.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/99978185/72fa5e98-2e33-448a-a863-f8c4f588e9f5)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/99978185/d05e5ae9-7f73-4ca6-966f-c70534822f46)

#### Responsável: Maria Eduarda Rodrigues Antunes


<h3>CT-10: Verificar o sistema de quizzes.</h3>

Responsável: Arthur

O usuário ao acessar o quiz se depara com perguntas variadas sobre o tema onde ele pode selecionar Verdadeiro ou Falso.

![Captura de tela 2024-06-09 192309](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/151800637/1d1122ab-147e-4c06-b6ab-eed1a6f11b7f)

De acordo com a quantidade de perguntas que o usuário vai respondendo, a barra de progresso vai se enchendo

![Captura de tela 2024-06-09 192325](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/151800637/b4db67e1-407e-4bcc-ae7b-f3d735ba4b62)

E no final, é verificado a quantidade de acertos do usuário no tema e aparece a opção do usuário voltar pra página lista de quizzes.

![Captura de tela 2024-06-09 192342](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/151800637/904b2269-82bd-4f4e-b3ec-69e875a06a00)


### CT-03: Verificar o funcionamento da página Index

Responsável: Emily Gabriela.

Considero que ao seguir os passos descritos no Caso de Teste CT-03, presentes no <a href="07-Plano de Testes de Software.md">Plano de Testes de Software</a>, a funcionalidade em questão obtêm êxito ao atender os requisitos associados.

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/140619083/74a638d6-813d-409a-b5bc-4edd7268e595

### CT-04: Verificar o funcionamento dos Artigos

Responsável: Emily Gabriela.

Considero que ao seguir os passos descritos no Caso de Teste CT-04, presentes no <a href="07-Plano de Testes de Software.md">Plano de Testes de Software</a>, a funcionalidade em questão obtêm êxito ao atender os requisitos associados.

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/140619083/9195d3fc-9e22-4780-ab27-f95ddb17e0aa

### CT-05: Verificar o funcionamento da seção "Perguntas Frequentes"

Responsável: Emily Gabriela.

Considero que ao seguir os passos descritos no Caso de Teste CT-05, presentes no <a href="07-Plano de Testes de Software.md">Plano de Testes de Software</a>, a funcionalidade em questão obtêm êxito ao atender os requisitos associados.

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/140619083/2eb0ea45-1b9e-49d6-80b9-687fed3503aa

### CT-06: Verificar o funcionamento dos Tutoriais

Responsável: Emily Gabriela.

Considero que ao seguir os passos descritos no Caso de Teste CT-06, presentes no <a href="07-Plano de Testes de Software.md">Plano de Testes de Software</a>, a funcionalidade em questão obtêm êxito ao atender os requisitos associados.

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/140619083/3fca43b4-cb0b-4ce4-ad7b-6108b80df221

### CT-07: Verificar se o sistema salva o último tutorial visualizado

Responsável: Emily Gabriela.

Considero que ao seguir os passos descritos no Caso de Teste CT-07, presentes no <a href="07-Plano de Testes de Software.md">Plano de Testes de Software</a>, a funcionalidade em questão obtêm êxito ao atender os requisitos associados.

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t14-projeto-safebytes/assets/140619083/acafa2ec-c592-42c9-a2f8-8eef0d6a7b28












