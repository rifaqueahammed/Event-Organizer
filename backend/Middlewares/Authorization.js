const jwt = require('jsonwebtoken')

module.exports = {

    verify : (req,res,next)=>{
     try{
        const token = req.headers.authorization;
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        if(!token){
            res.status(400).send({
                token:false,
                message: 'No token provided',
            });
        }else{
            const decode =  jwt.verify(token.split(' ')[2],jwtSecretKey)
            if(decode){
                req.id = decode.id;
                next();
            }
            else{
                res.status(400).send({
                    token:false,
                    message: 'Authorization failed',
                });
            }
        }
    }catch{
        res.status(400).send({
            token:false,
            message: 'Something Wrong',
        });
     }
    }
}