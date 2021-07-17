interface Usuario {
    nome: string;
    email: string;
    endereco?: string;
}

function getUser(): Usuario{
    return {
        nome: 'vitor',
        email:'vitor@vitor.com'
    }
}

function setUser(Usuario: Usuario){
    //....
}