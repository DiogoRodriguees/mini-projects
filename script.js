var minutos = document.getElementById("minutes");
var segundos = document.getElementById("seconds");
var milisegundos = document.getElementById("milliseconds");
var horas = document.getElementById("horas");

var cronometro = document.getElementById("cronometro");
var parar = document.getElementById("parar");
var iniciar = document.getElementById("iniciar");
var resetar = document.getElementById("resetar");

var totalMilliseconds = 0;
var interval;

function resetarCronometro() {
    iniciar.textContent = "Iniciar";
    resetTimer();
}

function iniciarCronometro() {
    iniciar.textContent = "Continuar";
    startTimer();
}

function startTimer() {
    interval = setInterval(updateTimer, 10); // Atualiza o cronômetro a cada 10 milissegundos
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    totalMilliseconds = 0;
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

// Exemplo de uso
cronometro.addEventListener("click", startTimer);
parar.addEventListener("click", stopTimer);
iniciar.addEventListener("click", iniciarCronometro);
resetar.addEventListener("click", resetarCronometro);
