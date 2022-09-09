
const casa = "casapequena"
const tamanhometros = Number(40)
const corazul = Boolean(true)

const casa2 = "casamedia"
const tamanhometros2 = Number(60)
const corverde = Boolean(true)

const casa3 = "casamaior"
const tamanhometros3 = Number(90)
const coramarelo = Boolean(false)

const mediametros = tamanhometros + tamanhometros2 + tamanhometros3 
const mediametros2 = mediametros / 3

const cor = (corazul, corverde, coramarelo)

const arraycasa = [`Varanda`]
const arraydetalhe = arraycasa

const arraycasa2 = [`Jardim`]
const arraydetalhe2 = arraycasa2

const arraycasa3 = [`Piscina`]
const arraydetalhe3 = arraycasa3

const todososdados = (`${casa.toLocaleUpperCase()} \nTamanho: ${tamanhometros} metros \nCor azul: ${corazul} \nDetalhe: ${arraydetalhe}`)
const todososdados2 = (`${casa2.toLocaleUpperCase()} \nTamanho: ${tamanhometros2} metros \nCor verde: ${corverde} \nDetalhe: ${arraydetalhe2}`)
const todososdados3 = (`${casa3.toLocaleUpperCase()} \nTamanho: ${tamanhometros3} metros \nCor vermelha: ${coramarelo} \nDetalhe: ${arraydetalhe3}`)

console.log(mediametros2)

console.log(cor)

console.log(todososdados)
console.log(todososdados2)
console.log(todososdados3)

// semana 2

const objeto1 = {
casa :"casapequena",
tamanhometros : Number(40),
corazul : Boolean(true)
}

const objeto2 = {
casa2 : "casamedia",
tamanhometros2 : Number(60),
corverde : Boolean(true)
}

const objeto3 = {
casa3 : "casamaior",
tamanhometros3 : Number(90),
coramarelo : Boolean(false)    
}

const array = []

if (corazul === true){

    array.push(objeto1)
}

else {(alert("Objeto casa pequena não foi adicionado"))}

if (corverde === true){

    array.push(objeto2)
}

else {(alert("Objeto casa media não foi adicionado"))}

if (coramarelo === true){

    array.push(objeto3)
}

else {(alert("Objeto casa maior não foi adicionado"))}

console.log(array)
