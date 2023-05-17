import jwt from 'jsonwebtoken';

const chaveSecreta = "superSecreta";

const token = jwt.sign( 
    {
        apelido: "th",
        curso: " seguranca e nodejs"

    }, chaveSecreta
)

console.log(token)

const tokenDecodificado = jwt.verify(token,chaveSecreta)

console.log(tokenDecodificado)