//chamando o express:
const a = require('express')
//criando uma cópia para manipular:
const b = a()

//API com method GET trazendo a mensagem 'sua...'
b.get('/meuendpoint', (request, response)=>{
    response.send('sua resposta aqui!!!')
})

b.listen(3004,()=>{
    console.log("Abriu a porta")
})