import { createCipheriv, randomBytes, createDecipheriv} from 'crypto';
import chalk from 'chalk';

const Message = 'Ola tudo bem?';
const Key = randomBytes(32);
const vi = randomBytes(16);

const cifra = createCipheriv('aes256', Key, vi);

const messageCifra = cifra.update(Message, 'utf-8','hex') + cifra.final('hex');

console.log(messageCifra)

// Transmissao ----------------- chave,vetorI,mensagem

//Decifrar

const decifra = createDecipheriv('aes256', Key, vi)
const mensagemDecifrada = decifra.update(messageCifra,'hex','utf-8') + decifra.final('utf-8')


console.log(chalk.green(`Decifrado : ${mensagemDecifrada}`))