import { createHash } from 'crypto';
import chalk from 'chalk';

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex')
}

class Usuario {
    constructor(nome,senha){
        this.nome = nome;
        this.hash = criaHash(senha)
    }

    autentica(nome, senha){
        if(nome === this.nome && this.hash === criaHash(senha)){
            console.log(chalk.green('Usuario Autenticado com sucesso!!'))
            return true;
        }
        console.log(chalk.red('Usuario ou senha incorreta'))
    }
}

const usuario = new Usuario('Thiago','Thiagocordeiro98@')

//caso de sucesso
usuario.autentica('Thiago','Thiagocordeiro98@')

//caso de fracasso
usuario.autentica('thiaguinho','Thiagocordeiro98@')
usuario.autentica('Thiago','Thiagocordeiro9@')