const bcrypt = require('bcrypt')
const { User }=require('../models/user')

class UserController {
    static create(req, res){
        let data = req.body

        bcrypt.genSalt(10, (err, salt)=> {
            bcrypt.hash(data.password, salt, (err, newPassword)=>{  
                data.password = newPassword

                User.create(data)
                .then((result)=>{
                    res.status(201).send(result)
                })
                
            })
        })

    }
}