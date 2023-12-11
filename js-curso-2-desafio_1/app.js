let titulo = document.querySelector ("h1"); 
titulo.innerHTML = "Hora do Desafio"; 

function botaoConsole() {
    console.log("Você pressionou o botão");
}

function botaoAlerta() {
    alert ("Eu amo JavaScript");
}


function botaoPrompt() {
    let nomeCidade = prompt ("Qual sua cidade favorita?");
    alert (`Estive em ${nomeCidade} e me lembrei de você`); 
}

function botaoSoma(){
    let numero1 = parseInt(prompt ("Digite o número de sua escolha")); 
    let numero2 = parseInt(prompt ("Digite outro número")); 
    let resultado = numero1 + numero2;
    alert (`A soma de ${numero1} + ${numero2} é ${resultado}`);
}

