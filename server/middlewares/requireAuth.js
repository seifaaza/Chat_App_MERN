const jwt = require('jsonwebtoken');
const User = require('../models/User')

const requireAuth = async (req, res, next) => {
    try{
        const token = req.cookies.authentication; 
        const decoded = jwt.verify(token, process.env.SECRET)
        if(Date.now() > decoded.exp) {
            res.sendStatus(401)
        } else {
            const user = await User.findById(decoded.sub)
            if(!user) {
                res.sendStatus(401) 
            } else {
                req.user = user
                res.json({token : token})
            }
        }
        next()  
    } catch(err) {
         res.sendStatus(400)
    }
}



module.exports = requireAuth