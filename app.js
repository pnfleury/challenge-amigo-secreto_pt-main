//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];
var x = document.querySelector ('h4');

function adicionarAmigo() {
    exibirTextoNaTela('p','Sortear Amigo')
    let amigos = document.querySelector ('input').value;
    if (amigos == '') {
        alert ('DIGITE UM NOME VALIDO');} 
    else {
            trocaClasse(x,'amigo-sorteado','lista-amigos');
            listaAmigos.push(amigos);
            amigos = document.querySelector ('input');
            amigos.value = '';
            exibirTextoNaTela('h4',listaAmigos);
       }
    }

function sortearAmigo() {
    sorteio = listaAmigos.length;
    if (sorteio == 0) {
        alert ('ADICIONE UM NOME PRIMEIRO');} 
    else {
        let amigoSorteado = parseInt(Math.random() * sorteio);
        trocaClasse(x,'lista-amigos','amigo-sorteado');
        exibirTextoNaTela('h4',listaAmigos[amigoSorteado]);
        exibirTextoNaTela('p','Amigo Sorteado')
        listaAmigos=[];        
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    }


function trocaClasse(elemento, antiga, nova) {
    elemento.classList.remove(antiga);
    elemento.classList.add(nova);
}

   