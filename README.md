Especificações técnicas para atuar na aplicação:
Download do MYSQL/workbench
https://www.mysql.com/downloads/

Download Node
 http://nodejs.org
Após baixar o Node seguir os comandos que se encontram no link abaixo para instalação do Angular
https://cli.angular.io/

Download do Visual Studio 2019
https://visualstudio.microsoft.com/pt-br/downloads/
Download .NET Core 2.2
https://dotnet.microsoft.com/download/dotnet-core/thank-you/sdk-2.2.202-windows-x64-installer

Após fazer o clone do repositório abrir o projeto no Visual Studio.

Com o projeto aberto acessar Ferramentas > Gerenciador de pacotes do Nuget > Console gerenciador de pacotes
Quando acessar o console o mesmo deve estar com a opção QuickBuy.Repositorio na aba projeto padrão.
Executar o comando Migrations “MinhaDataBase” no console, o sistema irá criar um mapa do banco de dados baseado no modelo de classes. 
Em seguida executar o comando Update-Database no console para subir a base de dados.

Usar o WorkBench para criar um usuário administrador para poder acessar a aplicação, usar o comando: INSERT INTO usuarios (Email,Senha,Nome,SobreNome,EhAdministrador) VALUES ("admin@teste","1234", "seu nome", "seu sobrenome", true)

Essas são as tecnologias e configurações para rodar a aplicação
