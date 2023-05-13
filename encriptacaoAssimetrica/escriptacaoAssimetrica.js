import { generateKeyPairSync, privateDecrypt } from 'crypto';

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

//console.log(publicKey)
//console.log(privateKey)

import { publicEncrypt , privateEncrypt } from 'crypto';

const dadosCriptografados = publicEncrypt(publicKey,Buffer.from('Mensagem'))




//-------------- Transmissao ---------------

const dadosDecifrados = privateDecrypt(privateKey,dadosCriptografados)


console.log(dadosDecifrados.toString('utf-8'));