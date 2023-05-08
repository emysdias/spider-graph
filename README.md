# 🕷️ Spider Graph

Esse projeto resolve esse problema abaixo:

Um projeto tem uma lista de dependências que precisam ser instaladas. Por
exemplo:

Projeto X: Dependências A, B, C, D, E

Cada dependência tem também uma lista de dependências. Por exemplo:

Dep. A: B, C

Dep. D: E

Esse programa imprime a ordem que as dependências precisam ser instaladas.

Solução possível: E, C, B, D, A

## Testes

- Para fazer os testes e dar tudo certo:

* Em "Adicione a(s) dependência(s) do projeto", deve ser adicionado as depêndencias com o valor seguido de uma vírgula e espaço, exemplo: "A, B, C, D, E"

* Em "Adicione a(s) dependência(s) da(s) dependência(s) do projeto", no primeiro input "Dep", deve ser colocado uma dependência adicionado no input anterior. No input em frente do de Dep, deve ser adicionado as dependências das dependências, como o primeiro input, exemplo: "B, C"...

Segue o vídeo abaixo com um exemplo, e demonstração de ser responsivo (Caso ocorra um erro, o vídeo está na pasta "src/Assets/demonstracao.mp4"):

![Reunião-com-Emily-Dias-Sousa-20230507_214957-Gravação-de-Reunião-_online-video-cutter com_](https://user-images.githubusercontent.com/52640974/236712366-5cad9adf-f734-48b4-be4a-d734ca839822.gif)

## 🔨 Restrições

- Biblioteca de terceiros está sendo usada, o que um dia pode causar problemas. (mui/material)

## ✔️ Pré requisitos

- Node/ npm.
- Yarn.

## 💼 Características

- O código está com npm na versão 9.5.1
- Foi desenvolvido no sistema Ubuntu 22.04.2 LTS

## 👉 Como rodar

Para clonar o repositório

```bash
$ git clone https://github.com/emysdias/spider-graph.git
```

Entre no repositório e instale as dependências

```bash
$ npm install
```

or

```bash
$ yarn install
```

Finalmente, rode a aplicação

```bash
$ npm start
```

or

```bash
$ yarn start
```

Link do deploy: https://main--spider-graph-emily.netlify.app/

🚀🚀🚀🚀🚀🚀🚀
