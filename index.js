
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

console.log(vitoriastotal2)


const campeaodomundo = (campeao && campeao2 && campeao3 && campeao4 && campeao5 && campeao6 && campeao7 && campeao8 && campeao9)

console.log(campeaodomundo)


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
selecao:"Brasil",
vitorias: Number(5),
campeao: Boolean(true),
corcamisa:["Amarela","azul"]
}

const objeto2 = {
selecao: "Espanha",
vitorias: Number(1),
campeao: Boolean(true),
corcamisa:["Branca","Vermelha"]
}

const objeto3 = {
selecao: "Chile",
vitorias: Number(3),
campeao: Boolean(false),
corcamisa:["Branca","Vermelha"]    
}

const objeto4 = {
selecao: "Alemanha",
vitorias: Number(4),
campeao: Boolean(true),
corcamisa:["Branca","Preta"]    
}

const objeto5 = {
selecao: "Itália",
vitorias: Number(4),
campeao: Boolean(true),
corcamisa:["Azul","Branca"]    
}

const objeto6 = {
selecao: "Uruguai",
vitorias: Number(2),
campeao: Boolean(true),
corcamisa:["Branca","Azul"]     
}

const objeto7 = {
selecao: "França",
vitorias: Number(2),
campeao: Boolean(true),
corcamisa:["Azul","Branca"]     
}

const objeto8 = {
selecao: "Argentina",
vitorias: Number(2),
campeao: Boolean(true),
corcamisa:["Azul","Branca"]     
}

const objeto9 = {
selecao: "Inglaterra",
vitorias: Number(1),
campeao: Boolean(true),
corcamisa:["Branca","Vermelha"]     
}


const array = []

if (objeto1.campeao === true){

    array.push(objeto1)
}

else {(alert("Objeto não foi adicionado"))}

if (objeto2.campeao === true){

    array.push(objeto2)
}

else {(alert("Objeto2 não foi adicionado"))}

if (objeto3.campeao === true){

    array.push(objeto3)
}

else {(alert("Objeto3 não foi adicionado"))}



if (objeto4.campeao === true){

    array.push(objeto4)
}

else {(alert("Objeto4 não foi adicionado"))}

if (objeto5.campeao === true){

    array.push(objeto5)
}

else {(alert("Objeto5 não foi adicionado"))}

if (objeto6.campeao === true){

    array.push(objeto6)
}

else {(alert("Objeto6 não foi adicionado"))}

if (objeto7.campeao === true){

    array.push(objeto7)
}

else {(alert("Objeto7 não foi adicionado"))}

if (objeto8.campeao === true){

    array.push(objeto8)
}

else {(alert("Objeto8 não foi adicionado"))}

if (objeto9.campeao === true){

    array.push(objeto9)
}

else {(alert("Objeto9 não foi adicionado"))}


console.log(array)



// semana 3


for(let i =0;i < array.length;i++){
    const todososdados = (`${array[i].selecao.toLocaleUpperCase()} \nVitórias: ${array[i].vitorias}  \nCampeão: ${array[i].campeao} \nDetalhe: ${array[i].corcamisa}`)
    console.log(todososdados)
}


const resultado = (timeEscolhido) =>{
    const stringObjeto = (`${timeEscolhido.selecao.toLocaleUpperCase()} \nVitórias: ${timeEscolhido.vitorias}  \nCampeão: ${timeEscolhido.campeao} \nDetalhe: ${timeEscolhido.corcamisa.join(" ")}`)
    return stringObjeto
}

console.log(resultado(objeto1))


const retornar = (listaDeTime, nomeDoTime) =>{
    for(let i =0;i < listaDeTime.length;i++){
        if(listaDeTime[i].selecao === nomeDoTime){
        return listaDeTime[i]
        }
    }
}
console.log(retornar(array, "Brasil"))



 





 








