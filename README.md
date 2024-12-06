Inicie Task
Descrição

O Inicie Task é uma aplicação de gerenciamento de tarefas, composta por dois projetos: Backend e Frontend. O sistema permite aos usuários adicionar, atualizar e excluir tarefas, com a opção de marcar como concluídas.
Funcionalidades

    Adicionar tarefa: Adiciona novas tarefas com título.
    Atualizar status: Permite alterar o status da tarefa para "concluído" ou reverter para "pendente".
    Excluir tarefa: Permite remover uma tarefa da lista.
    Exibição de tarefas: Mostra uma lista de todas as tarefas com o status atual.

Estrutura do Projeto

    inicie_teste_backend: Contém o código do backend, responsável pela API e manipulação de dados das tarefas.
    inicie_teste_frontend: Contém o código do frontend, responsável pela interface com o usuário e interação com a API.

Tecnologias Utilizadas

    Frontend: Angular, Angular Material
    Backend: Node.js, Express.js
    Banco de Dados: [Adicionar o banco de dados se aplicável]

Como Executar o Projeto
Backend

    Navegue até a pasta do backend:

cd inicie_teste_backend

Configuração do Banco de Dados (Se necessário)

Se o seu projeto utiliza um banco de dados (por exemplo, MySQL ou MongoDB), siga os passos abaixo para configurar o banco de dados e as tabelas:

    MySQL (ou outro banco relacional):
        Crie um banco de dados no seu servidor:

CREATE DATABASE inicie_task;

Crie as tabelas necessárias (um exemplo de tabela de tarefas):

        CREATE TABLE tasks (
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          status ENUM('pendente', 'concluída') DEFAULT 'pendente'
        );

    MongoDB: Caso esteja utilizando MongoDB, a criação de banco de dados e coleções pode ser feita automaticamente ao salvar documentos. Apenas instale o MongoDB e certifique-se de que a conexão com o banco está correta no código.

Instale as dependências:

npm install

Inicie o servidor:

    npm start

Frontend

    Navegue até a pasta do frontend:

cd inicie_teste_frontend

Instale as dependências:

npm install

Inicie o servidor de desenvolvimento:

    ng serve

Acessando a Aplicação

Após iniciar ambos os servidores, você pode acessar a aplicação no navegador através dos seguintes endereços:

    Frontend: http://localhost:4200
    Backend: http://localhost:3000 (ou o endereço configurado)

Como Contribuir

    Faça um fork deste repositório.
    Crie uma branch para a sua feature:

git checkout -b feature/nome-da-feature

Faça suas alterações.
Commit suas alterações:

git commit -am 'Adicionando nova feature'

Push para a branch:

git push origin feature/nome-da-feature

Abra um pull request.
