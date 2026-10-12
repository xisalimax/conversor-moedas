# Câmbio | Conversor de Moedas

Aplicação web para conversão de moedas, desenvolvida com **HTML5, CSS3 e JavaScript**, com consulta de taxas de câmbio por meio da API Frankfurter.

**[Acessar o site](https://xisalimax.github.io/conversor-moedas/)** | **[Ver código-fonte](https://github.com/xisalimax/conversor-moedas)**

---

## Sobre o projeto

O Câmbio é um projeto pessoal desenvolvido com o objetivo de praticar e consolidar conhecimentos em desenvolvimento web front-end, lógica de programação, manipulação do DOM e integração com APIs externas.

A aplicação permite selecionar moedas de origem e destino, informar um valor e consultar o resultado da conversão em uma interface simples e intuitiva.

## Funcionalidades

- Conversão entre dólar americano (USD), real brasileiro (BRL), euro (EUR), libra esterlina (GBP) e iene japonês (JPY).
- Consulta de taxas de câmbio por meio de uma API externa.
- Atualização do resultado conforme o valor e as moedas selecionadas.
- Inversão das moedas de origem e destino.
- Exibição da taxa de câmbio e da data de referência retornada pela API.
- Formatação de valores monetários.
- Exibição de bandeiras associadas às moedas.
- Validação de entradas e tratamento de falhas na consulta.

## Tecnologias utilizadas

- **HTML5** — estrutura da aplicação.
- **CSS3** — estilização e layout.
- **JavaScript** — lógica de conversão, eventos e manipulação do DOM.
- **Frankfurter API** — consulta de taxas de câmbio.
- **Git e GitHub** — versionamento e gerenciamento do código.
- **GitHub Pages** — hospedagem da aplicação.

## Como acessar

A aplicação está publicada e pode ser utilizada diretamente pelo navegador:

**[https://xisalimax.github.io/conversor-moedas/](https://xisalimax.github.io/conversor-moedas/)**

## Como executar localmente

É necessário ter o Git instalado e uma conexão com a internet para acessar os recursos externos utilizados pela aplicação.

1. Clone o repositório:

   ```bash
   git clone https://github.com/xisalimax/conversor-moedas.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd conversor-moedas
   ```

3. Abra o arquivo `index.html` no navegador ou utilize a extensão Live Server no Visual Studio Code.

Não é necessário instalar dependências para executar a versão atual do projeto.

## Estrutura do projeto

```text
conversor-moedas/
├── index.html
├── style.css
├── script.js
└── README.md
```

- `index.html`: estrutura da página.
- `style.css`: estilos e apresentação visual.
- `script.js`: lógica de conversão e integração com a API.
- `README.md`: documentação do projeto.

## API utilizada

O projeto utiliza a [Frankfurter API](https://frankfurter.dev/) para consultar taxas de câmbio.

As taxas dependem dos dados disponibilizados pela API e da respectiva data de referência. Portanto, os valores apresentados não devem ser considerados cotações comerciais em tempo real.

## Conhecimentos praticados

- Desenvolvimento de interfaces com HTML e CSS.
- Lógica de programação com JavaScript.
- Manipulação do DOM e tratamento de eventos.
- Requisições HTTP com `fetch()`.
- Consumo de APIs e processamento de respostas JSON.
- Validação de dados e tratamento de erros.
- Controle de versão com Git e GitHub.
- Publicação de aplicações estáticas com GitHub Pages.

## Autora

**Isabella Lima**

Estudante de Análise e Desenvolvimento de Sistemas na PUC Minas, em transição de carreira para a área de tecnologia.

- **GitHub:** [xisalimax](https://github.com/xisalimax)
- **LinkedIn:** [Acessar perfil profissional](https://www.linkedin.com/in/isabellaolima)

---

*Projeto desenvolvido para fins de aprendizado e portfólio profissional.*
