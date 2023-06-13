var minutos = document.getElementById("minutes");
var segundos = document.getElementById("seconds");
var milisegundos = document.getElementById("milliseconds");
var horas = document.getElementById("horas");
var iniciarTimer = document.getElementById("iniciartTimer");
var timerBtn = document.getElementById("timer");
var cronometro = document.getElementById("cronometro");
var parar = document.getElementById("parar");
var iniciar = document.getElementById("iniciar");
var resetar = document.getElementById("resetar");
var display = document.getElementById("display");
let opcaoAtiva = "timer";
let timerClock = 0;
var totalMilliseconds = 0;
var interval;
var timerInicializado = false;

function iniciarCronometro() {
    resetTimer();

    iniciar.textContent = "Iniciar";


    if (opcaoAtiva === "cronometro") startCronometro();
    if (opcaoAtiva === "timer") startTimerInvert();
}

function startTimerInvert() {
    timerInicializado = true;
    interval = setInterval(startTimer, 10); // Atualiza o cronômetro a cada 10 milissegundos
}

function startTimer() {
    timerClock -= 10;

    if (timerClock <= 0 && totalMilliseconds <=0) {
        resetTimer();
    }

    // Calcula o número de horas, arredondando para baixo
    var hr = Math.floor(timerClock / 3600000);

    // Calcula o número de minutos restantes
    var minutosRestantes = timerClock % 3600000;

    // Calcula o número de minutos, arredondando para baixo
    var minutes = Math.floor(minutosRestantes / 60000);

    // Calcula o número de segundos restantes
    var segundosRestantes = minutosRestantes % 60000;

    // Calcula o número de segundos, arredondando para baixo
    var seconds = Math.floor(segundosRestantes / 1000);

    // Calcula o número de milissegundos restantes
    var milliseconds = (segundosRestantes % 1000) / 10;

    milisegundos.textContent = pad(milliseconds, 2);
    segundos.textContent = pad(seconds, 2);
    minutos.textContent = pad(minutes, 2);
    horas.textContent = pad(hr, 2);
}

function startCronometro() {
    interval = setInterval(updateTimer, 10); // Atualiza o cronômetro a cada 10 milissegundos
}

function stopTimer() {
    if (milisegundos > 0 || timerClock > 0) {
        iniciar.textContent = "Continuar";

        clearInterval(interval);
    }

    timerInicializado = false;
}

function resetTimer() {
    totalMilliseconds = 0;
    timerClock = 0;
    iniciar.textContent = "Iniciar";
    timerInicializado = false;

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

function changeToCronometro() {
    opcaoAtiva = "cronometro";
    timerBtn.style.backgroundColor = "#1e57d4";
    cronometro.style.backgroundColor = "rgb(255, 255, 39)";
    resetTimer();
}

function changeToTimer() {
    document.getElementById("modal").style.display = "flex";
    opcaoAtiva = "timer";
    timerBtn.style.backgroundColor = "rgb(255, 255, 39)";
    cronometro.style.backgroundColor = "#1e57d4";
    resetTimer();
}

function receiveTime() {
    document.getElementById("modal").style.display = "none";
    var hora = document.getElementById("horaInput").value;
    var min = document.getElementById("minInput").value;
    var seg = document.getElementById("segInput").value;

    timerClock = hora * 360000 + min * 60000 + seg * 1000;

    document.getElementById("horaInput").value = 0;
    document.getElementById("minInput").value = 0;
    document.getElementById("segInput").value = 0;

    startTimerInvert();
}

function displayClick() {
    if (opcaoAtiva === "timer") {
        document.getElementById("modal").style.display = "flex";
    }
}

// Exemplo de uso

display.addEventListener("click", displayClick);
iniciarTimer.addEventListener("click", receiveTime);
timerBtn.addEventListener("click", changeToTimer);
cronometro.addEventListener("click", changeToCronometro);
parar.addEventListener("click", stopTimer);
iniciar.addEventListener("click", iniciarCronometro);
resetar.addEventListener("click", resetTimer);
