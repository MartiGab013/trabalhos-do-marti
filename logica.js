// Função que será executada quando o botão for clicado

function adicionandoGiria(){
    // Pegando o valor inserido no input
    giria = document.getElementById("giriaInput").value 
    // selecionando a div onde os resultados (girias) serão exibidas
    resultadoDiv = document.getElementById("resultado")
    // verificando se o campo de texto não esta vazio
    if(giria){

        // criando um novo element <p> que contera a giria adicionada
        novaGiria = document.createElement("p")

        // definindo o conteúdo de texto do <p>
        novaGiria.textContent = `Giria adicionada: ${giria}`

        // adicionando o <p> dentro da div de resultados
        resultadoDiv.appendChild(novaGiria)

        // Limpando o campo de texto, após a giria ser adicionada 
        document.getElementById("giriaInput").value = ''

    }   else{
        // alertando o usario caso o campo esteja vazio
        alert("Por obséquio, insira uma gíria!")
    }

}