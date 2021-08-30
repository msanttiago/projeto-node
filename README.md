# projeto-node
Projeto para estudo Node.js
 
projeto-node
Iniciar um projeto node no gitHub
Criar um repositório (private ou public) Escolher a tecnologia (.gitignore), caso disponível Escolher a opção README.md
 
Clonar o projeto para o computador local
Escolher a pasta correspondente aos seus projetos Escolher um editor eficiente (VsCode, Atom, SublimeText, NetBeans, WebStorm ...)
 
### Tendo acesso ao prompt de comando
-> git clone "endereço do projeto no git hub"
 
exemplo:
-> git clone https://github.com/Helivelto/projeto-node.git
 
### Iniciar o arquivo de configuração package.json
-> npm init -y
 
### configuraçãp dp npm 'NA ESCOLA' (basta 1 vez)
npm set strict-ssl false 
npm config set registry https://registry.npmjs.org/
 
### configuração da comunicação com o github "NA ESCOLA" (basta 1 vez)
git config --global http.sslVerify false
 
### Instalação de dependencias
npm install "NOME DA TECNOLOGIA"
 
Exemplo: -> npm install express
 
Sempre pesquisar a tecnologia no site que contém a documentação oficial exemplo (npm, yarn ) Exemplo: -> npm install express -> yarn add express
 
Obs: A pasta node_modules contém todas as tecnologias (dependencias) de terceiros
 
### Desinstalando uma dependencia
Não excluir qualquer pasta dentro de node_modules
 
-> npm uninstall express (por exemplo)
 
### Executando o servidor
node "NOME DO ARQUIVO" Exemplo: node app
 
### Instalação como devdependencies
( São tecnologias utilizadas apenas durante o desenvolvimento do projeto em específico )
npm install nodemon -D    (por exemplo)
 
### Inicando tecnologias ou scripts utilizando atalhos
No package.json
 
"scripts": {
  "dev": "nodemon server.js"
}
 
No prompt você executa:
npm run dev