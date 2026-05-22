
const user = "admin"
const password = 12345

if(user == "admin" && password == 12345){
    const permisao = "user"
    if(permisao == "admin"){
        console.log("Bem-vindo Administrador")
    }else if( permisao == "user"){
        console.log("Bem-vindo usuário")
    }else{
        console.log("Permissão inválida")
    }
}else{
    console.log("Usuário ou senha incorretos");
}