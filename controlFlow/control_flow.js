/* let userRole = "admin";
let acessLevel;

if (userRole === "admin") {
    acessLevel = "Acesso total";
} else if (userRole === "manager") {
    acessLevel = "Acesso limitado";
} else {
    acessLevel = "Acesso negado";
}

console.log("Acesso do usuário:", acessLevel);




let userRole = "admin";
let acessLevel = (userRole === "admin") ? "Acesso total" : (userRole === "manager") ? "Acesso limitado" : "Acesso negado";




let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Bem vindo Admnistrador!";
    } else {
        userMessage = "Bem vindo Usuário!";
    }
} else {
    userMessage = "Por favor logue parar acessar o sistema.";
}

console.log("Mensagem do usuário:", userMessage);




let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Admnistrator";
        break;

    case "manager":
        userCategory = "Manager";
        break;
    
    case "subscriber":
        userCategory = "Subscriber";
        break
    
    default:
        userCategory = "Desconhecido";
}

console.log("Categoria do usuário:", userCategory);




let isAuthenticaded = true;
let authenticationStatus = isAuthenticaded ? "Autenticado" : "Não autenticado";

console.log("Autentificação:", authenticationStatus); */




let autenticado = true;
let estaAutenticado = autenticado ? "Autentificação completa..." : "error";
console.log(estaAutenticado);




let usuario = "assinante";
let permissao;

switch (usuario) {
    case "funcionario":
        permissao = "Funcionário, Está autorizado o acesso completo de nosso Serviço Dietético.";
        break

    case "membro-inscrito":
        permissao = "Membro inscrito, Está autorizado o acesso completo de nosso Serviço Dietético + auxilio de um de nossos nutricionistas.";
        break
    
    case "assinante":
        permissao = "Assinante, Está autorizado o acesso parcial de nosso Serviço Dietético.";
        break
        
    case "nao-assinante":    
        permissao = "Não Assinante, Assine um de nossos pacotes para obter acesso ao nosso Serviço Dietético.";
        break

    default:
        permissao = "Não foi encontrado o status do usuário.";   
}

console.log("Autorização de nível:", permissao);