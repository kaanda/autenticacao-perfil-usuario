## Desafio de Programação: Sistema de Gestão de Autenticação e Perfil de Usuário
-> Objetivo:
Desenvolver uma aplicação web em ReactJS que permita aos usuários fazer login, visualizar e editar seu perfil. A aplicação deve utilizar boas práticas de desenvolvimento, gerenciamento de estado com Redux, e ser implementada com TypeScript. A aplicação deve incluir testes unitários e seguir uma abordagem CI/CD.

## 1- FLUXO DE TELA
    ##TELA INICIAL##
        -> ELEMENTOS DE INTERFACE
        [ ] Botão de "Login"

        -> FLUXO
        [ ] O usuário abre a aplicação e vê a tela inicial
        [ ] O usuário clica no botão de "Login"
        [ ] O usuário é redirecionado para a Tela de Login

    ##TELA DE LOGIN##
        -> ELEMENTOS DE INTERFACE
        [ ] Tela de Login
            [ ] Campo de e-mail
            [ ] Campo de senha
            [ ] Botão de "Login"
            [ ] Mensagem de erro

        -> FLUXO
        [ ] O usuário abre a aplicação e vê a tela de login
        [ ] O usuário insere seu e-mail e senha
        [ ] O usuário clica no botão de "Login"
            [ ] Se as credenciais estiverem corretas, o usuário é redirecionado para a Tela de Perfil de Usuário
            [ ] Se as credenciais estiverem incorretas, uma mensagem de erro é exibida

    ##TELA DE PERFIL DE USUÁRIO##
        -> ELEMENTOS DE INTERFACE
        [ ] Exibir informações do usuário (nome, e-mail)
        [ ] Botão de "Editar Perfil"
        [ ] Botão de "Logout"

        -> FLUXO
        [ ] O usuário é redirecionado para a Tela de Perfil de Usuário
        [ ] O usuário vê suas informações de perfil
        [ ] O usuário clica no botão de "Editar Perfil"
        [ ] O usuário clica no botão de "Salvar"
        [ ] As informações de perfil do usuário são atualizadas
        [ ] O usuário clica no botão de "Logout"
        [ ] O usuário é redirecionado para a Tela de Login
    
    ##TELA DE EDIÇÃO DO USUÁRIO##
        -> ELEMENTOS DE INTERFACE
        [ ] Campo de nome
        [ ] Campo de e-mail
        [ ] Botão de "Salvar"
        [ ] Mensagem de erro

        -> FLUXO
        [ ] O usuário clica no botão de "Editar Perfil"
        [ ] O usuário é redirecionado para a Tela de Edição do Usuário
        [ ] O usuário editar as informações de nome e e-mail do perfil
        [ ] O usuário clica no botão de "Salvar"
            [ ] Se as informações estiverem corretas, as informações de perfil do usuário são atualizadas
            [ ] Se as informações estiverem incorretas, uma mensagem de erro é exibida
        [ ] O usuário clica no botão de "Cancelar"
        [ ] O usuário é redirecionado para a Tela de Perfil de Usuário sem salvar mudanças    

## 2- INTERFACE DO USUÁRIO - HTML + CSS
[ ] mobile first, estilizando a page com css e obtendo um design responsivo
[ ] page de login com os seguintes elementos:
    [ ] campo de email
    [ ] campo de senha
    [ ] botão de login
[ ] page de perfil com os seguintes elementos:
    [ ] campo de nome
    [ ] campo de email 
    [ ] campo de senha 
    [ ] campo de editar informações do perfil
    [ ] botão de salvar
    [ ] botão cancelar edição
    [ ] botão de logout
[ ] tratamento de erro com os seguintes elementos:
    [ ] mensagem de erro caso o usuário tente fazer login com credenciais inválidas
    [ ] mensagem de erro caso o usuário tente fazer login com um email inválido
    [ ] mensagem de erro caso o usuário tente fazer login com uma senha inválida

## 3- AUTENTICAÇÃO DE USUÁRIO - REACT + REDUX
[ ] deve permitir que o usuário faça login com email e senha
    [ ] utilizar Redux-form para gerenciar o estado de autenticação do usuário
    https://bradhick.medium.com/reduxform-fazendo-uma-valida%C3%A7%C3%A3o-com-dois-ou-mais-campos-a33eecf72554
[ ] deve permitir que o usuário veja seu perfil
    [ ] utilizar Redux para gerenciar dados do perfil do usuário
[ ] deve permitir que o usuário faça logout
[ ] deve persistir o estado de autenticação do usuário utilizando Redux
[ ] deve persistir o estado de autenticação do usuário utilizando Local Storage

## 4- VALIDAÇÃO DE DADOS - REACT + REDUX
[ ] deve validar o email do usuário
    [ ] utilizar Redux-form para gerenciar o estado de autenticação do usuário
[ ] deve validar a senha do usuário
    [ ] contendo um botão de mostrar/esconder senha
    [ ] a senha deve ter pelo menos 6 caracteres

---------------------------------------------------------------------------------

## Plano de Projeto Usando Metodologia Scrum
## Product Backlog
Aqui estão as histórias de usuário e as tarefas relacionadas para o projeto do Sistema de Gestão de Autenticação e Perfil de Usuário.

## Sprint 1: Configuração Inicial e Tela de Login

    História de Usuário 1: Como um usuário, eu quero fazer login na aplicação para acessar minhas informações de perfil.

    -> Tarefa 1.1: Configurar projeto ReactJS com TypeScript
    [X] Configurar o ambiente de desenvolvimento
    [X] Inicializar um novo projeto com create-react-app usando TypeScript
    
    -> Tarefa 1.2: Configurar Redux e React final form
    [X] Instalar e configurar Redux
    [ ] Instalar e configurar React final form para gerenciar o estado do formulário
    
    -> Tarefa 1.3: Criar a Tela de Login
    [ ] Criar componentes de entrada de e-mail e senha
    [ ] Criar botão de login
    [ ] Estilizar a tela com CSS seguindo a abordagem mobile first
    
    -> Tarefa 1.4: Implementar lógica de autenticação
    [ ] Configurar ações e reducers do Redux para autenticação
    [ ] Implementar validação de e-mail e senha
    [ ] Exibir mensagens de erro conforme necessário

## Sprint 2: Tela de Perfil de Usuário e Logout
    História de Usuário 2: Como um usuário autenticado, eu quero ver meu perfil para visualizar minhas informações.

    -> Tarefa 2.1: Criar a Tela de Perfil de Usuário
    [ ] Criar componentes para exibir nome e e-mail do usuário
    [ ] Criar botões de "Editar Perfil" e "Logout"
    [ ] Estilizar a tela com CSS seguindo a abordagem mobile first
    
    -> Tarefa 2.2: Implementar lógica de exibição do perfil
    [ ] Configurar ações e reducers do Redux para o perfil do usuário
    [ ] Persistir o estado de autenticação no Local Storage
    
    -> Tarefa 2.3: Implementar funcionalidade de Logout
    [ ] Configurar ação de logout no Redux
    [ ] Redirecionar usuário para a tela de login após o logout

## Sprint 3: Tela de Edição de Perfil
    História de Usuário 3: Como um usuário, eu quero editar minhas informações de perfil para mantê-las atualizadas.

    -> Tarefa 3.1: Criar a Tela de Edição de Perfil
    [ ] Criar componentes de entrada para nome e e-mail
    [ ] Criar botões de "Salvar" e "Cancelar"
    [ ] Estilizar a tela com CSS seguindo a abordagem mobile first
    
    ->Tarefa 3.2: Implementar lógica de edição de perfil
    [ ] Configurar ações e reducers do Redux para atualização de perfil
    [ ] Implementar validação de dados
    [ ] Exibir mensagens de erro conforme necessário
    
    -> Tarefa 3.3: Implementar navegação entre telas
    [ ] Redirecionar o usuário para a tela de perfil após salvar as mudanças
    [ ] Redirecionar o usuário para a tela de perfil ao cancelar a edição

## Sprint 4: Testes e Integração Contínua
    História de Usuário 4: Como desenvolvedor, eu quero garantir que a aplicação funcione corretamente através de testes unitários e integração contínua.

    -> Tarefa 4.1: Escrever testes unitários
    [ ] Escrever testes para componentes de login, perfil e edição de perfil
    [ ] Cobrir ações e reducers do Redux com testes
    
    ->Tarefa 4.2: Configurar CI/CD
    [ ] Configurar pipeline de CI/CD para integração contínua
    [ ] Automatizar testes e deploy da aplicação
    
    -> Tarefa 4.3: Revisar e refatorar códig
    [ ] Revisar o código para garantir boas práticas de desenvolvimento
    [ ] Refatorar componentes conforme necessário para melhorar a manutenibilidade

## Sprint Planning para a Sprint 1
    -> Sprint Goal: Implementar a tela de login e a lógica de autenticação.
    
    Tarefas e Estimativas:
    Configurar projeto ReactJS com TypeScript
    1 dia

    Configurar Redux e Redux-form
    2 dias

    Criar a Tela de Login
    3 dias

    Implementar lógica de autenticação
    3 dias

## Sprint Planning para a Sprint 2
    -> Sprint Goal: Implementar a tela de perfil de usuário e a funcionalidade de logout.

    Tarefas e Estimativas:
    Criar a Tela de Perfil de Usuário
    3 dias

    Implementar lógica de exibição do perfil
    3 dias

    Implementar funcionalidade de Logout
    2 dias
