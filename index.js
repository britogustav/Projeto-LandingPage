var SetaDireita = window.document.getElementById("setaDireita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var SetaEsquerda = window.document.getElementById("setaesquerda")


function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaEsquerda.style = "display:flex; margin-top:75px"
    SetaDireita.style = "display:none"
}

function RolarParaEsquerda() {
    Bruna.style = "display:none"
    Leonardo.style= "display:flex"
    SetaEsquerda.style = "display:none"
    SetaDireita.style = "display:flex; margin-top:75px" 
}