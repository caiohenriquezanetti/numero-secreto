let listaNumerosSorteados = [];
let numeroLimite = 70;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.1});
}

function exibirMensagemInicial (){
    exibirTextoNaTela("h1", "Descubra o número, ou volte para o bueiro");
    exibirTextoNaTela ("p", "Digite um número entre 1 e 70"); 
}

exibirMensagemInicial();

function verificarChute () {
    let chute = document.querySelector("input").value;
    
    if(chute == numeroSecreto) {
        exibirTextoNaTela("h1", "ACERTOU RATAZANA!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o Número Secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela("h1", "ERROU RATAZANA");
            exibirTextoNaTela("p", `O Número Secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela("h1", "ERROU RATAZANA");
            exibirTextoNaTela("p", `O Número Secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio () {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite){
    listaNumerosSorteados = [];
  }
  if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados);
    return numeroEscolhido;
  }
}


function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

