let forBase = document.getElementById("forBase")
let forD20 = document.getElementById("forD20")
let forMod = document.getElementById("forMod")
let forTotal = document.getElementById("forTotal")

let desBase = document.getElementById("desBase")
let desD20 = document.getElementById("desD20")
let desMod = document.getElementById("desMod")
let desTotal = document.getElementById("desTotal")

let conBase = document.getElementById("conBase")
let conD20 = document.getElementById("conD20")
let conMod = document.getElementById("conMod")
let conTotal = document.getElementById("conTotal")

let intBase = document.getElementById("intBase")
let intD20 = document.getElementById("intD20")
let intrMod = document.getElementById("intMod")
let intTotal = document.getElementById("intTotal")

let sabBase = document.getElementById("sabBase")
let sabD20 = document.getElementById("sabD20")
let sabMod = document.getElementById("sabMod")
let sabTotal = document.getElementById("sabTotal")

let carBase = document.getElementById("carBase")
let carD20 = document.getElementById("carD20")
let carMod = document.getElementById("carMod")
let carTotal = document.getElementById("carTotal")

let btnCalcular = document.getElementById("calcular")
let btnDado = document.getElementById("dado")
let resetar = document.getElementById("resetar")

console.log("Hello")

function gerarNumeroAleatorio(){
    let array_numeros_aleatorios = []
    for(let i = 0; i < 6; i++){
        array_numeros_aleatorios[i] = Math.floor(20* Math.random() + 1)
    }
    return array_numeros_aleatorios
}

function modificador(numeros_aleatorios){
    numeros_d20 = numeros_aleatorios

    let mod = []

    for(let i = 0; i < 6; i++){
        valor = numeros_d20[i]

        if(valor > 15){
            mod[i] = Math.round(1 +(valor/1.2))
        } else if (valor > 7){
            mod[i] = (0 +(valor/1.2)).toFixed(0)
        } else{
            mod[i] = Math.round(-1 +(valor/1.2)) 
        }
    }

    console.log(mod)
    forMod.value = mod[0]
    desMod.value = mod[1]
    conMod.value = mod[2]
    intrMod.value = mod[3]
    sabMod.value = mod[4]
    carMod.value = mod[5]
}

function calcular(){
    forTotal.value = Number(forBase.value) + Number(forMod.value);
    desTotal.value = Number(desBase.value) + Number(desMod.value);
    conTotal.value = Number(conBase.value) + Number(conMod.value);
    intTotal.value = Number(intBase.value) + Number(intrMod.value);
    sabTotal.value = Number(sabBase.value) + Number(sabMod.value);
    carTotal.value = Number(carBase.value) + Number(carMod.value);
}

function recarregarPagina(){
    window.location.reload(true);
}

function camposD20(){
    numeros_d20 = gerarNumeroAleatorio()
    forD20.value = numeros_d20[0]
    desD20.value = numeros_d20[1]
    conD20.value = numeros_d20[2]
    intD20.value = numeros_d20[3]
    sabD20.value = numeros_d20[4]
    carD20.value = numeros_d20[5]

    modificador(numeros_d20)
}

btnCalcular.addEventListener("click", calcular)
resetar.addEventListener("click", recarregarPagina)
btnDado.addEventListener("click", camposD20)