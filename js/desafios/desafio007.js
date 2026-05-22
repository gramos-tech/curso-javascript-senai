
const number1 = 10
const number2 = 2

const operador = "/"

if(operador == "+"){
    console.log(`A adição de ${number1} + ${number2} = `, number1+number2)
}else if (operador == "-") {
    console.log(`A subtração de ${number1} - ${number2} = `, number1-number2)
}else if (operador == "*") {
    console.log(`A multiplicação de ${number1} * ${number2} = `, number1*number2)
}else if(operador == "/"){
    if(number2 == 0){
        console.log("Não é possível dividir por zero")
    }else{
        console.log(`A multiplicação de ${number1} / ${number2} = `, number1/number2)
    }
}

        





