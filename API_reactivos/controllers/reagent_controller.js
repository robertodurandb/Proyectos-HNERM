const { Reagent } = require('../models') 

class ReagentController {
    static create(req, res) {
        let data = req.body //trae toda la data del servidor
        //funcion callback
        Reagent.create(data)
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
        Reagent.findAll()  //funcion callback
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

        Reagent.findByPk(pk)
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

        Reagent.update(data, {
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

        Reagent.destroy({
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

module.exports = { ReagentController }