
const selecao = "Brasil"
const vitorias = Number(5)
const campeao = Boolean(true)

const selecao2 = "Espanha"
const vitorias2 = Number(1)
const campeao2 = Boolean(true)

const selecao3 = "Chile"
const vitorias3 = Number(3)
const campeao3 = Boolean(false)

const selecao4 = "Alemanha"
const vitorias4 = Number(4)
const campeao4 = Boolean(true)

const selecao5 = "Itália"
const vitorias5 = Number(4)
const campeao5 = Boolean(true)

const selecao6 = "Uruguai"
const vitorias6 = Number(2)
const campeao6 = Boolean(true)

const selecao7 = "França"
const vitorias7 = Number(2)
const campeao7 = Boolean(true)

const selecao8 = "Argentina"
const vitorias8 = Number(2)
const campeao8 = Boolean(true)

const selecao9 = "Inglaterra"
const vitorias9 = Number(1)
const campeao9 = Boolean(true)


const vitoriastotal = vitorias + vitorias2 + vitorias3 + vitorias4 + vitorias5 + vitorias6 + vitorias7 + vitorias8 + vitorias9
const vitoriastotal2 = vitorias / 3

const campeaodomundo = (campeao && campeao2 && campeao3 && campeao4 && campeao5 && campeao6 && campeao7 && campeao8 && campeao9)

const arrayselecao = [`camisa amarela`]
const arraydetalhe = arrayselecao

const arrayselecao2 = [`camisa vermelha`]
const arraydetalhe2 = arrayselecao2

const arrayselecao3 = [`camisa branca`]
const arraydetalhe3 = arrayselecao3

const arrayselecao4 = [`camisa branca`]
const arraydetalhe4 = arrayselecao4

const arrayselecao5 = [`camisa azul`]
const arraydetalhe5 = arrayselecao5

const arrayselecao6 = [`camisa azul celeste`]
const arraydetalhe6 = arrayselecao6

const arrayselecao7 = [`camisa azul`]
const arraydetalhe7 = arrayselecao7

const arrayselecao8 = [`camisa azul`]
const arraydetalhe8 = arrayselecao8

const arrayselecao9 = [`camisa branca`]
const arraydetalhe9 = arrayselecao9


const todososdados = (`${selecao.toLocaleUpperCase()} \nVitórias: ${vitorias}  \nCampeão: ${campeao} \nDetalhe: ${arraydetalhe}`)
const todososdados2 = (`${selecao2.toLocaleUpperCase()} \nVitórias: ${vitorias2}  \nCampeão: ${campeao2} \nDetalhe: ${arraydetalhe2}`)
const todososdados3 = (`${selecao3.toLocaleUpperCase()} \nVitórias: ${vitorias3}  \nCampeão: ${campeao3} \nDetalhe: ${arraydetalhe3}`)
const todososdados4 = (`${selecao4.toLocaleUpperCase()} \nVitórias: ${vitorias4}  \nCampeão: ${campeao4} \nDetalhe: ${arraydetalhe4}`)
const todososdados5 = (`${selecao5.toLocaleUpperCase()} \nVitórias: ${vitorias5}  \nCampeão: ${campeao5} \nDetalhe: ${arraydetalhe5}`)
const todososdados6 = (`${selecao6.toLocaleUpperCase()} \nVitórias: ${vitorias6}  \nCampeão: ${campeao6} \nDetalhe: ${arraydetalhe6}`)
const todososdados7 = (`${selecao7.toLocaleUpperCase()} \nVitórias: ${vitorias7}  \nCampeão: ${campeao7} \nDetalhe: ${arraydetalhe7}`)
const todososdados8 = (`${selecao8.toLocaleUpperCase()} \nVitórias: ${vitorias8}  \nCampeão: ${campeao8} \nDetalhe: ${arraydetalhe8}`)
const todososdados9 = (`${selecao9.toLocaleUpperCase()} \nVitórias: ${vitorias9}  \nCampeão: ${campeao9} \nDetalhe: ${arraydetalhe9}`)

console.log(vitoriastotal2)

console.log(campeaodomundo)

console.log(todososdados)
console.log(todososdados2)
console.log(todososdados3)
console.log(todososdados4)
console.log(todososdados5)
console.log(todososdados6)
console.log(todososdados7)
console.log(todososdados8)
console.log(todososdados9)

// semana 2

const objeto1 = {
selecao :"Brasil",
vitorias : Number(5),
campeao : Boolean(true)
}

const objeto2 = {
selecao2 : "Espanha",
vitorias2 : Number(1),
campeao2 : Boolean(true)
}

const objeto3 = {
selecao3 : "Chile",
vitorias3 : Number(3),
campeao3 : Boolean(false)    
}

const objeto4 = {
selecao4 : "Alemanha",
vitorias4 : Number(4),
campeao4 : Boolean(true)    
}

const objeto5 = {
selecao3 : "Itália",
vitorias3 : Number(4),
campeao3 : Boolean(true)    
}

const objeto6 = {
selecao3 : "Uruguai",
vitorias3 : Number(2),
campeao3 : Boolean(true)     
}

const objeto7 = {
selecao3 : "França",
vitorias3 : Number(2),
campeao3 : Boolean(true)     
}

const objeto8 = {
selecao3 : "Argentina",
vitorias3 : Number(2),
campeao3 : Boolean(true)     
}

const objeto9 = {
selecao3 : "Inglaterra",
vitorias3 : Number(1),
campeao3 : Boolean(true)     
}


const array = []

if (campeao === true){

    array.push(objeto1)
}

else {(alert("Objeto selecao não foi adicionado"))}

if (campeao2 === true){

    array.push(objeto2)
}

else {(alert("Objeto selecao2 não foi adicionado"))}

if (campeao3 === true){

    array.push(objeto3)
}

else {(alert("Objeto selecao3 não foi adicionado"))}



if (campeao4 === true){

    array.push(objeto4)
}

else {(alert("Objeto selecao4 não foi adicionado"))}

if (campeao5 === true){

    array.push(objeto5)
}

else {(alert("Objeto selecao5 não foi adicionado"))}

if (campeao6 === true){

    array.push(objeto6)
}

else {(alert("Objeto selecao6 não foi adicionado"))}

if (campeao7 === true){

    array.push(objeto7)
}

else {(alert("Objeto selecao7 não foi adicionado"))}

if (campeao8 === true){

    array.push(objeto8)
}

else {(alert("Objeto selecao8 não foi adicionado"))}

if (campeao9 === true){

    array.push(objeto9)
}

else {(alert("Objeto selecao9 não foi adicionado"))}


console.log(array)


// semana 3

for(i of array){
    console.log(i)}

const resultado = (objeto) =>{
    return objeto
}

console.log(resultado(objeto3))

const array2 = [
    {nome: "Brasil", vitorias: 5, corcamisa: "amarela"},  
    {nome: "espanha", vitorias: 1, corcamisa: "vermelha"},
    {nome: "Alemanha", vitorias: 4, corcamisa: "branca"},
    {nome: "Itália", vitorias: 4, corcamisa: "azul"},
    {nome: "Uruguai", vitorias: 2, corcamisa: "azul celeste"},
    {nome: "França", vitorias: 2, corcamisa: "azul"},
    {nome: "Argentina", vitorias: 2, corcamisa: "azul"},
    {nome: "Inglaterra", vitorias: 1, corcamisa: "branca"},
]

const apenas = array2.filter((palavra) =>{
return palavra.nome === "Brasil"})

console.log(apenas)




 





 








