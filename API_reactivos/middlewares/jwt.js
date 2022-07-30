const jwt = require('jsonwebtoken')

function verifytoken(req, res, next) {
    const headerAuth = req.headers['autorizacion']
    if (headerAuth == null) {
        res.status(401).send("Token requerido")
    }

    let token = headerAuth.split(' ')[1]

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            res.status(401).send("Token Invalido")
        }

        req.userId = decoded.id
        req.username = decoded.username

        next()
    })
}

module.exports = verifytoken