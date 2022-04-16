logar.addEventListener ('click', criarUser);

function criarUser () {
    const login = (document.getElementById('login').value);
    const senha = parseInt(document.getElementById('senha').value);
 if (login === "danilo" && senha === 123){
            alert ("Login realizado com sucesso")
           window.open("growbank.html")
    } else {
        alert("Login ou senha incorretos") 
        console.log (login)}
}
