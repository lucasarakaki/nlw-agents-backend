# NLW Agents Backend

## 📜 Descrição

Este projeto é o backend de uma aplicação de inteligência artificial generativa, construída durante a Next Level Week Agents (NLW Agents) da Rocketseat. A aplicação permite a criação de "agentes" de IA que podem responder a perguntas com base em um contexto de áudio fornecido. O objetivo é criar uma plataforma onde os usuários possam interagir com IAs especializadas em diferentes assuntos, alimentadas por conteúdo de áudio.

## ✨ Funcionalidades

*   **Criação de Salas:** Permite a criação de salas temáticas para organizar as interações com a IA.
*   **Upload de Áudio:** Funcionalidade para fazer upload de arquivos de áudio que servirão de contexto para a IA.
*   **Processamento de Áudio:** O áudio é processado e transcrito para texto.
*   **Criação de Perguntas:** Os usuários podem fazer perguntas dentro de uma sala.
*   **Respostas com IA Generativa:** A IA utiliza o contexto do áudio da sala para gerar respostas coesas e relevantes.

## 🚀 Tecnologias e Bibliotecas

*   **Node.js v22.x**
*   **Fastify:** Framework web para construção de APIs.
*   **Drizzle ORM:** ORM para interação com o banco de dados.
*   **PostgreSQL:** Banco de dados relacional.
*   **Zod:** Para validação de schemas e tipos.
*   **@google/genai:** SDK para interação com a API do Gemini.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática.

## ⚙️ Requisitos do Sistema

*   **Node.js:** Versão 22.x ou superior.
*   **NPM:** Gerenciador de pacotes do Node.js.
*   **Docker:** Para rodar o banco de dados PostgreSQL em um contêiner.
*   **Chave de API do Gemini:** Necessária para a comunicação com a IA do Google.

## 🚀 Instalação e Configuração

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/nlw-agents-backend.git
    cd nlw-agents-backend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    *   Copie o arquivo `.env.example` para um novo arquivo chamado `.env`.
    *   Preencha as variáveis de ambiente no arquivo `.env` com as suas credenciais e configurações.

4.  **Inicie o banco de dados com Docker:**
    ```bash
    docker-compose up -d
    ```

5.  **Rode as migrações do banco de dados:**
    ```bash
    npm run db:migrate
    ```

6.  **(Opcional) Rode as seeds para popular o banco de dados:**
    ```bash
    npm run db:seed
    ```

## ▶️ Comandos de Inicialização

*   **Para iniciar o servidor em modo de desenvolvimento (com watch):**
    ```bash
    npm run dev
    ```

*   **Para iniciar o servidor em modo de produção:**
    ```bash
    npm run start
    ```

## 📂 Estrutura de Pastas do Projeto

```
/home/lucastakeshi/Dev/nlw-agents-backend/
├───.env.example
├───.gitignore
├───docker-compose.yaml
├───drizzle.config.ts
├───package.json
├───tsconfig.json
├───docker/
│   └───setup.sql
└───src/
    ├───env.ts
    ├───server.ts
    ├───db/
    │   ├───connection.ts
    │   ├───seed.ts
    │   ├───migrations/
    │   └───schemas/
    ├───http/
    │   └───routes/
    └───services/
        └───gemini.ts
```

## 🧪 Testes

Atualmente, não há testes automatizados configurados para este projeto.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

1.  Faça um fork do projeto.
2.  Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3.  Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4.  Faça push para a branch (`git push origin feature/nova-funcionalidade`).
5.  Abra um Pull Request.
