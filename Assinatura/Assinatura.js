import { generateKeyPairSync, createSign, createVerify } from 'crypto';
import { create } from 'domain';

const { privateKey, publicKey} = generateKeyPairSync('rsa',  
        {
            modulusLength: 2048,
    
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem',
        },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
        },
})

let dados = "Essa string vai ser assinada!"

//Assinatura

const assinador = createSign('rsa-sha256');

assinador.update(dados);

const assinatura = assinador.sign(privateKey, 'hex');
console.log(`Assinatura: ${assinatura}`)

//Intermediario 
dados += 'Arquivo'


//Envio do documento ---------------- Documento,Assinatura e chave publica

const verificador = createVerify('rsa-sha256');

verificador.update(dados);

const Everificado = verificador.verify(publicKey, assinatura, 'hex');

console.log(Everificado)