const { Area } = require('../models') 

class AreaController {
    static create(req, res) {
        let data = req.body //trae toda la data del servidor
        //funcion callback
        Area.create(data)
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
        Area.findAll()  //funcion callback
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

        Area.findByPk(pk)
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

        Area.update(data, {
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

        Area.destroy({
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

module.exports = { AreaController }