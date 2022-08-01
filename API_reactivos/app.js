const express = require('express')
const bodyParser = require('body-parser') //importando el midellware
const dotEnv = require('dotenv') //importando el entorno virtual secreto para las credenciales de la BD

dotEnv.config()

const { ReactivoController } = require('./controllers/reactivo_controller')
const { UserController } = require('./controllers/user_controller')

const jwtMiddleware = require('./middlewares/jwt')

let app = express();

app.use(bodyParser.json())

app.get('/',(req, res) => {
    res.send('Hello World')
})

app.post('/reactivos', jwtMiddleware, ReactivoController.create)
app.get('/reactivos', ReactivoController.list)
app.get('/reactivo/:pk', ReactivoController.retrieve)
app.put('/reactivo/:pk', jwtMiddleware, ReactivoController.update)
app.delete('/reactivo/:pk', jwtMiddleware, ReactivoController.delete)

app.post('/users', jwtMiddleware, UserController.create)
app.post('/login', UserController.login)

app.listen(3000, ()=>{
    console.log('Servidor iniciado')
    console.log(process.env.SECRET)
})