const nome = document.getElementById('name');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

botao-cadastro.addEventListener ('click', criarCadastro);

function criarCadastro () {
    if (login == "danilo"){
            alert ("Login realizado com sucesso")
            window.open("growbank.html")
    } else alert("Login ou senha incorretos")

}
        
