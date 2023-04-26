const teclas = document.querySelectorAll('[id*=tecla]')
const display = document.querySelector('#display')
const clean = document.querySelector('#clean')
const igual = document.querySelector('#igual')
const backspace = document.querySelector('#backspace')
const operadores = document.querySelectorAll('[id*=operador]')
const inverter = document.querySelector("#inverter")

let numeroAnterior
let novoNumero = true
let operador = undefined

const operaçãoPendente = () => operador !== undefined


const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent)
teclas.forEach((teclas) => teclas.addEventListener('click', inserirNumero))

const atualizarDisplay = (texto) => {
    if (novoNumero) {
        display.textContent = texto
        novoNumero = false
    }
    else {
        display.textContent += texto
    }
}

const calcular = () => {
    if (operaçãoPendente()) {
        let numeroAtual = display.textContent
        let resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`)
        novoNumero = true
        atualizarDisplay(resultado)
    }
}

const selecionarOperador = (evento) => {

    if (!novoNumero) {
        calcular()
        operador = evento.target.textContent
        numeroAnterior = display.textContent
        novoNumero = true
    }

}
operadores.forEach((operadores) => operadores.addEventListener('click', selecionarOperador))

const limparDisplay = () => {
    display.textContent = ''
}


// Limpa o historico
const limpar = () => {
    limparDisplay()
    operador = undefined
    novoNumero = true
}
clean.addEventListener("click", limpar)

// Mostra o resultado
const ativarIgual = () => {
    calcular()
    operador = undefined
}
igual.addEventListener("click", ativarIgual)

// Apaga o ultimo digito
const apagar = () => {
    display.textContent = display.textContent.slice(0, -1)
}
backspace.addEventListener("click", apagar)

// Muda o sinal do numero que esta no display
const inverterSinal = () => {
    display.textContent = display.textContent * -1
}
inverter.addEventListener("click", inverterSinal)

