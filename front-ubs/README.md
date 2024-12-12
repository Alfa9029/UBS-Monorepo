# Documentação do Frontend

## Visão Geral

Este projeto é uma aplicação frontend desenvolvida com React, utilizando o Create React App. A aplicação permite a interação com uma API backend para gerenciar Unidades Básicas de Saúde (UBS), médicos e campanhas de vacinação.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
frontend/
    .gitignore
    package.json
    postcss.config.js
    public/
        index.html
        manifest.json
        robots.txt
    README.md
    src/
        App.css
        App.js
        App.test.js
        axiosConfig.js
        components/
            Agenda.js
            Calendario.js
            Dashboard.js
            Footer.js
            Header.js
            ListaProf.js
            ListaUBS.js
            LoginForm.js
        index.css
        index.js
        reportWebVitals.js
        setupTests.js
    tailwind.config.js
```

### Descrição dos Arquivos e Pastas

- **public/**: Contém arquivos públicos que não são processados pelo Webpack.
  - 

index.html

: Arquivo HTML principal.
  - 

manifest.json

: Arquivo de configuração do manifesto da aplicação.
  - 

robots.txt

: Arquivo de configuração para bots de busca.

- **src/**: Contém o código-fonte da aplicação.
  - 

App.css

: Estilos globais da aplicação.
  - 

App.js

: Componente principal da aplicação que define as rotas.
  - 

App.test.js

: Testes para o componente App.
  - 

axiosConfig.js

: Configuração do Axios para fazer requisições HTTP.
  - `components/`: Contém os componentes React utilizados na aplicação.
    - 

Agenda.js

: Componente para registrar campanhas de vacinação.
    - 

Calendario.js

: Componente para visualizar o calendário de campanhas.
    - 

Dashboard.js

: Componente para registrar profissionais de saúde.
    - 

Footer.js

: Componente de rodapé da aplicação.
    - 

Header.js

: Componente de cabeçalho da aplicação.
    - 

ListaProf.js

: Componente para listar profissionais de saúde.
    - 

ListaUBS.js

: Componente para listar Unidades Básicas de Saúde.
    - 

LoginForm.js

: Componente de formulário de login.
  - 

index.css

: Estilos globais adicionais.
  - 

index.js

: Ponto de entrada da aplicação React.
  - 

reportWebVitals.js

: Utilitário para medir a performance da aplicação.
  - 

setupTests.js

: Configuração para testes com Jest.

- **tailwind.config.js**: Configuração do Tailwind CSS.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Roda a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver no navegador.

A página será recarregada quando você fizer alterações.\
Você também verá erros de lint no console.

### 

npm test



Inicia o executor de testes no modo interativo.\
Veja a seção sobre [executando testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Compila a aplicação para produção na pasta `build`.\
Ele corretamente agrupa o React no modo de produção e otimiza a compilação para a melhor performance.

A compilação é minificada e os nomes dos arquivos incluem os hashes.\
Sua aplicação está pronta para ser implantada!

Veja a seção sobre [deploy](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `npm run eject`

**Nota: esta é uma operação sem retorno. Uma vez que você `eject`, você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de construção e as escolhas de configuração, você pode `eject` a qualquer momento. Este comando removerá a dependência única de construção do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (Webpack, Babel, ESLint, etc) diretamente para o seu projeto para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas eles apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto, você está por sua conta.

Você nunca precisa usar `eject`. O conjunto de recursos curado é adequado para pequenas e médias implantações, e você não deve se sentir obrigado a usar este recurso. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estivesse pronto para isso.

## Configuração do Axios

O arquivo 

axiosConfig.js

 configura o Axios para fazer requisições HTTP para o backend:

```js
import axios from "axios";

const api = axios.create({
  baseURL: " https://ubs-backend-pn16.onrender.com/api/ubs", // URL do backend
});

export default api;
```

## Componentes Principais

### 

App.js



Define as rotas principais da aplicação utilizando `react-router-dom`.

### 

LoginForm.js



Componente de formulário de login que autentica o usuário utilizando credenciais básicas.

### 

Dashboard.js



Componente para registrar profissionais de saúde e salvar os dados no Local Storage.

### 

Agenda.js



Componente para registrar campanhas de vacinação e enviar os dados para o backend.

### 

Calendario.js



Componente para visualizar o calendário de campanhas de vacinação.

### 

ListaProf.js



Componente para listar os profissionais de saúde registrados.

### 

ListaUBS.js



Componente para listar as Unidades Básicas de Saúde e exibir suas localizações em um mapa.

### 

Header.js

 e 

Footer.js



Componentes de cabeçalho e rodapé da aplicação, respectivamente.

## Estilos

Os estilos são gerenciados utilizando Tailwind CSS, configurado no arquivo 

tailwind.config.js

.

## Testes

Os testes são configurados utilizando Jest e `@testing-library/react`. O arquivo 

setupTests.js

 configura o ambiente de testes.

## Conclusão

Esta documentação fornece uma visão geral da estrutura e funcionalidade do frontend da aplicação. Para mais detalhes sobre como usar e desenvolver a aplicação, consulte os arquivos de código e a documentação do Create React App.