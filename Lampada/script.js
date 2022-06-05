const turnon = document.getElementById("turnon")
const turnoff = document.getElementById("turnof")
const lampada = document.getElementById("lamp")

function isLampBroken() {
    return lampada.src.indexOf("quebrada") > -1;
}
function lampOn() {
    if (!isLampBroken()) {
        lampada.src = "./img/ligada.jpg"
    }
}
function lampOff() {
    if (!isLampBroken()) {
        lampada.src = "./img/desligada.jpg"
    }
}
function lampBroken() {
    lampada.src = "./img/quebrada.jpg"
}

turnon.addEventListener("click", lampOn)
turnoff.addEventListener("click", lampOff)

lampada.addEventListener("mouseover", lampOn)
lampada.addEventListener("mouseout", lampOff)
lampada.addEventListener("dblclick", lampBroken)