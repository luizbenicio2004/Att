EXECUTAR O POWER SHELL NO MODO ADM
Set-ExecutionPolicy RemoteSigned
E CONFIRMAR DIGITANDO 's'

PARA INICIAR O PROJETO:
npm init -y

PARA INSTALAR O SERVIDOR:
npm install express

CRIAR ARQUIVO 'index.js'

RODAR O PROJETRO IGUAL RODEI NA MAQUINA MINHA
node index.js

NA URL:
http://localhost:3001/meuendpoint

CÓDIGO DO INDEX.JS:

//chamando o express:
const a = require('express')
//criando uma cópia para manipular:
const b = a()

//API com method GET trazendo a mensagem 'sua...'
b.get('/meuendpoint', (request, response)=>{
    response.send('sua resposta aqui!!!')
})

b.listen(3001,()=>{
    console.log("Abriu a porta")
})
