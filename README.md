# Banco API Performance

## Introdução

Este repositório contém scripts de testes de performance utilizando JavaScript e K6 para validar o comportamento, desempenho e estabilidade de uma API.

Os testes simulam diferentes cenários de utilização, realizando chamadas HTTP e validando respostas da aplicação, como status HTTP, tempo de resposta e dados retornados.

O objetivo é analisar a capacidade da API em suportar diferentes cargas de acesso, identificar possíveis gargalos e garantir maior confiabilidade da aplicação.

---

## Tecnologias utilizadas

- JavaScript (ES6+)
- K6
- Git
- GitHub

### K6

O K6 é uma ferramenta open source utilizada para criação e execução de testes de carga e performance.

Com ele é possível simular múltiplos usuários virtuais realizando requisições simultâneas contra uma aplicação.

---

## Estrutura do repositório

```text
banco-api-performance/
│
├── tests/
│   ├── login.tests.js
│   └── transferencias.test.js
│
├── utils/
│   └── variaveis.js
│
├── config/
│   └── config.local.json
│
├── package-lock.json
│
└── README.md
```

---

## Objetivo de cada grupo de arquivos

### tests/

Contém os scripts responsáveis pelos cenários de testes de performance.

Exemplos:

### login.tests.js

Responsável por testar o fluxo de autenticação da API.

Valida:

- Código de resposta HTTP;
- Retorno do token;
- Estrutura dos dados retornados.

### transferencias.test.js

Responsável pelos testes relacionados às operações de transferência.

Valida o comportamento da API durante múltiplas requisições.

---

### utils/

Contém arquivos auxiliares utilizados pelos testes.

Exemplo:

`variaveis.js`

Responsável por centralizar configurações e variáveis utilizadas pelos scripts.

---

### config/

Contém arquivos de configuração utilizados durante a execução.

Exemplo:

`config.local.json`

Arquivo utilizado para armazenar configurações locais necessárias para execução dos testes.

---

# Instalação

## Pré-requisitos

É necessário possuir instalado:

- Node.js
- K6

Verifique:

```bash
node --version
```

```bash
k6 --version
```

---

## Clonando o repositório

```bash
git clone https://github.com/LariyeeRamos/banco-api-performance.git
```

Acesse o projeto:

```bash
cd banco-api-performance
```

---

## Instalação das dependências

Execute:

```bash
npm install
```

---

# Execução dos testes

Os testes utilizam a variável de ambiente:

```text
BASE_URL
```

Ela define o endereço da API que será testada.

Exemplo:

```bash
k6 run tests/login.tests.js -e BASE_URL=http://localhost:3000
```

O valor informado será utilizado para montar as URLs dos endpoints.

Exemplo:

```text
BASE_URL + /login

Resultado:
http://localhost:3000/login
```

---

# Execução com dashboard em tempo real e exportação de relatório

O K6 permite acompanhar a execução em tempo real através do dashboard web e gerar um relatório HTML.

Execute:

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.tests.js -e BASE_URL=http://localhost:3000
```

Durante a execução será possível acompanhar:

- Quantidade de usuários virtuais;
- Requisições realizadas;
- Tempo de resposta;
- Taxa de erros.

Ao finalizar será criado:

```text
html-report.html
```

com o relatório da execução.

---

## Exemplos de execução

Teste de login:

```bash
k6 run tests/login.tests.js -e BASE_URL=http://localhost:3000
```

Teste de transferência:

```bash
k6 run tests/transferencias.test.js -e BASE_URL=http://localhost:3000
```

Com dashboard e relatório:

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.tests.js -e BASE_URL=http://localhost:3000
```

---

## Repositório

Disponível em:

https://github.com/LariyeeRamos/banco-api-performance# banco-api-performance
