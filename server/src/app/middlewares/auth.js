const jwt = require('jsonwebtoken');
const authConfig = require('../../config');

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({error: 'No token provided', code:'a01'});

    const parts = authHeader.split(' ');

    if(!parts.length === 2)
        return res.status(401).send({error: 'Token error', code:'a02'});

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({error: 'Token malformatted', code:'a03'});

    jwt.verify(token, authConfig.secret, (err, decoded) => {

        if(err) return res.status(401).send({error: 'Token invalid', code:'a04'});

        req.userId = decoded.id;
        return next();

    });

};