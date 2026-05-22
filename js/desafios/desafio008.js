
const idade = 60

let ingressoCriancas = "R$ 10"
let ingressoAdultos = "R$ 20"
let ingressoIdosos = "R$ 5"

if(idade<18){
    console.log(`A sua idade é ${idade} anos, você pagará ${ingressoCriancas} no ingresso`);
}else if(idade<60){
    console.log(`A sua idade é ${idade} anos, você pagará ${ingressoAdultos} no ingresso`);
}else
    console.log(`A sua idade é ${idade} anos, você pagará ${ingressoIdosos} no ingresso`);