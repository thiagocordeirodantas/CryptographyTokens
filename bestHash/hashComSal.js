import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'
import chalk from 'chalk';

function criaHashComSal(senha){
    const sal = randomBytes(16).toString('hex');

    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');

    return `${sal}:${senhaHasheada}`
}

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':')
    }
    autentica(nome, senha){
        if (nome === this.nome){
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex');

            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)

            if (hashesCorrespondem){
                console.log(chalk.green("Usuário autenticado com sucesso"))
                return true;
            }
        }

        console.log(chalk.red("Usuário ou senha incorretos."))
        return false;
    }
}

const thiago = new Usuario('Thiago', 'cordeiro98')

// Teste de sucesso
thiago.autentica('Thiago', 'cordeiro98')

// Testes de insucesso
thiago.autentica('th', 'senhaSecreta')
thiago.autentica('th', 'senhaErrada')