//OBJETO DE USUARIOS 
const users = {
    nome:'',
    usuario:'',
    senha:'',
    logado: false,
}
//ARRAY DE OBJETOS DOS USUARIOS
let usersArray = [];

function startApp(){
  let opcao = 999;
    while(opcao !== 0){
        let result;
        switch(opcao){
            case 1 :
               result = login();
               if(result){
                menu();
               }else{('usuario e senha incorretos!')

               }
                break;
            case 2:
               result = register();
               if(!result){
                    alert('Não foi possivel fazer o cadastro!')
               }  else {
                    alert('Usuario cadastrado com sucesso !👍 Agora é so acessar... ')

               }
                break;
            case 999:
                    alert('Voce precisa estar logado ' + 'para acessar o menu principal! \n\n'+'caso ainda não tenha usuario ' + 
                    'cadastrado ,utilize a opção 2 do menu' + 'e fça seu registro!'
                );break
            default: 

                alert ('Opção não encontrada')
                break;
        }
        opcao = Number(
            prompt(
                'Selecione a opção desejada:\n' +
                '1 - Entrar \n' + 
                '2 - Cadastrar usuario\n' +
                '3 - Esqueci minhas credenciais\n' +
                '0 - Sair'
            )
        )
    }
}

function login(){
    let user  = prompt('seu usuario');
    let pass  = prompt('sua senha');

    validateLogin(user, pass)
}
function validateLogin(user, pass){
    let result = false;
    for( let i = 0; i < usersArray.length; i ++){
        console.log(usersArray[i]);
        if(usersArray[i].usuario === user && usersArray[i].senha === pass){
            result = true;
        usersArray[i].logado =true;

        }
        
    }
    return result
}


function register(){
    let result = false;

    users.nome  =   prompt ('NOME:');
    users.usuario = prompt ('usuario:');
    users.senha = prompt ('senha:');

    if(users.nome !== ''  && users.senha !== ''){
        usersArray.push(users);
        result = true

    }

    return result
}



//inicia o sistema = startApp
startApp();