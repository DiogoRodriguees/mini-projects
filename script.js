var minutos = document.getElementById("minutes");
var segundos = document.getElementById("seconds");
var milisegundos = document.getElementById("milliseconds");
var horas = document.getElementById("horas");

var timerBtn = document.getElementById("timer");
var cronometro = document.getElementById("cronometro");
var parar = document.getElementById("parar");
var iniciar = document.getElementById("iniciar");
var resetar = document.getElementById("resetar");

let opcaoAtiva = "timer";
let timerClock = 0;
var totalMilliseconds = 0;
var interval;


function iniciarCronometro(tempo) {
    // caso o timer ja esteja ativo
    resetTimer()
    
    iniciar.textContent = "Iniciar"
    
    // adicionar condição para nao sobreescrever os timer atual
    timerClock = 5000;

    if (opcaoAtiva === "cronometro") startTimer();
    if (opcaoAtiva === "timer") startTimerInvert();
}

function startTimerInvert() {
    interval = setInterval(regressTimer, 10); // Atualiza o cronômetro a cada 10 milissegundos
}

function regressTimer() {
    timerClock -= 10;

    if (timerClock <= 0) {
        resetTimer();
    }

    var milliseconds = Math.floor((timerClock % 1000) / 10);
    var seconds = Math.floor((timerClock / 1000) % 60);
    var minutes = Math.floor((timerClock / (1000 * 60)) % 60);

    milisegundos.textContent = pad(milliseconds, 2);
    segundos.textContent = pad(seconds, 2);
    minutos.textContent = pad(minutes, 2);
}

function startTimer() {
    interval = setInterval(updateTimer, 10); // Atualiza o cronômetro a cada 10 milissegundos
}

function stopTimer() {
    if(milisegundos > 0 || timerClock > 0){iniciar.textContent = "Continuar";

    clearInterval(interval);}
}

function resetTimer() {
    totalMilliseconds = 0;
    iniciar.textContent = "Iniciar";
    clearInterval(interval);
    updateTimer(1);
}

function updateTimer(number) {
    if (number !== 1) {
        totalMilliseconds += 10;
    }

    var milliseconds = Math.floor((totalMilliseconds % 1000) / 10);
    var seconds = Math.floor((totalMilliseconds / 1000) % 60);
    var minutes = Math.floor((totalMilliseconds / (1000 * 60)) % 60);

    milisegundos.textContent = pad(milliseconds, 2);
    segundos.textContent = pad(seconds, 2);
    minutos.textContent = pad(minutes, 2);
}

function pad(value, width) {
    value = value.toString();
    while (value.length < width) {
        value = "0" + value;
    }
    return value;
}

function ativarCronometro(){
    opcaoAtiva = "cronometro";
    timerBtn.style.backgroundColor = "#1e57d4";
    cronometro.style.backgroundColor = "rgb(255, 255, 39)";
    resetTimer();
}
function ativarTimer(){
    opcaoAtiva = "timer";
    timerBtn.style.backgroundColor = "rgb(255, 255, 39)";
    cronometro.style.backgroundColor = "#1e57d4";
    resetTimer()
}

// Exemplo de uso
timerBtn.addEventListener("click",ativarTimer);
cronometro.addEventListener("click", ativarCronometro);
parar.addEventListener("click", stopTimer);
iniciar.addEventListener("click", iniciarCronometro);
resetar.addEventListener("click", resetTimer);
