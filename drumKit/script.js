'use strict';

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'I': 'snare.wav',
    'J': 'tink.wav',
    'K': 'tom.wav'
}

const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key'); // Adiciona uma classe para a div
    div.textContent = texto; // Adiciona o conteudo da div
    div.id = texto; // Adiciona um id 
    document.getElementById('container').appendChild(div); // coloca a div dentro de outra div com id="container"
}

const exibir = (sons) => {
    // cria um objeto com os sons e cria uma div para cada item
    Object.keys(sons).forEach(criarDiv); 
}

const tocarSom = (letra) => {
    // cria a variavel audio e passa o endereço do som
    const audio = new Audio(`./sounds/${sons[letra]}`);

    audio.play();
}

const adicionarEfeito = (letra)=>{
    document.getElementById(letra).classList.add('active');
}

const removeEfeito = (letra)=>{
    const div = document.getElementById(letra)
    const removeActive = ()=>{
        div.classList.remove('active')
    }
    div.addEventListener('transitionend', removeActive)
}

const ativarDiv = (evento) => {
    // console.log(evento.target.id); //mostra no console onde foi clicado
    // console.log(evento); //mostra no console o target
    const letra = evento.type == 'click' ? evento.target.id :evento.key.toUpperCase();
    const letraPermitida = sons.hasOwnProperty(letra);
    if(letraPermitida){
        adicionarEfeito(letra)
        tocarSom(letra);
        removeEfeito(letra)
    }
}

exibir(sons);
document.getElementById('container').addEventListener('click', ativarDiv)
window.addEventListener('keydown',ativarDiv)