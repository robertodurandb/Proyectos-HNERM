
const { Reactivo } = require('../models')

class ReactivoController {

    static create(req, res) {
        let data = req.body //trae toda la data del servidor
        //funcion callback
        Reactivo.create(data)
            .then((result)=> {
                res.send(result)
            })
            .catch((err) => {
                res.status(400).send({
                    message: err.message
                })
            })
    }

    static list(req, res) { 
        Reactivo.findAll()  //funcion callback
            .then((result) => {
                res.status(200).send(result)
            })
            .catch((err) =>{
                res.status(404).send({
                    message: err.message
                })
            })
    }

    static retrieve(req, res){
        let pk = req.params.pk

        Reactivo.findByPk(pk)
            .then((result) =>{
                res.status(200).send(result)
            })
            .catch((err) =>{
                res.status(404).send({
                    message: err.message
                })
            })
    }

    static update(req, res) {
        let pk = req.params.pk
        let data = req.body

        Reactivo.update(data, {
            where: {id: pk}
        })
        .then((result)=>{
            res.status(200).send(result)
        })
        .catch((err)=>{
            res.status(400).send({
                message: err.message
            })
        })
    }

    static delete(req, res) {
        let pk = req.params.pk

        Reactivo.destroy({
            where: {
                id:pk
            }
        })
        .then((result)=>{
            res.status(200).send(result)
        })
        .catch((err)=>{
            res.status(400).send({
                message: err.message
            })
        })
    }
}

module.exports = { ReactivoController }