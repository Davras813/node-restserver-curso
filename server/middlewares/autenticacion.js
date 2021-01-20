const jwt = require('jsonwebtoken');

//========================
// Verificar Token
//========================
let verificaToken = (req, res, next) => {

    let token = req.get('token'); // Authorization

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                //err,
                err: {
                    message: 'Toquen no válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();

    });

};

//========================
// Verificar AdminRole
//========================
let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario; // Authorization

    if (usuario.role !== 'ADMIN_ROLE') {

        return res.status(401).json({
            ok: false,
            //err,
            err: {
                message: 'Requiere privilegios de ADMIN'
            }
        });

    }
    next();


};

//========================
// Verificar Token para imágen
//========================
let verificaTokenImg = (req, res, next) => {
    let token = req.query.token

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });
}

module.exports = {
    verificaToken,
    verificaAdmin_Role,
    verificaTokenImg
}