//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let amigos = document.querySelector ('input').value;
    if (amigos == '') {
        alert ('DIGITE UM NOME VALIDO');
    } else {
            console.log(amigos);
            listaAmigos.push(amigos);
            amigos = document.querySelector ('input');
            amigos.value = '';
            exibirTextoNaTela('h5',listaAmigos);
            
        }
    }

function sortearAmigo() {
    sorteio = listaAmigos.length;
    if (sorteio == 0) {
        alert ('ADICIONE UM NOME PRIMEIRO');
    } else {
        console.log(sorteio);
        let amigoSorteado = parseInt(Math.random() * sorteio);
        console.log(listaAmigos[amigoSorteado]);
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    }



