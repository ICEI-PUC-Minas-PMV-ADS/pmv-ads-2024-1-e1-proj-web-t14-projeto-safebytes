# Especificação do Projeto

## Perfis de Usuários
<table>
<tbody>
<tr align=center>
<th colspan="2"> Usuários Leigos em Tecnologia </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Indivíduos de todas as idades que utilizam serviços digitais no seu cotidiano, mas que possuem conhecimento limitado sobre medidas de segurança na internet.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Alertas sobre as mais novas fraudes e informações claras e acessíveis sobre os fundamentos da cibersegurança.</td>
</tr>
</tbody>
</table>
<table>
<tbody>
<tr align=center>
<th colspan="2"> Idosos Usuários da Internet </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Indivíduos de idade mais avançada e com pouco conhecimento de cibersegurança. Podem ser mais vulneráveis a golpes e fraudes devido à falta de experiência com práticas maliciosas na internet</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Instruções simplificadas de como navegar na internet de forma segura e recursos visuais/interativos que facilitam o entendimento de conceitos de cibersegurança</td>
</tr>
</tbody>
</table>
<table>
<tbody>
<tr align=center>
<th colspan="2"> Estudantes e Jovens Profissionais
 </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Jovens que cresceram utilizando a tecnologia, mas que não estão plenamente conscientes dos riscos associados ao compartilhamento de informações pessoais online.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Dicas sobre privacidade e segurança de dados pessoais em plataformas e redes sociais.</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
|Usuário leigo em tecnologia|Aprender o básico sobre segurança digital de uma maneira simples e direta| Poder navegar na internet de forma mais segura, protegendo minhas informações pessoais.|
|Um idoso usuário de internet|Encontrar guias fáceis de seguir que me ensinem a realizar transações online de forma segura|Não cair em golpes financeiros e proteger minhas informações pessoais.|
|Um idoso usuário de internet|Aprender a identificar e evitar mensagens fraudulentas ou golpes que frequentemente circulam nas redes sociais| Poder navegar na internet de forma mais segura, protegendo minhas informações pessoais.|
|Estudante e Jovem profissional|Receber dicas personalizadas sobre como manter minha privacidade em redes sociais e plataformas de estudo/trabalho|Evitar o vazamento de informações pessoais e profissionais.|
  
## Requisitos do Projeto
### Requisitos Funcionais
|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF- 01 | O sistema deve viabilizar o cadastro no website, exigindo informações como e-mail e senha.| ALTA  | 
| RF- 02 | O sistema deve permitir o acesso ao website mediante o fornecimento de e-mail e senha durante o processo de login.| ALTA |
| RF- 03 | A funcionalidade de atualização/recuperação de senha deve estar disponível no sistema| ALTA  | 
| RF- 04 | O sistema deve disponibilizar módulos de aprendizagem sobre cibersegurança.| ALTA |
| RF- 05 |O sistema deve propiciar mecanismos de busca por interesse do usuário.| MEDIA | 
| RF- 06 | O sistema deve notificar os usuários cadastrados sobre artigos recentes.| ALTA |
| RF- 07 | O sistema deve disponibilizar um processo gamificado onde o usuário poderá, a cada etapa, ampliar sua segurança.| ALTA  | 
| RF- 08 | O website deve ser capaz de contabilizar o progresso do usuário.| ALTA |
| RF- 09 |A partir da etapa 1, o sistema deve liberar uma etapa somente a partir da conclusão da anterior.| ALTA  |
| RF-10  |O usuário deve ser capaz de atualizar seus dados pessoais (nome, e-mail e senha) na página de configuração do perfil. Após a atualização, o usuário deve ser capaz de realizar login utilizando os novos dados fornecidos. | ALTA |
 
### Requisitos não Funcionais
|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
|RNF-01| O sistema deve fornecer uma interface interativa, responsiva e inclusiva.| ALTA   | 
|RNF-02| O sistema deve manter uma rotina de atualizações diárias/ semanais nos seus conteúdos| ALTA   | 
|RNF-03| O tempo de resposta do sistema não deve ultrapassar 15 segundos para otimizar a experiência do usuário.| ALTA   | 
|RNF-04| É necessário que o sistema suporte o acesso simultâneo de até 30.000 usuários, mantendo um tempo de resposta satisfatório.| ALTA   | 
|RNF-05| O sistema deve notificar o usuário sobre novidades em até 20 segundos após sua atualização.| ALTA   | 
|RNF-06| A segurança dos dados dos usuários deve estar em conformidade com a LGPD (Lei Geral de Proteção de Dados), garantindo a privacidade e a integridade das informações.| ALTA |
|RNF-O7| O usuário deve ser capaz de alterar sua foto de perfil na página de configuração do perfil. | MÉDIA |
