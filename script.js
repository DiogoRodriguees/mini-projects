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
var timerAtivo = false;
var cronometroAtivo = false;
var cancelar = document.getElementById("cancelar");

function iniciarCronometro() {
    // reseta
    if (totalMilliseconds <= 0 && timerClock <= 0) {
        resetTimer();
    }

    iniciar.textContent = "Iniciar";

    if (opcaoAtiva === "cronometro") startCronometro();
    if (opcaoAtiva === "timer") startTimer();
}
function startCronometro() {
    clearInterval(interval);
    interval = setInterval(updateCronometro, 10); // Atualiza o cronômetro a cada 10 milissegundos
}
function startTimer() {
    timerAtivo = true;
    clearInterval(interval);
    interval = setInterval(updateTimer, 10); // Atualiza o cronômetro a cada 10 milissegundos
}

function updateTimer() {
    timerClock -= 10;

    if (timerClock <= 0 && totalMilliseconds <= 0) {
        resetTimer();
    }

    var hr = Math.floor(timerClock / 3600000);
    var minutosRestantes = timerClock % 3600000;
    var minutes = Math.floor(minutosRestantes / 60000);
    var segundosRestantes = minutosRestantes % 60000;
    var seconds = Math.floor(segundosRestantes / 1000);
    var milliseconds = (segundosRestantes % 1000) / 10;

    milisegundos.textContent = pad(milliseconds, 2);
    segundos.textContent = pad(seconds, 2);
    minutos.textContent = pad(minutes, 2);
    horas.textContent = pad(hr, 2);
}

function stopTimer() {
    if (totalMilliseconds > 0 || timerClock > 0) {
        iniciar.textContent = "Continuar";
        clearInterval(interval);
    }

    timerAtivo = false;
}

function resetTimer() {
    // zerando os milisegundos do TIMER e do CRONOMETRO
    timerClock = 0;
    totalMilliseconds = 0;

    // alterando o botao "continuar" para o estado inicial "iniciar"
    iniciar.textContent = "Iniciar";
    timerAtivo = false;
    cronometroAtivo = false;

    // finalizar o interbal e atualiza o display
    clearInterval(interval);

    // parametro 1 passado para evitar o incremento de 10 quando resetar
    updateCronometro(1);
}

function updateCronometro(number) {
    // função resetTimer() envia 1 como parametro para evitar atribuição ao resetar
    if (number !== 1) {
        totalMilliseconds += 10;
    }

    // conventendo os milisegundos em HORA, MINUTO, SEGUNDO, MILISEGUNDO
    var milliseconds = Math.floor((totalMilliseconds % 1000) / 10);
    var seconds = Math.floor((totalMilliseconds / 1000) % 60);
    var minutes = Math.floor((totalMilliseconds / (1000 * 60)) % 60);
    var hr = Math.floor(totalMilliseconds / 360000);

    // adicionando os valores no display
    milisegundos.textContent = pad(milliseconds, 2);
    segundos.textContent = pad(seconds, 2);
    minutos.textContent = pad(minutes, 2);
    horas.textContent = pad(hr, 2);
}

// Mantém o par de digitos para numeros com apenas 1 digito (Ex: 1 => 01)
function pad(value, width) {
    value = value.toString();
    while (value.length < width) {
        value = "0" + value;
    }
    return value;
}

// Prepara a ferramento para ser utilizada como CRONOMETRO
function changeToCronometro() {
    // altera o estado da ferramenta
    opcaoAtiva = "cronometro";

    // colorização para visualização do estado ativo
    timerBtn.style.backgroundColor = "#1e57d4";
    cronometro.style.backgroundColor = "rgb(255, 255, 39)";

    // zera o display para executar o estado atual
    resetTimer();
}

// Prepara a ferramento para ser utilizada como TIMER
function changeToTimer() {
    // torna o modal visivel
    document.getElementById("modal").style.display = "flex";

    // altera o estado da ferramenta
    opcaoAtiva = "timer";

    // colorização para visualização do estado ativo
    timerBtn.style.backgroundColor = "rgb(255, 255, 39)";
    cronometro.style.backgroundColor = "#1e57d4";

    // zera o display para executar o estado ativo
    resetTimer();
}

// Receve os valores do display e tranforma em milisegundos
function receiveTime() {
    // Esconde o modal
    document.getElementById("modal").style.display = "none";

    // recebendo os valores de cada input
    var hora = document.getElementById("horaInput").value;
    var min = document.getElementById("minInput").value;
    var seg = document.getElementById("segInput").value;

    // convertendo os valores para milisegundos
    timerClock = hora * 360000 + min * 60000 + seg * 1000;

    // reseta os valores para a proxima abertura do modal
    document.getElementById("horaInput").value = 0;
    document.getElementById("minInput").value = 0;
    document.getElementById("segInput").value = 0;

    // iniciar o TIMER
    startTimer();
}

// Ativa o modal para inserir o tempo do TIMER
function displayClick() {
    if (opcaoAtiva === "timer") {
        document.getElementById("modal").style.display = "flex";
    }
}

// Ao clicar no display o modal para informar o tempo do timer ira aparecer
display.addEventListener("click", displayClick);

iniciarTimer.addEventListener("click", receiveTime);

// Botoes dos estados (Timer e Cronometro)
timerBtn.addEventListener("click", changeToTimer);
cronometro.addEventListener("click", changeToCronometro);

// Funções disponiveis para cada estado(Cronometro e Timer)
iniciar.addEventListener("click", iniciarCronometro);
parar.addEventListener("click", stopTimer);
resetar.addEventListener("click", resetTimer);
cancelar.addEventListener(
    "click",
    () => (document.getElementById("modal").style.display = "none")
);
