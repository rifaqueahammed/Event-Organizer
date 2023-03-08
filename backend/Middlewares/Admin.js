const jwt = require('jsonwebtoken')

module.exports = {

    verifyAdmin : (req,res,next)=>{
     try{
        const token = req.headers.authorization;
        const jwtSecretKey = process.env.JWT_SECRET_KEY;
        if(!token){
            res.status(400).send({
                token:false,
                message: 'No taken provided',
            });
        }else{
            jwt.verify(token.split(' ')[2],jwtSecretKey,(err) => {
                if (err) {
                    res.status(400).send({
                        token:false,
                        message: 'Authentication failed',
                    });
                } else {
                    next();
                }
            })
        }

     }catch{
        res.status(400).send({
            token:false,
            message: 'Something Wrong',
        });
     }
    }
}