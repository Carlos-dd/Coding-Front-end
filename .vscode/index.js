//console.log("teste")

//const arrayComparacao = [-9, 3, 89, 78, 88, 5]
//let maiorN = -Infinity

//for (let i = 0; i < arrayComparacao.length; i++) {
  //    if (arrayComparacao[i] > maiorN) {
    //    maiorN = arrayComparacao[i]

  //}
//}
//console.log("Maior numero: " + maiorN) 

const palavraFrases = [
    "oi", "sumido", "tudo", "bem?", "saudades"
]
let Frases = ""

for (const interator of palavraFrases){
    Frases = Frases + " " + interator
}
console.log(Frases)
