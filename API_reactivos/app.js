const express = require('express')
const bodyParser = require('body-parser') //importando el midellware

const { ReactivoController } = require('./controllers/reactivo_controller')

let app = express();

app.use(bodyParser.json())

app.get('/',(req, res) => {
    res.send('Hello World')
})

app.post('/reactivos', ReactivoController.create)
app.get('/reactivos', ReactivoController.list)
app.get('/reactivo/:pk', ReactivoController.retrieve)
app.put('/reactivo/:pk', ReactivoController.update)
app.delete('/reactivo/:pk', ReactivoController.delete)

app.post('sign_up',)

app.listen(3000, ()=>{
    console.log('Servidor iniciado')
})