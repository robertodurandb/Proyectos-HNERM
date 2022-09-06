const express = require('express')
const bodyParser = require('body-parser') //importando el midellware
const dotEnv = require('dotenv') //importando el entorno virtual secreto para las credenciales de la BD
const cors = require('cors')

dotEnv.config()

const { UserController } = require('./controllers/user_controller')
const { ReagentController } = require('./controllers/reagent_controller')
const { AreaController } = require('./controllers/area_controller')

const jwtMiddleware = require('./middlewares/jwt')

let app = express();

app.use(bodyParser.json())
app.use(cors())

app.get('/',(req, res) => {
    res.send('Hello World')
})

app.post('/reagents', jwtMiddleware, ReagentController.create)
app.get('/reagents', ReagentController.list)
app.get('/reagent/:pk', ReagentController.retrieve)
app.put('/reagent/:pk', jwtMiddleware, ReagentController.update)
app.delete('/reagent/:pk', jwtMiddleware, ReagentController.delete)

app.post('/areas', jwtMiddleware, AreaController.create)
app.get('/areas', AreaController.list)
app.get('/area/:pk', AreaController.retrieve)
app.put('/area/:pk', jwtMiddleware, AreaController.update)
app.delete('/area/:pk', jwtMiddleware, AreaController.delete)

app.get('/area/:areaId/reagents', AreaController.retrieve_by_area)

app.post('/users', jwtMiddleware, UserController.create)
app.post('/login', UserController.login)

app.listen(8000, ()=>{
    console.log('Servidor iniciado')
    console.log(process.env.SECRET)
})