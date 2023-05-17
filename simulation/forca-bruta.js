import { createHash } from 'crypto';

class Usuario {
    constructor(nome,senha){
        this.nome = nome;
        this.hash = this.criaHash(senha)
    }

     criaHash(senha){
        return createHash('sha256').update(senha).digest('hex')
    }

    autentica(nome, senha){
        if(nome === this.nome && this.hash === this.criaHash(senha)){
            console.log('Usuario Autenticado com sucesso!!')
            return true;
        }
        console.log('Usuario ou senha incorreta')
    }
}

const usuario = new Usuario('Thiago','1177')

for(let senha = 0; senha < 10000; senha++){
    if(usuario.autentica("Thiago",senha.toString())) {
       console.log(`Correto: ${senha}`)
    }
}