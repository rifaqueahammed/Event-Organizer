const jwt = require('jsonwebtoken')

module.exports = {
    adminLogin : (req,res)=>{
        try{
           if(
            req.body.email === process.env.ADMIN_EMAIL && 
            req.body.password === process.env.ADMIN_PASSWORD){
                const payLoad = {
                    email: req.body.email
                  }
                const jwtSecretKey = process.env.JWT_SECRET_KEY;
                const token = jwt.sign(payLoad,jwtSecretKey,{ expiresIn: 86400 });
                res.json({auth:true,email: req.body.email, token:`Bearer ${token}`,});
            }else{
                const errormsg = {
                   error : 'Invalid Email or Password'
                } 
                res.json(errormsg)
            }
        }catch{
            // eslint-disable-next-line no-console
            console.log('error')
        }
    }
}