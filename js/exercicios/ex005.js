//VERIFICAR PELA IDADE, SE O VOTO É OBRIGATORIO, OPCIONAL OU NAO VOTA
// IDADE >= 18              -> OBRIGATORIO
// IDADE < 16               -> NAO VOTA
// IDADE >= 16 < 18         -> OPCIONAL
// IDADE > 65               -> OPCIONAL


let idadePessoa = 65

if (idadePessoa < 16){
    console.log("Não Vota!")
}else if(idadePessoa < 18 || idadePessoa >=65){
    console.log("Voto Opcional")
}else{
    console.log("Voto Obrigatório")
}
